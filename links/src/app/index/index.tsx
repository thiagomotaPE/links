import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native"
import { router } from "expo-router"
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}></Image>
                <TouchableOpacity onPress={() => router.navigate("/add" as "/add/index")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories />

            <FlatList data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]} keyExtractor={item => item} renderItem={() => (
                <Link name="Portfolio" url="thiagomota.tech" onDetails={() => console.log("Clicou!")}/>  
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