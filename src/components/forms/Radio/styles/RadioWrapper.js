/* eslint-disable indent */
import styled, { css } from 'styled-components';

import textStylesVariantsMap from '../../../../theme/utils/textStylesVariantsMap';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const RadioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    width: 106px;
    height: 79px;

    border: 1px solid ${({ theme }) => theme.colors.borders.main.color};

    ${function roundEdge(props) {
      if (props.start_round_edge) {
        return css`
          border-radius: ${({ theme }) => theme.borderRadius} 0px 0px ${({ theme }) => theme.borderRadius};
        `;
      }

      if (props.end_round_edge) {
        return css`
          border-radius: 0px ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0px;
        `;
      }

      return css``;
    }}

    ${textStylesVariantsMap.radioText}

    input {
        display: none;
    }

    ${breakpointsMedia({
        md: css`
            width: 125px;
        `,
    })}
`;

export default RadioWrapper;
