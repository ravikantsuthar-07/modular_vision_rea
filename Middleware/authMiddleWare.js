import DB from '../DB/connection.js'
import JWT from 'jsonwebtoken'

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Signed",
            error
        });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        await DB.query(
            `SELECT * FROM auth WHERE id = ${req.user.id}`, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Authorision User",
                        err
                    });
                } else {
                    if (result[0].status !== 1) {
                        return res.status(401).json({
                            success: false,
                            message: 'EnAuthorise User'
                        });
                    } else {
                        next()
                    }
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'You Not A Authrise User',
            error
        });
    }
}