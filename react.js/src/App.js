import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

function App() {

  return (
    <div className="App">
        <Formik
          initialValues={{ email: '', username: '' }}
          onSubmit={values => alert(JSON.stringify(values, null, 2))}
    >
      {({ errors, touched }) => (
        <Form>
          <Field validate={""} name="text" type="text" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br />
          <Field validate={""} name="comment" as="textarea" />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
            ) : null}
          <br />
          
          <Field validate={""} name="text" as="select"> 
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </Field>
          <br />

          <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
