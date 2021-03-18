/* eslint-disable indent */
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';
import textStylesVariantsMap from '../../../../../theme/utils/textStylesVariantsMap';

const FormContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding-left: 16px;

    ${breakpointsMedia({
        md: css`
            padding-left: 60px;

            h1 {
                ${textStylesVariantsMap.titleMD}
            }
        `,
    })}
`;

FormContentWrapper.InputGroup = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    ${breakpointsMedia({
        md: css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: ${({ flexDirection }) => (flexDirection || 'row')};

            input {
                width: ${({ sizeInput }) => sizeInput};
            }
        `,
    })}
`;

export default FormContentWrapper;
