import * as React from 'react';
import DefaultButton from "./DefaultButton.web";
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';


storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default Button', () => <DefaultButton
        isSmall={boolean("isSmall", false)}>
        {text("children", "Button")}
    </DefaultButton>);
