import styled from 'styled-components';
import { space, layout, color, display, grid } from 'styled-system';
// npm i styled-system styled-components

// ============ ImageGalleryList ===================

// ImageGalleryList = Box
export const Box = styled.div`
  ${space}
  ${layout} 
  ${color} 
  ${display} 
  ${grid}
`;

export const ImageGalleryCard = styled.li`
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  position: ${p => p.theme.position.relative};
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const BtnLoadMore = styled.button`
  margin-top: 10px;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radius.normal};
  background-color: ${p => p.theme.colors.blue};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: ${p => p.theme.position.center};
  display: block;
  margin-left: ${p => p.theme.position.auto};
  margin-right: ${p => p.theme.position.auto};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.middle};
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.blueAccent};
  }
`;

export const IdleText = styled.div`
  margin-top: 30px;
  text-align: ${p => p.theme.position.center};

  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
`;

// ============ ModalWindow ===================

export const Overlay = styled.div`
  position: ${p => p.theme.position.fixed};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${p => p.theme.display.flex};
  justify-content: ${p => p.theme.position.center};
  align-items: ${p => p.theme.position.center};
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalFormBtn = styled.button`
  position: ${p => p.theme.position.absolute};
  top: 6%;
  right: 16.65%;
  background-color: ${p => p.theme.colors.blue};

  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    opacity: 1;
  }
`;

export const ModalFormBtnLabel = styled.span`
  position: ${p => p.theme.position.absolute};
  width: 1px;
  height: 1px;
  padding: ${p => p.theme.space[0]}px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: ${p => p.theme.borders.none};
`;

// ============ Searchbar ===================
export const SearchbarContainer = styled.header`
  top: 0;
  left: 0;
  position: ${p => p.theme.position.sticky};
  z-index: 1100;
  display: ${p => p.theme.display.flex};
  justify-content: ${p => p.theme.position.center};
  align-items: ${p => p.theme.position.center};
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.position.center};
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radius.smart};
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    opacity: 1;
  }
`;

export const SearchFormIcon = styled.svg`
  stroke: currentColor;
  fill: currentColor;
  stroke-width: 0;
  width: 16px;
  height: 16px;
  opacity: 0.6;

  :hover,
  :focus {
    opacity: 1;
  }
`;

export const SearchFormBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: ${p => p.theme.space[0]}px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: ${p => p.theme.borders.none};
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
