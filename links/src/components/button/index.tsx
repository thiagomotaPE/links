import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { colors } from "@/styles/colors"
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
}

export default function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}