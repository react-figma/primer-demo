import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {GistLogo} from "../../components/icons/GistLogo";
import {GitHubLogo} from "../../components/icons/GitHubLogo";
import {GitHubMark} from "../../components/icons/GitHubMark";
import {Markdown} from "../../components/icons/Markdown";
import {Octoface} from "../../components/icons/Octoface";

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
                <GitHubMark style={styles.iconMargin} />
                <Markdown style={styles.iconMargin} />
                <Octoface style={styles.iconMargin} />
            </View>
        </View>
    </Frame>
};
