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

export interface IDangerButtonCommon extends IButtonCommon {}

export const DangerButton = (props: {style?: any} & IDangerButtonCommon) => {
    const {style, children, isHover, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text]}>{children}</Text>
    </View>
};
