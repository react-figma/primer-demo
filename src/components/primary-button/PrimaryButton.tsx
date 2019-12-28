import * as React from "react";
import {StyleSheet, View, Text, Platform} from "react-native";
import {colors} from "../../tokens/colors";
import {typeScale} from "../../tokens/typography";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "SF Pro Text",
        fontWeight: "bold",
        fontSize: typeScale["5"],
        textAlign: "center",
        color: colors.white,
        zIndex: 1,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 12,
        marginRight: 12
    },
    background: {
        position: "absolute",
        borderRadius: 3,
        backgroundColor: `linear-gradient(-180deg, ${colors.green400} 0%, ${colors.green500} 90%)`,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: "rgba(27,31,35,0.2)"
    }
});

const hoverStyles = StyleSheet.create({
    text: {
        color: colors.white
    },
    background: {
        backgroundColor: colors.white,
        borderColor: colors.green,
        borderWidth: 2
    }
});

export interface IPrimaryButtonCommon {
    children: string,
    isDisabled?: boolean
}

export const PrimaryButton = (props: {isHover?: boolean,style?: any} & IPrimaryButtonCommon) => {
    const {style, children, isHover} = props;
    return <View style={[styles.container, style]}>
        <View style={[styles.background, isHover && hoverStyles.background]} />
        <Text style={[styles.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};
