import {StyleSheet} from "react-native";

export const typeScale = {
    "00": 48,
    "0": 40,
    "1": 32,
    "2": 24,
    "3": 20,
    "4": 16,
    "5": 14,
    "6": 12
};

export const typography = StyleSheet.create({
    HeadingH1: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["1"],
        fontWeight: "600",
    },
    HeadingH2: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["2"],
        fontWeight: "600"
    },
    HeadingH3: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["3"],
        fontWeight: "600",
    },
    HeadingH4: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["4"],
        fontWeight: "600",
    },
    HeadingH5: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["5"],
        fontWeight: "600"
    },
    HeadingH6: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["6"],
        fontWeight: "600"
    },
    Paragraph1: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["1"],
        fontWeight: "normal",
    },
    Paragraph2: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["2"],
        fontWeight: "normal"
    },
    Paragraph3: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["3"],
        fontWeight: "normal",
    },
    Paragraph4: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["4"],
        fontWeight: "normal",
    },
    Paragraph5: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["5"],
        fontWeight: "normal"
    },
    Paragraph6: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale["6"],
        fontWeight: "normal"
    }
});
