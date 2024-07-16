import { Field, Form, Formik } from "formik"
import { advancedSchema } from '../schemas'
import CustomInput from "./custominput"
import CustomCheckbox from "./CustomCheckbox"
import CustomSelect from "./CustomSelect";


const AdvancedForm = () => {
  return (
    <Formik initialValues={{ username: "", jobType: "", acceptedTos: "" }}
      validationSchema={advancedSchema}
    >
      {(props) => (
        <Form>
          <CustomInput
            label="username"
            name="username"
            type="text"
            placeholder="Enter your user name"
          />

          <CustomSelect
            CustomSelect
            label="Jop Type"
            name="Jop Type"
            placeholder="please select char"
          >
            <option value="A"></option>

            <option value="B"></option>

            <option value="C"></option>


          </CustomSelect>
          <CustomCheckbox type='checkbox' name='acceptedTos' />
          <button type="submit"> Submit</button>

        </Form>
      )}

    </Formik>
  )
};
export default AdvancedForm;