import * as React from 'react';
import { Page, StyleSheet } from 'react-figma';
import {Styleguide10} from "./frames/styleguide-1-0/Styleguide10";
import {Styleguide30} from "./frames/styleguide-3-0/Styleguide30";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row"
    },
    frameNonFirst: {
        marginLeft: 100
    }
});

export const App = () => {
    return (
        <Page isCurrent name="Styleguide" style={styles.page}>
            <Styleguide10 />
            <Styleguide30 style={styles.frameNonFirst} />
        </Page>
    );
};
