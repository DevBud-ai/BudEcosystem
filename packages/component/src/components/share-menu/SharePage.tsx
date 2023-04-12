import { getEnvironment } from '@affine/env';
import type { LocalWorkspace } from '@affine/workspace/type';
import { WorkspaceFlavour } from '@affine/workspace/type';
import { useBlockSuiteWorkspacePageIsPublic } from '@toeverything/hooks/use-blocksuite-workspace-page-is-public';
import type { FC } from 'react';
import { useCallback, useMemo } from 'react';

import type { ShareMenuProps } from './index';
import {
  descriptionStyle,
  inputButtonRowStyle,
  menuItemStyle,
} from './index.css';
import {
  StyledButton,
  StyledDisableButton,
  StyledInput,
  StyledLinkSpan,
} from './styles';

export const LocalSharePage: FC<ShareMenuProps> = props => {
  return (
    <div className={menuItemStyle}>
      <div className={descriptionStyle}>
        Sharing page publicly requires AFFiNE Cloud service.
      </div>
      <StyledButton
        data-testid="share-menu-enable-affine-cloud-button"
        onClick={() => {
          props.onEnableAffineCloud(props.workspace as LocalWorkspace);
        }}
      >
        Enable AFFiNE Cloud
      </StyledButton>
    </div>
  );
};

export const AffineSharePage: FC<ShareMenuProps> = props => {
  const [isPublic, setIsPublic] = useBlockSuiteWorkspacePageIsPublic(
    props.currentPage
  );
  const sharingUrl = useMemo(() => {
    const env = getEnvironment();
    if (env.isBrowser) {
      return `${env.origin}/public-workspace/${props.workspace.id}/${props.currentPage.id}`;
    } else {
      return '';
    }
  }, [props.workspace.id, props.currentPage.id]);
  const onClickCreateLink = useCallback(() => {
    setIsPublic(true);
  }, [isPublic]);
  const onClickCopyLink = useCallback(() => {
    navigator.clipboard.writeText(sharingUrl);
  }, []);
  return (
    <div className={menuItemStyle}>
      <div className={descriptionStyle}>
        Create a link you can easily share with anyone.
      </div>
      <div className={inputButtonRowStyle}>
        <StyledInput
          type="text"
          readOnly
          value={isPublic ? sharingUrl : 'not public'}
        />
        {!isPublic && (
          <StyledButton onClick={onClickCreateLink}>Create</StyledButton>
        )}
        {isPublic && (
          <StyledButton onClick={onClickCopyLink}>Copy Link</StyledButton>
        )}
      </div>
      <div className={descriptionStyle}>
        The entire Workspace is published on the web and can be edited via
        <StyledLinkSpan>Workspace Settings.</StyledLinkSpan>
      </div>
      {isPublic && (
        <StyledDisableButton onClick={() => console.log('disable public link')}>
          Disable Public Link
        </StyledDisableButton>
      )}
    </div>
  );
};

export const SharePage: FC<ShareMenuProps> = props => {
  if (props.workspace.flavour === WorkspaceFlavour.LOCAL) {
    return <LocalSharePage {...props} />;
  } else if (props.workspace.flavour === WorkspaceFlavour.AFFINE) {
    return <AffineSharePage {...props} />;
  }
  throw new Error('Unreachable');
};
