import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {GistLogo} from "../../components/icons/GistLogo";
import {GitHubLogo} from "../../components/icons/GitHubLogo";
import {GitHubMark} from "../../components/icons/GitHubMark";
import {Markdown} from "../../components/icons/Markdown";
import {Octoface} from "../../components/icons/Octoface";
import {Paintcan} from "../../components/icons/Paintcan";
import {Thumbsdown} from "../../components/icons/Thumbsdown";
import {Smiley} from "../../components/icons/Smiley";
import {GistSecret} from "../../components/icons/GistSecret";
import {Thumbsup} from "../../components/icons/Thumbsup";
import {Hubot} from "../../components/icons/Hubot";
import {Organization} from "../../components/icons/Organization";
import {Person} from "../../components/icons/Person";
import {Eye} from "../../components/icons/Eye";
import {EyeClosed} from "../../components/icons/EyeClosed";
import {Jersey} from "../../components/icons/Jersey";

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
                <Paintcan style={styles.iconMargin} />
            </View>
            <View style={{marginTop: 40}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="People" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.iconsLine}>
                <Thumbsdown style={styles.iconMargin} />
                <Smiley style={styles.iconMargin} />
                <GistSecret style={styles.iconMargin} />
                <Thumbsup style={styles.iconMargin} />
                <Hubot style={styles.iconMargin} />
                <Organization style={styles.iconMargin} />
                <Person style={styles.iconMargin} />
                <Eye style={styles.iconMargin} />
                <EyeClosed style={styles.iconMargin} />
                <Jersey style={styles.iconMargin} />
            </View>
        </View>
    </Frame>
};
