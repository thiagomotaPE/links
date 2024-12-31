import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22 
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 22,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: colors.gray[200],
    },
    label: {
        fontSize: 14,
        paddingHorizontal: 24,
        color: colors.gray[400],
    },
})