import { Text, View, StyleSheet } from "react-native"
import { styles } from "./styles"
import { colors } from "../../styles/colors"

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={{color: "red", fontSize: 22}}>Hello</Text>
            <Text style={localStyles.title}>React-native</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    title: {
        color: colors.green[900],
        fontSize: 32,
    }, 
})