import React from 'react'
import { Form, useFormik } from 'formik'
import { baisicSchema } from '../schemas'

const onSubmit = (values,action) => {
  console.log(values)
  console.log(action)

};

function BaiscForm() {
    const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",

        },
        validationSchema: baisicSchema,
        onSubmit,
    })
    console.log(errors);

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id='email'
                type='email'
                placeholder='Enter your email'
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className='error'> {errors.email} </p>}

            <label htmlFor="age">Age</label>
            <input
                value={values.age}
                onChange={handleChange}
                id='age'
                type='age'
                placeholder='Enter your age'
                onBlur={handleBlur}
                className={errors.age && touched.age ? "input-error" : ""}

            />
            {errors.age && touched.age && <p className='error'> {errors.age} </p>}


            <label htmlFor="password">password</label>
            <input
                value={values.password}
                onChange={handleChange}
                id='password'
                type='password'
                placeholder='Enter your password'
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}

            />
            {errors.password && touched.password && <p className='error'> {errors.password} </p>}

            <label htmlFor="confirmPassword">confirmPassword</label>
            <input
                value={values.confirmPassword}
                onChange={handleChange}
                id='confirmPassword'
                type='confirmPassword'
                placeholder='Enter your confirmPassword'
                onBlur={handleBlur}
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}

            />
            {errors.confirmPassword && touched.confirmPassword && <p className='error'> {errors.confirmPassword} </p>}
            <button type='submit'>Submit</button>

        </form>
    )
}

export default BaiscForm