import { StyleSheet } from "react-native"
import { color } from "~/theme"

export const styles = StyleSheet.create({
    root: {
        flex:1 ,
        backgroundColor: color.palette.white,
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        color: color.palette.black,
        backgroundColor: color.palette.primary
    }
})