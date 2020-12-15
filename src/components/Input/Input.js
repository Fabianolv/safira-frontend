import * as React from 'react';
import PropTypes from 'prop-types';

function Input({ label, type, onChange, value }) {
  return (
    <div className="input-block">
      <label>{label}</label>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
