import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {GistLogo} from "../../components/icons/GistLogo";
import {GitHubLogo} from "../../components/icons/GitHubLogo";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 85,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 85
    },
    iconsLine: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center"
    },
    iconMargin: {
        marginRight: 20
    }
});

export const Styleguide30 = (props) => {
    return <Frame name="Styleguide 3-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 69}}>
            <StyleguideSeparatorWrapper>
                <StyleguideLabel text="Logos" />
            </StyleguideSeparatorWrapper>
            <View style={styles.iconsLine}>
                <GistLogo style={styles.iconMargin} />
                <GitHubLogo style={styles.iconMargin} />
            </View>
        </View>
    </Frame>
};
