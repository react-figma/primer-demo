import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {PrimaryButton} from "../../components/primary-button/PrimaryButton";
import {DefaultButton} from "../../components/default-button/DefaultButton";
import {DangerButton} from "../../components/danger-button/DangerButton";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 85,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 85
    },
    buttonsLine: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center"
    },
    buttonMargin: {
        marginLeft: 20
    }
});

export const Styleguide20 = (props) => {
    return <Frame name="Styleguide 2-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 69}}>
            <StyleguideSeparatorWrapper>
                <StyleguideLabel text="Buttons" />
            </StyleguideSeparatorWrapper>
            <View style={styles.buttonsLine}>
                <DefaultButton>Button</DefaultButton>
                <DefaultButton isSmall style={styles.buttonMargin}>Small button</DefaultButton>
            </View>
            <View style={styles.buttonsLine}>
                <PrimaryButton>Primary button</PrimaryButton>
                <PrimaryButton isFocus style={styles.buttonMargin}>Primary button</PrimaryButton>
                <PrimaryButton isSmall style={styles.buttonMargin}>Small primary button</PrimaryButton>
            </View>
            <View style={styles.buttonsLine}>
                <DangerButton>Danger button</DangerButton>
                <DangerButton isSmall style={styles.buttonMargin}>Small danger button</DangerButton>
            </View>
        </View>
    </Frame>
};