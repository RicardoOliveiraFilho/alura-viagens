import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

import propToStyle from '../../../theme/utils/propToStyle';

import textStylesVariantsMap from '../../../theme/utils/textStylesVariantsMap';

const TextBase = styled.span`
    ${({ variant }) => textStylesVariantsMap[variant]}
    color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

    ${propToStyle('margin')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'labelTextII',
};
