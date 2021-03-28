import React from 'react';

const SelectForm = ({
  formTitle
}) => {
  return(
    <div className="paqc-select-form-container">
      <select className="form-control form-control-sm">
        <option disabled selected value="disabled">-- {formTitle} --</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  )
}
export default SelectForm