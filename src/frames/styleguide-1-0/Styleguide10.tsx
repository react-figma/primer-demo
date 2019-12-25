import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparator} from "../../components/styleguide-separator/StyleguideSeperator";
import {colors} from "../../tokens/colors";
import {StyleguideColor} from "../../components/styleguide-color/StyleguideColor";
import {styleguideTypography} from "../../components/styleguide-typography/styleguideTypography";
import {StyleguideFont} from "../../components/styleguide-font/StyleguideFont";
import {TypographyContainer} from "../../components/styleguide-typography/TypographyContainer";
import {typography} from "../../tokens/typography";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 82,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 82
    },
    colorsContainer: {
        flexDirection: "row",
        marginTop: 35,
    },
    colorWrapper: {
        marginLeft: 36
    },
    separator: {
        marginTop: 22
    },
    fontsContainer: {
        flexDirection: "row"
    },
    fontWrapper: {
        marginLeft: 105
    },
    typographyWrapper: {
        marginTop: 35
    },
    typographyContainer: {
        marginTop: 40
    }
});

export const Styleguide10 = (props) => {
    return <Frame name="Styleguide 1-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 77}}>
            <StyleguideLabel text="Colors" />
            <StyleguideSeparator style={styles.separator} />
            <View style={styles.colorsContainer}>
                <StyleguideColor color={colors.gray} />
                <StyleguideColor color={colors.blue} style={styles.colorWrapper} />
                <StyleguideColor color={colors.green} style={styles.colorWrapper} />
                <StyleguideColor color={colors.purple} style={styles.colorWrapper} />
                <StyleguideColor color={colors.yellow} style={styles.colorWrapper} />
                <StyleguideColor color={colors.orange} style={styles.colorWrapper} />
                <StyleguideColor color={colors.red} style={styles.colorWrapper} />
                <StyleguideColor color={colors.pink} style={styles.colorWrapper} />
                <StyleguideColor withBorder color={colors.white} style={styles.colorWrapper} />
            </View>
        </View>
        <View style={{marginTop: 77}}>
            <StyleguideLabel text="Fonts" />
            <StyleguideSeparator style={styles.separator} />
            <View style={styles.fontsContainer}>
                <Text style={[styleguideTypography.label, {marginTop: "42"}]}>SF Pro Display</Text>
                <StyleguideFont label="Regular" fontWeight="normal" style={styles.fontWrapper} />
                <StyleguideFont label="Semibold" fontWeight="semibold" style={styles.fontWrapper} />
                <StyleguideFont label="Bold" fontWeight="bold" style={styles.fontWrapper} />
            </View>
        </View>
        <View style={{marginTop: 106}}>
            <StyleguideLabel text="Fonts" />
            <StyleguideSeparator style={styles.separator} />
            <View style={styles.typographyWrapper}>
                <TypographyContainer
                    label={<Text style={styleguideTypography.label}>H1/left</Text>}
                    typography={<Text style={[typography.HeadingH1, {width: 460}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H2/left</Text>}
                    typography={<Text style={[typography.HeadingH2, {width: 460}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H3/left</Text>}
                    typography={<Text style={typography.HeadingH3}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H4/left</Text>}
                    typography={<Text style={typography.HeadingH4}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H5/left</Text>}
                    typography={<Text style={typography.HeadingH5}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H6/left</Text>}
                    typography={<Text style={typography.HeadingH6}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P/medium</Text>}
                    typography={<Text style={typography.PMedium}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P/normal</Text>}
                    typography={<Text style={typography.PNormal}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P/small</Text>}
                    typography={<Text style={typography.PSmall}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P/xsmall</Text>}
                    typography={<Text style={typography.PXSmall}>Sample text</Text>} />
            </View>
        </View>
    </Frame>
};
