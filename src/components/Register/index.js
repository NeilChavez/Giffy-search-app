import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const initialState = {
  email: "",
  password: "",
};
export default function Register() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (email, password) => {
    //manda a navigation /home, se tutto va bene
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.warn(err);
      setError(err);
      console.warn("sono nel catch, qualcosa e' andato male");
    }
  };
  return (
    <>
      {error && (
        <div style={{ border: "thin solid red", display: "inline-block" }}>
          {error.code}
        </div>
      )}
      <div className="Form-wrapper">
        <h2>Register</h2>
        <form
          className="Form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(form.email, form.password);
          }}
        >
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="insert your mail"
            value={form.email}
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="insert your password"
            value={form.password}
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}
