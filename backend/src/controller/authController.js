import { registerUser, loginUser } from "../services/authService.js";


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message:
                "All fields are required"
            });
        }
        
        const user = await registerUser(name, email, password);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        })
    }

}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const result = await loginUser(email, password);

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            ...result
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message
        })
    }

}

export { register, login }