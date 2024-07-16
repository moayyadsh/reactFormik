import * as yup from "yup";

// const passordRules = /^(?=.*\d);

export const baisicSchema = yup.object().shape({
    email: yup.string().email("please enter a valid email").required(),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Required")

})
export const advancedSchema = yup.object().shape({
    username: yup
    .string()
    .min(3,"please enter a username")
    .required(),
    jobType: yup
    .string()
     .oneOf(["A","B","C"],"choose")
     .required("Required"),
    
    acceptedTos: yup
    .boolean()
    .oneOf([true],"please accept the terms")
   

})