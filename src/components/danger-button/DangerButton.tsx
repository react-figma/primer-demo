import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: colors.red600,
    },
    background: {
        ...commonButtonStyle.background,
        backgroundImage: `linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)`,
    }
} as any);

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

export interface IDefaultButtonCommon extends IButtonCommon {}

export const DangerButton = (props: {style?: any} & IDefaultButtonCommon) => {
    const {style, children, isHover, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background, isHover && hoverStyles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};
