import { useState } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import API from "../api/notesApi";

const Register = () => {

    const navigate =
        useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            password: ""
        });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = async (
        e
    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            setError("");

            await API.post(
                "/auth/register",
                formData
            );

            navigate("/login");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Registration failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Register
                </h1>

                {error && (
                    <p className="text-red-500 mb-4" >
                        {error}
                    </p>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} className="w-full bg-sky-100 focus:border p-3 rounded-lg" />

                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full bg-sky-100 focus:border p-3 rounded-lg" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} className="w-full bg-sky-100 focus:border p-3 rounded-lg" />
                    </div>


                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-800 transition duration-300 ease-in-out"
                    >
                        {
                            loading
                                ? "Loading..."
                                : "Register"
                        }
                    </button>
                </form>

                <p
                    className="mt-4 text-center"
                >
                    Already have an account?

                    <Link to="/login" className=" text-blue-600 ml-2">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;