import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {GistLogo} from "../../components/icons/GistLogo";
import {GitHubLogo} from "../../components/icons/GitHubLogo";
import {GitHubMark} from "../../components/icons/GitHubMark";
import {Markdown} from "../../components/icons/Markdown";
import {Octoface} from "../../components/icons/Octoface";
import {Paintcan} from "../../components/icons/Paintcan";
import {Thumbsdown} from "../../components/icons/Thumbsdown";
import {Smiley} from "../../components/icons/Smiley";
import {GistSecret} from "../../components/icons/GistSecret";
import {Thumbsup} from "../../components/icons/Thumbsup";
import {Hubot} from "../../components/icons/Hubot";
import {Organization} from "../../components/icons/Organization";
import {Person} from "../../components/icons/Person";
import {Eye} from "../../components/icons/Eye";
import {EyeClosed} from "../../components/icons/EyeClosed";
import {Jersey} from "../../components/icons/Jersey";
import {Code} from "../../components/icons/Code";
import {DiffAdded} from "../../components/icons/DiffAdded";
import {DiffIgnored} from "../../components/icons/DiffIgnored";
import {Gist} from "../../components/icons/Gist";
import {DiffModified} from "../../components/icons/DiffModified";
import {DiffRemoved} from "../../components/icons/DiffRemoved";
import {GitCommit} from "../../components/icons/GitCommit";
import {DiffRenamed} from "../../components/icons/DiffRenamed";
import {GitCompare} from "../../components/icons/GitCompare";
import {Diff} from "../../components/icons/Diff";
import {GitBranch} from "../../components/icons/GitBranch";
import {GitMerge} from "../../components/icons/GitMerge";
import {Database} from "../../components/icons/Database";
import {GitPullRequest} from "../../components/icons/GitPullRequest";
import {IssueClosed} from "../../components/icons/IssueClosed";
import {IssueOpened} from "../../components/icons/IssueOpened";
import {IssueReopened} from "../../components/icons/IssueReopened";
import {CircuitBoard} from "../../components/icons/CircuitBoard";
import {NoNewLine} from "../../components/icons/NoNewLine";
import {Broadcast} from "../../components/icons/Broadcast";
import {Keyboard} from "../../components/icons/Keyboard";
import {FileZip} from "../../components/icons/FileZip";
import {FileBinary} from "../../components/icons/FileBinary";
import {FileCode} from "../../components/icons/FileCode";
import {FileDirectory} from "../../components/icons/FileDirectory";
import {FileMedia} from "../../components/icons/FileMedia";
import {FilePdf} from "../../components/icons/FilePdf";
import {FileSubmodule} from "../../components/icons/FileSubmodule";
import {FileSymlinkDirectory} from "../../components/icons/FileSymlinkDirectory";
import {FileSymlinkFile} from "../../components/icons/FileSymlinkFile";
import {Browser} from "../../components/icons/Browser";
import {File} from "../../components/icons/File";
import {RepoClone} from "../../components/icons/RepoClone";
import {RepoForcePush} from "../../components/icons/RepoForcePush";
import {RepoForked} from "../../components/icons/RepoForked";
import {RepoPull} from "../../components/icons/RepoPull";
import {RepoPush} from "../../components/icons/RepoPush";
import {Repo} from "../../components/icons/Repo";
import {Ruby} from "../../components/icons/Ruby";
import {Mirror} from "../../components/icons/Mirror";
import {Server} from "../../components/icons/Server";
import {Terminal} from "../../components/icons/Terminal";
import {RadioTower} from "../../components/icons/RadioTower";
import {Rss} from "../../components/icons/Rss";
import {Versions} from "../../components/icons/Versions";
import {Dependent} from "../../components/icons/Dependent";
import {RepoTemplate} from "../../components/icons/RepoTemplate";
import {RepoTemplatePrivate} from "../../components/icons/RepoTemplatePrivate";
import {Workflow} from "../../components/icons/Workflow";
import {WorkflowAll} from "../../components/icons/WorkflowAll";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 85,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 85
    },
    iconsLine: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        maxWidth: 1040,
        flexWrap: "wrap"
    },
    iconMargin: {
        marginRight: 20
    }
});

export const Styleguide30 = (props) => {
    return <Frame name="Styleguide 3-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 69}}>
            <StyleguideSeparatorWrapper>
                <StyleguideLabel text="Logos" />
            </StyleguideSeparatorWrapper>
            <View style={styles.iconsLine}>
                <GistLogo style={styles.iconMargin} />
                <GitHubLogo style={styles.iconMargin} />
                <GitHubMark style={styles.iconMargin} />
                <Markdown style={styles.iconMargin} />
                <Octoface style={styles.iconMargin} />
                <Paintcan style={styles.iconMargin} />
            </View>
            <View style={{marginTop: 80}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="People" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.iconsLine}>
                <Thumbsdown style={styles.iconMargin} />
                <Smiley style={styles.iconMargin} />
                <GistSecret style={styles.iconMargin} />
                <Thumbsup style={styles.iconMargin} />
                <Hubot style={styles.iconMargin} />
                <Organization style={styles.iconMargin} />
                <Person style={styles.iconMargin} />
                <Eye style={styles.iconMargin} />
                <EyeClosed style={styles.iconMargin} />
                <Jersey style={styles.iconMargin} />
            </View>
            <View style={{marginTop: 80}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="Developer" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.iconsLine}>
                <Code style={styles.iconMargin} />
                <DiffAdded style={styles.iconMargin} />
                <DiffIgnored style={styles.iconMargin} />
                <Gist style={styles.iconMargin} />
                <DiffModified style={styles.iconMargin} />
                <DiffRemoved style={styles.iconMargin} />
                <GitCommit style={styles.iconMargin} />
                <DiffRenamed style={styles.iconMargin} />
                <GitCompare style={styles.iconMargin} />
                <Diff style={styles.iconMargin} />
                <GitBranch style={styles.iconMargin} />
                <GitMerge style={styles.iconMargin} />
                <Database style={styles.iconMargin} />
                <GitPullRequest style={styles.iconMargin} />
                <IssueClosed style={styles.iconMargin} />
                <IssueOpened style={styles.iconMargin} />
                <IssueReopened style={styles.iconMargin} />
                <CircuitBoard style={styles.iconMargin} />
                <NoNewLine style={styles.iconMargin} />
                <Broadcast style={styles.iconMargin} />
                <Keyboard style={styles.iconMargin} />
                <FileZip style={styles.iconMargin} />
                <FileBinary style={styles.iconMargin} />
                <FileBinary style={styles.iconMargin} />
                <FileCode style={styles.iconMargin} />
                <FileDirectory style={styles.iconMargin} />
                <FileMedia style={styles.iconMargin} />
                <FilePdf style={styles.iconMargin} />
                <FileSubmodule style={styles.iconMargin} />
                <FileSymlinkDirectory style={styles.iconMargin} />
                <FileSymlinkFile style={styles.iconMargin} />
                <Browser style={styles.iconMargin} />
                <File style={styles.iconMargin} />
                <RepoClone style={styles.iconMargin} />
                <RepoForcePush style={styles.iconMargin} />
                <RepoForked style={styles.iconMargin} />
                <RepoPull style={styles.iconMargin} />
                <RepoPush style={styles.iconMargin} />
                <Repo style={styles.iconMargin} />
                <Ruby style={styles.iconMargin} />
                <Mirror style={styles.iconMargin} />
                <Server style={styles.iconMargin} />
                <Terminal style={styles.iconMargin} />
                <RadioTower style={styles.iconMargin} />
                <Rss style={styles.iconMargin} />
                <Versions style={styles.iconMargin} />
                <Dependent style={styles.iconMargin} />
                <RepoTemplate style={styles.iconMargin} />
                <RepoTemplatePrivate style={styles.iconMargin} />
                <Workflow style={styles.iconMargin} />
                <WorkflowAll style={styles.iconMargin} />
            </View>
        </View>
    </Frame>
};
