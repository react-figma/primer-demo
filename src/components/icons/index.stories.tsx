import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import {GistLogo} from "./GistLogo";
import {GitHubLogo} from "./GitHubLogo";
import {GitHubMark} from "./GitHubMark";
import {Markdown} from "./Markdown";


storiesOf('Icons', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Gist Logo', () => <GistLogo/>)
    .add('GitHub Logo', () => <GitHubLogo/>)
    .add('GitHub Mark', () => <GitHubMark/>)
    .add('Markdown', () => <Markdown/>);
