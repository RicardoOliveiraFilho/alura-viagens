import React from 'react';
import PropTypes from 'prop-types';

import RadioWrapper from './styles/RadioWrapper';

export default function Radio({
  name, value, srcimg, onChange, ...props
}) {
  return (
    <RadioWrapper {...props}>
      <input
        type="radio"
        name={name}
        srcimg={srcimg}
        onClick={() => onChange(value)}
      />
      {
        (
          srcimg
          && (<img src={srcimg} alt={value} />)
        )
      }
      {' '}
      {value}
    </RadioWrapper>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  srcimg: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Radio.defaultProps = {
  srcimg: null,
};
