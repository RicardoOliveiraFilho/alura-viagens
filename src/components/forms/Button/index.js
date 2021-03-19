/* eslint-disable indent */
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import textStylesVariantsMap from '../../../theme/utils/textStylesVariantsMap';

const Button = styled.button`
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  opacity: 1;
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  background-color: ${({ theme, background }) => get(theme, `colors.${background}.color`)};
  transition: opacity ${({ theme }) => theme.transition};
  width: 318px;
  height: 60px;
  margin-bottom: 32px;
  outline: 0;
  &:hover,
  &:focus {
    opacity: .5;
  }

  ${textStylesVariantsMap.buttonText}

  ${breakpointsMedia({
      md: css`
        width: 145px;
        height: 48px;
        margin-bottom: 54px;
      `,
  })}
`;

export default Button;
