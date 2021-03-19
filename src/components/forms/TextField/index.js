import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Input = styled(Text)`
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  border-radius: ${({ theme }) => theme.borderRadius};

  outline: 0;

  height: 48px;
  width: ${({ width }) => width}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'labelTextII',
};

export default function TextField({
  name,
  value,
  onChange,
  width,
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        width={width}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  onChange: null,
};
