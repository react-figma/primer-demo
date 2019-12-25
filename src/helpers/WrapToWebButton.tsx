import * as React from "react";

import {useHover} from "../hooks/useHover";
// @ts-ignore
import "./button.css";

const WrapToWebButton = (props: {onClick?: () => void, children: (callback: {isHover?: boolean}) => React.ReactNode}) => {
    const {children, onClick} = props;
    const [isHover, handlers] = useHover();
    return <button className="button" onClick={onClick} {...handlers}>
        {children({isHover})}
    </button>
};

export default WrapToWebButton;
