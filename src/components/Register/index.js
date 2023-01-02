import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useUser } from "../../hooks/useUser"
import "./Register.css"

const initialValues = {
  email: "",
  password: ""
}
const validationWithYup = Yup.object({
  email: Yup.string()
    .email("This is a not valid email")
    .required("This field is required"),
  password: Yup.string()
    .min(6, "You need to insert at least 6 characters")
    .required("This field is required")
})
export default function Register() {
  const { error, msgError, signUp } = useUser();

  const handleSubmit = ({ email, password }) => {
    signUp(email, password);
  }
  return (
    <div className="Form-wrapper">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationWithYup}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="email"
            id="email"
            type="text"
            placeholder="Insert your email"
          />
          <ErrorMessage name="email">{msg => <small className="error">{msg}</small>}</ErrorMessage>

          <Field
            name="password"
            id="password"
            type="password" placeholder="Insert a password" />
          <ErrorMessage name="password">{msg => <small className="error">{msg}</small>}</ErrorMessage>
          {error && (
            <small className="error">
              {msgError}
            </small>
          )}
          <button
            type="submit"
            className="btn"
          >
            Register
          </button>
        </ Form>
      </Formik >
      <p>Are you alrealdy registered?</p>
      <Link to="/login" className="btn-register">Login now!</Link>
    </div>
  )
}