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
    .max(25, "L'email deve essere massimo di 15 caratteri")
    .min(1, "You need to insert a value")
    .required("Required"),
  password: Yup.string()
    .max(25, "La password deve essere massimo 10 caratteri")
    .min(1, "You need to insert a value")
    .required("Required")
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
            type="text" placeholder="Insert a password" />
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
            Registrate
          </button>
        </ Form>
      </Formik >
    </div>
  )
}