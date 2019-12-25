import {StyleSheet, Platform} from "react-native";

export const typography = StyleSheet.create({
    HeadingH1: {
        fontFamily: "SF Pro Display",
        fontSize: 43,
        fontWeight: "bold",
        lineHeight: 1.05,
        letterSpacing: -1
    },
    HeadingH2: {
        fontFamily: "SF Pro Display",
        fontSize: 34,
        // @ts-ignore
        fontWeight: (Platform.OS === "figma" ? "semibold" : "600" as any),
        lineHeight: 1.15
    },
    HeadingH3: {
        fontFamily: "SF Pro Display",
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 1.04
    },
    HeadingH4: {
        fontFamily: "SF Pro Display",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 1.08,
        letterSpacing: -0.11
    },
    HeadingH5: {
        fontFamily: "SF Pro Display",
        fontSize: 21,
        fontWeight: "bold",
        lineHeight: 1.24,
        letterSpacing: -0.11
    },
    HeadingH6: {
        fontFamily: "SF Pro Display",
        fontSize: 18,
        // @ts-ignore
        fontWeight: (Platform.OS === "figma" ? "semibold" : "600" as any),
        lineHeight: 1.22
    },
    PMedium: {
        fontFamily: "SF Pro Display",
        fontSize: 21,
        lineHeight: 1.24
    },
    PNormal: {
        fontFamily: "SF Pro Display",
        fontSize: 16,
        lineHeight: 1.44
    },
    PSmall: {
        fontFamily: "SF Pro Display",
        fontSize: 14,
        lineHeight: 1.36
    },
    PXSmall: {
        fontFamily: "SF Pro Display",
        fontSize: 13
    }
});
