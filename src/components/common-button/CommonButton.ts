import {StyleSheet} from "react-native";
import {typeScale} from "../../tokens/typography";

const borderSize = 1;

export const commonButtonStyle = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "SF Pro Text",
        fontWeight: "bold",
        fontSize: typeScale["5"],
        lineHeight: 1.42,
        textAlign: "center",
        zIndex: 1,
        marginTop: 6 + borderSize,
        marginBottom: 6 + borderSize,
        marginLeft: 12 + borderSize,
        marginRight: 12 + borderSize
    },
    background: {
        position: "absolute",
        borderRadius: 3,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: "rgba(27,31,35,0.2)"
    }
});
