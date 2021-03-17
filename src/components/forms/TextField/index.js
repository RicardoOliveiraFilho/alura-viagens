import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../../theme/utils/propToStyle';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Input = styled(Text)`
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${propToStyle('width')}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'labelTextII',
};

export default function TextField({
  name,
  value,
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        name={name}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
