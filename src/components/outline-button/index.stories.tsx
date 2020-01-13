import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import OutlineButton from "./OutlineButton.web";


storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Outline Button', () => <OutlineButton
        isSmall={boolean("isSmall", false)}>
        {text("children", "Outline Button")}
    </OutlineButton>);
