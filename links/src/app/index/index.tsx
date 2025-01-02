import { useState, useCallback } from "react"
import { View, Image, TouchableOpacity, FlatList, Modal, Text, Alert } from "react-native"
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
    async function getLinks() {
        try {
            const response = await linkStorage.get()
            setLinks(response)
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel salvar o link")
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
                <Link name={item.name} url={item.url} onDetails={() => console.log("Clicou!")}/>  
            )}
            style={styles.links}
            contentContainerStyle={styles.linksContainer}
            showsVerticalScrollIndicator={false}
            />
            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Site</Text>
                            <TouchableOpacity>
                               <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modaLinkName}>Portfolio</Text>
                        <Text style={styles.modaUrl}>thiagomota.tech</Text>
                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary"/>
                            <Option name="Abrir" icon="language" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}