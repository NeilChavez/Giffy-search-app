import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
const initialState = {
  email: "",
  password: "",
};
export default function Login() {
  const [form, setForm] = useState(initialState);
  const value = useAuth();
 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send:", form);
    //registra utente
    //manda a navigation /home
  };
  return (
    <form onSubmit={handleSubmit}>
       {console.log(value)}
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
      <input type="submit" value="login" />
    </form>
  );
}
