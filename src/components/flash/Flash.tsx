import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {colors} from "../../tokens/colors";
import {spacingScale} from "../../tokens/spacingScale";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 3,
        backgroundColor: colors.blue100,
        borderWidth: 1,
        borderColor: "rgba(27,31,35,0.15)"
    },
    content: {
        margin: spacingScale.spacer3
    }
});

export const Flash = (props: {children: React.ReactNode}) => {
    const {children} = props;
    return <View style={styles.container}>
        <View style={styles.background} />
        <View style={styles.content}>
            {children}
        </View>
    </View>
};
