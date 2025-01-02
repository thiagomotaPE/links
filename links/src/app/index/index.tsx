import { useState, useCallback } from "react"
import { View, Image, TouchableOpacity, FlatList, Modal, Text, Alert, Linking } from "react-native"
import { router, useFocusEffect } from "expo-router"
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"
import { categories } from "@/utils/categories"
import { LinkStorage, linkStorage } from "@/storage/link-storage"

export default function Index() {
    const [category, setCategory] = useState(categories[0].name)
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage)
    const [showModal, setShowModal] = useState(false)

    async function getLinks() {
        try {
            const response = await linkStorage.get()
            const filtered = response.filter((link) => link.category === category)
            setLinks(filtered)
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel buscar os link's")
            console.log(error) 
        }
    }

    function handleDetails(selected: LinkStorage) {
        setShowModal(true)
        setLink(selected)
    }

    async function linkRemove() {
        try {
            await linkStorage.remove(link.id)
            getLinks()
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel excluir o link")
            console.log(error) 
        }
    }
    function handleRemove() {
        Alert.alert("Excluir", "Deseja realmente excluir?", [
            {style: "cancel", text: "Não"},
            {text: "Sim", onPress: linkRemove}
        ])
    }

    async function handleOpen() {
        try {
            await Linking.openURL(link.url)
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel abrir o link")
            console.log(error) 
        }
    }

    useFocusEffect(useCallback(() => {
        getLinks()
    }, [category]))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}></Image>
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories onChange={setCategory} selected={category} />

            <FlatList data={links} keyExtractor={item => item.id} renderItem={({item}) => (
                <Link name={item.name} url={item.url} onDetails={() => handleDetails(item)}/>  
            )}
            style={styles.links}
            contentContainerStyle={styles.linksContainer}
            showsVerticalScrollIndicator={false}
            />
            <Modal transparent visible={showModal} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>{link.category}</Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                               <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modaLinkName}>{link.name}</Text>
                        <Text style={styles.modaUrl}>{link.url}</Text>
                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove}/>
                            <Option name="Abrir" icon="language" onPress={handleOpen}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}