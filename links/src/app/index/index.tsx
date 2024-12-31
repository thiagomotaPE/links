import { View, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Categories } from "@/components/categories"

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
        </View>
    )
}