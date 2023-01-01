import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useAuth } from "../../hooks/useAuth"
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
  const { signUp } = useAuth()
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async ({ email, password }) => {
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.warn(err);
      setError(err);
    }
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
              {error.code}
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
    </div>
  )
}