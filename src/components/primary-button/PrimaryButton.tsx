import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: colors.white,
    },
    background: {
        ...commonButtonStyle.background,
        backgroundColor: `linear-gradient(-180deg, ${colors.green400} 0%, ${colors.green500} 90%)`,
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

export interface IPrimaryButtonCommon extends IButtonCommon {}

export const PrimaryButton = (props: {isHover?: boolean,style?: any} & IPrimaryButtonCommon) => {
    const {style, children, isHover, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background, isHover && hoverStyles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};
