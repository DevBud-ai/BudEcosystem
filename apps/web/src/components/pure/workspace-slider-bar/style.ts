import { displayFlex, styled } from '@affine/component';
import Link from 'next/link';

const macosElectron = environment.isDesktop && environment.isMacOs;

export const StyledSliderBarWrapper = styled('div')<{
  show: boolean;
  floating: boolean;
  resizing: boolean;
}>(({ theme, show, floating, resizing }) => {
  return {
    height: '100%',
    position: 'absolute',
    'button, a': {
      userSelect: 'none',
    },
    zIndex: theme.zIndex.modal,
    transition: resizing ? '' : 'transform .3s, width .3s, max-width .3s',
    transform: show ? 'translateX(0)' : 'translateX(-100%)',
    maxWidth: floating ? 'calc(10vw + 400px)' : 'calc(100vw - 698px)',
    background:
      !floating && macosElectron ? 'transparent' : theme.colors.hubBackground,
    borderRight: macosElectron ? '' : '1px solid',
    borderColor: theme.colors.borderColor,
  };
});

export const StyledSliderBar = styled('div')(({ theme }) => {
  return {
    whiteSpace: 'nowrap',
    width: '100%',
    height: '100%',
    padding: '0 4px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    // overflow: 'hidden',
  };
});
export const StyledSidebarSwitchWrapper = styled('div')(() => {
  return {
    height: '52px',
    flexShrink: 0,
    padding: '0 16px',
    WebkitAppRegion: 'drag',
    button: {
      WebkitAppRegion: 'no-drag',
    },
    ...displayFlex(macosElectron ? 'flex-end' : 'flex-start', 'center'),
  };
});
export const StyledSliderBarInnerWrapper = styled('div')(() => {
  return {
    flexGrow: 1,
    // overflowX: 'hidden',
    // overflowY: 'auto',
    position: 'relative',
    margin: '10px 5px 10px 10px',
    borderRadius: '5px',
    background: '#131313',
    border: '1px solid #222222',
  };
});

export const StyledLink = styled(Link)(() => {
  return {
    flexGrow: 1,
    textAlign: 'left',
    color: 'inherit',
    ...displayFlex('flex-start', 'center'),
    ':visited': {
      color: 'inherit',
    },
  };
});
export const StyledNewPageButton = styled('button')(({ theme }) => {
  return {
    height: '52px',
    ...displayFlex('flex-start', 'center'),
    background: '#131313',
    margin: '5px 5px 10px 10px',
    borderRadius: '5px',
    border: '1px solid #222222',
    padding: '0 8px',
    svg: {
      fontSize: '20px',
      color: theme.colors.iconColor,
      marginRight: '8px',
    },
    ':hover': {
      color: theme.colors.primaryColor,
      svg: {
        color: theme.colors.primaryColor,
      },
    },
  };
});
export const StyledSliderModalBackground = styled('div')<{ active: boolean }>(
  ({ theme, active }) => {
    return {
      transition: 'opacity .15s',
      pointerEvents: active ? 'auto' : 'none',
      opacity: active ? 1 : 0,
      position: 'fixed',
      top: 0,
      left: 0,
      right: active ? 0 : '100%',
      bottom: 0,
      zIndex: theme.zIndex.modal - 1,
      background: theme.colors.modalBackground,
    };
  }
);
export const StyledSliderResizer = styled('div')<{ isResizing: boolean }>(
  () => {
    return {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '12px',
      transform: 'translateX(50%)',
      cursor: 'col-resize',
      zIndex: 1,
      userSelect: 'none',
      ':hover > *': {
        background: 'rgba(0, 0, 0, 0.1)',
      },
    };
  }
);
export const StyledSliderResizerInner = styled('div')<{ isResizing: boolean }>(
  ({ isResizing }) => {
    return {
      transition: 'background .15s .1s',
      position: 'absolute',
      top: 0,
      right: '50%',
      bottom: 0,
      transform: 'translateX(0.5px)',
      width: '2px',
      background: isResizing ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
    };
  }
);

export const StyledScrollWrapper = styled('div')<{
  showTopBorder: boolean;
}>(({ showTopBorder, theme }) => {
  return {
    maxHeight: '360px',
    overflowY: 'auto',
    borderTop: '1px solid',
    borderColor: showTopBorder ? theme.colors.borderColor : 'transparent',
  };
});
