import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {PrimaryButton} from "../../components/primary-button/PrimaryButton";
import {DefaultButton} from "../../components/default-button/DefaultButton";
import {DangerButton} from "../../components/danger-button/DangerButton";
import {OutlineButton} from "../../components/outline-button/OutlineButton";
import {Flash} from "../../components/flash/Flash";
import {FlashText} from "../../components/flash/FlashText";

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
    },
    alertLine: {
        marginTop: 40
    },
    alertText: {
        fontFamily: "SF Pro Display",
        fontSize: 14,
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
            <View style={styles.buttonsLine}>
                <OutlineButton>Outline button</OutlineButton>
                <OutlineButton isSmall style={styles.buttonMargin}>Outline button</OutlineButton>
            </View>
            <View style={{marginTop: 40}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="Alerts" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.alertLine}>
                <Flash>
                    <FlashText>Flash message goes here.</FlashText>
                </Flash>
            </View>
            <View style={styles.alertLine}>
                <Flash>
                    <FlashText>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</FlashText>
                    <FlashText style={{marginTop: 10}}>And this is another paragraph.</FlashText>
                </Flash>
            </View>
            <View style={styles.alertLine}>
                <Flash isWarn>
                    <FlashText isWarn>Flash message goes here.</FlashText>
                </Flash>
            </View>
            <View style={styles.alertLine}>
                <Flash isError>
                    <FlashText isError>Flash message goes here.</FlashText>
                </Flash>
            </View>
            <View style={styles.alertLine}>
                <Flash isSuccess>
                    <FlashText isSuccess>Flash message goes here.</FlashText>
                </Flash>
            </View>
        </View>
    </Frame>
};
