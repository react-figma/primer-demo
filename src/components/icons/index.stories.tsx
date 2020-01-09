import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import {GistLogo} from "./GistLogo";
import {GitHubLogo} from "./GitHubLogo";
import {GitHubMark} from "./GitHubMark";
import {Markdown} from "./Markdown";
import {Octoface} from "./Octoface";
import {Paintcan} from "./Paintcan";
import {Thumbsdown} from "./Thumbsdown";
import {Smiley} from "./Smiley";
import {GistSecret} from "./GistSecret";
import {Thumbsup} from "./Thumbsup";
import {Hubot} from "./Hubot";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Eye} from "./Eye";
import {EyeClosed} from "./EyeClosed";
import {Jersey} from "./Jersey";


storiesOf('Icons', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Gist Logo', () => <GistLogo/>)
    .add('GitHub Logo', () => <GitHubLogo/>)
    .add('GitHub Mark', () => <GitHubMark/>)
    .add('Markdown', () => <Markdown/>)
    .add('Octoface', () => <Octoface/>)
    .add('Paintcan', () => <Paintcan/>)
    .add('Thumbsdown', () => <Thumbsdown />)
    .add('Smiley', () => <Smiley/>)
    .add('GistSecret', () => <GistSecret/>)
    .add('Thumbsup', () => <Thumbsup/>)
    .add('Hubot', () => <Hubot/>)
    .add('Organization', () => <Organization/>)
    .add('Person', () => <Person/>)
    .add('Eye', () => <Eye/>)
    .add('EyeClosed', () => <EyeClosed/>)
    .add('Jersey', () => <Jersey/>);
