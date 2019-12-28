import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {PrimaryButton} from "../../components/primary-button/PrimaryButton";
import {DefaultButton} from "../../components/default-button/DefaultButton";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 85,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 85
    },
    buttonsLine: {
        flexDirection: "row",
        marginTop: 40
    },
    underlineButtonsContainer: {
        flexDirection: "row",
        marginTop: 73
    },
    arrowButtonsContainer: {
        flexDirection: "row",
        marginTop: 56
    },
});

export const Styleguide30 = (props) => {
    return <Frame name="Styleguide 3-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 69}}>
            <StyleguideSeparatorWrapper>
                <StyleguideLabel text="Buttons" />
            </StyleguideSeparatorWrapper>
            <View style={styles.buttonsLine}>
                <DefaultButton>Button</DefaultButton>
            </View>
            <View style={styles.buttonsLine}>
                <PrimaryButton>Primary button</PrimaryButton>
            </View>
        </View>
    </Frame>
};
