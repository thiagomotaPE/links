import { View, Image, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}></Image>
                <TouchableOpacity>
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
        </View>
    )
}