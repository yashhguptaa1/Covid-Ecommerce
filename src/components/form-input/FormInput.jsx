//REUSABLE COMPONENT to build FORMS
import React from 'react';

import './FormInput.scss';

//we require handleChange here cauz we want to bubble up chnges made by input tag 
//we want input tag and label tag to be together so we wrap them in <div c=group>
//whenever user starts typing in the input the label shrinks
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;