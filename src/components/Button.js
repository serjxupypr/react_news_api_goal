import React from 'react';

const ButtonInline = ({onClick, type = 'button', btnText }) =>
    <button type={type} className="button-inline" onClick={onClick} >
      {btnText}
    </button>

export default ButtonInline;