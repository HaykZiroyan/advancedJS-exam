import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from "yup";

const checkSchema = Yup.object().shape({
    text: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
      comment: Yup.string()
      .min(10, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      selected: Yup.string().required('Required'),
  });
 
const Forms = () => {
  return (
    <div>
        <Formik
          initialValues={{ text: '', comment: '', selected: '' }}
          onSubmit={values => console.log(values)}
          validationSchema={checkSchema}
    >
        <Form>
          <Field validate={""} name="text" type="text" />
          <br />
          <Field validate={""} name="comment" as="textarea" />

          <br />
          
          <Field validate={""} name="selected" as="select"> 
            <option value="">select type</option>
            <option value="developer">type 1</option>
            <option value="designer">type 2</option>
            <option value="manager">type 3</option>
            <option value="other">type 4</option>
          </Field>
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Forms