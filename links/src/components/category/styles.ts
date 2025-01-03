import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.gray[400],
    }
})