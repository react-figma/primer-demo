import * as React from 'react';
import DangerButton from "./DangerButton.web";
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';


storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Danger Button', () => <DangerButton
        isSmall={boolean("isSmall", false)}>
        {text("children", "Danger Button")}
    </DangerButton>);
