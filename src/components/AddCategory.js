import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange=(e)=>{
      
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
       e.preventDefault();
       /* console.log("enviado!!!") */
    
       if(inputValue.trim().length>1){
         setCategories(cats=>[ inputValue ,...cats,]);
         setInputValue('');
       }
    }
    return (
       
        <form onSubmit={handleSubmit}>
          <input
           placeholder= "nombre gif"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          /> 
        </form>
       
    )
}
AddCategory.propTypes={
  setCategories: PropTypes.func.isRequired
}
