import React from 'react';


const Input = ({name,type,iconClass,placeholder,value,handleChange}) => {
    return (
        <div className="input-group">
            <span className="input-group-addon" id={name}><i className={iconClass}/></span>
            <input
                type={type}
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;
