import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {colors} from "../../tokens/colors";
import {typeScale} from "../../tokens/typography";
import {commonButtonStyle} from "../common-button/CommonButton";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: colors.gray900,
    },
    background: {
        ...commonButtonStyle.background,
        backgroundColor: `linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)`,
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

export interface IDefaultButtonCommon {
    children: string,
    isDisabled?: boolean
}

export const DefaultButton = (props: {isHover?: boolean,style?: any} & IDefaultButtonCommon) => {
    const {style, children, isHover} = props;
    return <View style={[styles.container, style]}>
        <View style={[styles.background, isHover && hoverStyles.background]} />
        <Text style={[styles.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};
