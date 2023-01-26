import React, {useState} from 'react'

export const Radio = ({ pergunta, options, id, value, onChange, active }) => {

  if(active === false) return null;
  return (
    <>
      <fieldset>
        <h2>{pergunta}</h2>

        {
          options.map((option)=>(
            <label key={option}>
              <input 
                type="radio" 
                id={id}
                checked={value === option}
                value={option}
                onChange={onChange}
              />
              {option}
            </label>
          ))
        }
      </fieldset>
    </>
  )
}
