import * as React from "react";
import {Platform, Image} from "react-native";
import {Svg} from "react-figma"

export const Icon = (props) => {
    const {source, ...otherProps} = props;
    // @ts-ignore
    if (Platform.OS === "figma") {
        return <Svg source={source} {...otherProps} />
    }
    return <Image source={source} {...otherProps} />
};
