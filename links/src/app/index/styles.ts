import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22 
    },
    header: {
        paddingHorizontal: 22,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: 32,
        width: 38,    
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContainer: {
        gap: 21,
        padding: 18,
        paddingBottom: 100,
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end"
    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 42,
        padding: 24,
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[400],
    },
    modaLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200],
    },
    modaUrl: {
        fontSize: 14,
        color: colors.gray[400],
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14,
    },
})