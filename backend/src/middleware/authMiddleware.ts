import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

// const JWT_SECRET = "my-super-secret-key"
const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined")
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!JWT_SECRET) {
        return res.status(500).json({
            message: "JWT_SECRET is not configured"
        })
    }

    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header is missing"
        })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)

        if (typeof decoded === "string") {
            return res.status(401).json({
                message: "Invalid token"
            })
        }

        req.user = {
            id: decoded.id as number,
            email: decoded.email as string
        }

        next()
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

