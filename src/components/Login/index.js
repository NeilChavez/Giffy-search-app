import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const initialState = {
    email: "",
    password: "",
};
export default function Login({ onLogin }) {
    const [form, setForm] = useState(initialState);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (email, password) => {
        try {
            await login(email, password);
            navigate("/");
            onLogin && onLogin();
        } catch (err) {
            console.warn(err);
            setError(err);
            console.warn("sono nel catch, qualcosa e' andato male");
        }
        //manda a navigation /home
    };
    return (
        <>
            {error && (
                <div style={{ border: "thin solid red", display: "inline-block" }}>
                    {error.code}
                </div>
            )}
            <div className="Form-wrapper">
                <h2>Login</h2>
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
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    );
}
