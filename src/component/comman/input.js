import React from 'react';


const Input = (props) => {
    const {label,type,value,handleChange,placeholder,name,id} = props
    return (
        <div className="form-group">
        {label && <label htmlFor="input-field" title={label}>{label}</label>}
        <input type={type} value={value} name={name} className="form-control" id={id} placeholder={placeholder} onChange={handleChange} />
      </div>
    );
}


export default Input;