import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useAuth } from "../../hooks/useAuth"
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationWithYup}
      onSubmit={handleSubmit}>
      <Form>
        {error && (
          <div style={{ border: "thin solid red", display: "inline-block" }}>
            {error.code}
          </div>
        )}
        <Field
          name="email"
          id="email"
          type="text"
        />
        <ErrorMessage name="email" />
        <Field
          name="password"
          id="password"
          type="text" />
        <ErrorMessage name="password" />
        <button
          type="submit"
          className="btn"
        >
          Registrate
        </button>
      </ Form>
    </Formik >
  )
}