import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const JWT_SECRET = "my-super-secret-key"

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization

   if (!authHeader) {
    return res.status(401).json({
        message: "Authorization header is missing"
    })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
console.log("Decoded JWT:", decoded)

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

