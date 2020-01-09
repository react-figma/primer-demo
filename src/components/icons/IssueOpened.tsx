import * as React from "react";
import icon from "./icons/issue-opened.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 14,
        height: 16
    }
});

export const IssueOpened = (props) => {
    const {style} = props;
    return <Icon source={icon} style={[styles.icon, style]} />
};

