import React from 'react';

const Input = (props) => {
  
    return (
        <form onSubmit={props.hendleSearch}
         className="main-form" >

            <input type="text"
            onChange={props.hendleInputChange}
             className="main-input"
              placeholder="Search any meal..."
              autoComplete="off"
               name="meal" />  

            <input type="submit"
             className="main-btn" 
             value="Go" />

        </form>
    )
}
export default Input;