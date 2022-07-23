// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Basic = () => (
  <div>
    <h4>Formik Form with Yup Schema Validation</h4>
    {/* <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({ isSubmitting }) => (
        <Form>
          <Field type='email' name='email' /> Email:
          <ErrorMessage name='email' component='div' />
          <br />
          <Field type='password' name='password' /> Password:
          <ErrorMessage name='password' component='div' />
          <br />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik> */}
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        toggle: true,
        checked: [],
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}>
      {({ values }) => (
        <Form>
          <label>
            <Field type='checkbox' name='toggle' />
            {`${values.toggle}`}
          </label>
          <div id='checkbox-group'>Checked</div>
          <div role='group' aria-labelledby='checkbox-group'>
            <label>
              <Field type='checkbox' name='checked' value='One' />
              One
            </label>
            <label>
              <Field type='checkbox' name='checked' value='Two' />
              Two
            </label>
            <label>
              <Field type='checkbox' name='checked' value='Three' />
              Three
            </label>
          </div>
          <Field id='firstName' name='firstName' placeholder='Jane' />
          <label htmlFor='firstName'> First Name</label>
          <br />
          <Field id='lastName' name='lastName' placeholder='Doe' />
          <label htmlFor='lastName'> Last Name</label>
          <br />
          <Field
            id='email'
            name='email'
            placeholder='ex: jane@acme.com'
            type='email'
          />
          <label htmlFor='email'> Email</label>
          <br />
          <button type='submit'> Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
