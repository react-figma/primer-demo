import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import {GistLogo} from "./GistLogo";
import {GitHubLogo} from "./GitHubLogo";


storiesOf('Icons', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Gist Logo', () => <GistLogo/>)
    .add('GitHub Logo', () => <GitHubLogo/>);
