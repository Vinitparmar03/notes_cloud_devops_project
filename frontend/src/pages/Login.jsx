import { Form, Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import API from "../api/notesApi";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("")

            const response = await API.post("/auth/login", formData);
            login(response.data.token, response.data.user);
            navigate("/dashboard");

        } catch (error) {
            setError(error.response?.data?.message || "Login failed");
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                {error && (
                    <p className="text-red-500 mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" value={FormData.email} onChange={handleChange} required className="w-full p-3 focus:border rounded-lg" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-3 focus:border rounded-lg" />
                    </div>
                    <button disabled={loading} type="submit" className="cursor-pointer w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out"> {
                        loading
                            ? "Loading..."
                            : "Login"
                    }
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Don't have an account?

                    <Link to="/register" className="text-blue-600 ml-2">
                        Register
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default Login