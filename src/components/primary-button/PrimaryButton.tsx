import * as React from "react";
import {StyleSheet, View, Text, Platform} from "react-native";
import {colors} from "../../tokens/colors";

const styles = StyleSheet.create({
    container: {
        minWidth: 200,
        height: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "SF Pro Display",
        fontSize: 15,
        // @ts-ignore
        fontWeight: (Platform.OS === "figma" ? "semibold" : "600"),
        lineHeight: 1.67,
        letterSpacing: -0.13,
        textAlign: "center",
        color: colors.white,
        zIndex: 1
    },
    background: {
        position: "absolute",
        borderRadius: 26,
        backgroundColor: colors.persimmon,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    }
});

const hoverStyles = StyleSheet.create({
    text: {
        color: colors.persimmon
    },
    background: {
        backgroundColor: colors.white,
        borderColor: colors.persimmon,
        borderWidth: 2
    }
});

const disabledStyles = StyleSheet.create({
    text: {
        color: colors.white
    },
    background: {
        backgroundColor: colors.gray300,
        borderWidth: 0
    }
});

const largeStyles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    container: {
        height: 52,
        minWidth: 230,
    }
});

const grayscaleStyles = StyleSheet.create({
    text: {
        color: colors.gray900
    },
    background: {
        backgroundColor: colors.white,
        borderColor: colors.gray900,
        borderWidth: 1
    }
});

const grayscaleHoverStyles = StyleSheet.create({
    text: {
        color: colors.white
    },
    background: {
        backgroundColor: colors.gray900,
        borderWidth: 0
    }
});

export interface IPrimaryButtonCommon {
    children: string,
    isDisabled?: boolean,
    isLarge?: boolean,
    isGrayscale?: boolean
}

export const PrimaryButton = (props: {isHover?: boolean,style?: any} & IPrimaryButtonCommon) => {
    const {style, children, isHover, isDisabled, isLarge, isGrayscale} = props;
    return <View style={[styles.container, isLarge && largeStyles.container, style]}>
        <View style={[styles.background, isHover && hoverStyles.background, isDisabled && disabledStyles.background, !isDisabled && isGrayscale && grayscaleStyles.background, !isDisabled && isGrayscale && isHover && grayscaleHoverStyles.background]} />
        <Text style={[styles.text, isHover && hoverStyles.text, isDisabled && disabledStyles.text, isLarge && largeStyles.text, !isDisabled && isGrayscale && grayscaleStyles.text, !isDisabled && isGrayscale && isHover && grayscaleHoverStyles.text]}>{children}</Text>
    </View>
};
