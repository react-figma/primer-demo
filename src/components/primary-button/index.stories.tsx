import * as React from 'react';
import PrimaryButton from "./PrimaryButton.web";
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';


storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Primary Button', () => <PrimaryButton
        isDisabled={boolean("isDisabled", false)}
        isGrayscale={boolean("isGrayscale", false)}
        isLarge={boolean("isLarge", false)}>
        {text("children", "Подробнее")}
    </PrimaryButton>);
