import * as React from 'react';
import PrimaryButton from "./PrimaryButton.web";
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';


storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Primary Button', () => <PrimaryButton
        isSmall={boolean("isSmall", false)}>
        {text("children", "Primary Button")}
    </PrimaryButton>);
