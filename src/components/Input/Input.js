import React from 'react';
import PropTypes from 'prop-types';

function Input({
  label, type, onChange, value,
}) {
  return (
    <div className="input-block">
      <p>{label}</p>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
