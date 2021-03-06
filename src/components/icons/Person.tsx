import * as React from "react";
import icon from "./icons/person.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 12,
        height: 16
    }
});

export const Person = (props) => {
    const {style} = props;
    return <Icon source={icon} style={[styles.icon, style]} />
};

