import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./style/Login.css";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess("Login successful!");
            setLoading(false);
            setTimeout(() => navigate("/"), 1000);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            setSuccess("Google sign-in successful!");
            setLoading(false);
            setTimeout(() => navigate("/"), 1000);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="text-success mb-4">Welcome Back</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            placeholder="Enter your email" type="email"
                            className="form-control bg-white text-dark"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            placeholder="Enter your password"
                            type="password"
                            className="form-control bg-white text-dark"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <input type="checkbox" disabled={loading} /> Remember me
                        </div>
                        <a href="#" className="text-success">Forgot your password?</a>
                    </div>

                    <button type="submit" className="btn btn-gradient w-100" disabled={loading}>
                        {loading ? "Logging in..." : "LOG IN"}
                    </button>

                    <div className="my-3 text-center">
                        <span style={{ color: '#aaa' }}>──────────  or  ──────────</span>
                    </div>

                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-outline-green w-100 d-flex align-items-center justify-content-center"
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" style={{ width: 20, marginRight: 8 }} />
                            Sign in with Google
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <small>Don't have an account? <span className="text-success" style={{ cursor: 'pointer' }} onClick={handleSignUp}>Sign up</span></small>
                </div>
            </div>
        </div>
    );
}

export default Login;