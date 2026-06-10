import { useAuth } from "../context/AuthContext"

const Navbar = () => {

    const {user, logout} = useAuth();

    const handleLogout = () => {
        logout();
        window.location.href = "/login";
    }


    return (
        <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
                Notes App
            </h1>

            <p className="text-sm text-gray-500">
                Welcome, {" "} {user?.name}
            </p>

            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Logout
            </button>

        </nav>
    )
}

export default Navbar