import { useField } from 'formik'
import React from 'react'



function CustomCheckbox({label,...props}) {
    const[field , meta ] =useField(props)
  return (
    <>
    <div className="checkbox">
    <input 
    {...field}
    {...props}/>
    <span>I accept the terms</span>
    </div>
    {meta.touched && meta.error && <div className='error'></div>}
    </>
  )
}

export default CustomCheckbox