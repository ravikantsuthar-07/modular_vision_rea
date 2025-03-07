import { comparePassword, hashPassword } from '../Helper/authHelper.js';
import DB from "../DB/connection.js";
import JWT from "jsonwebtoken";
export const createAuthController = async (req, res) => {
    try {
        console.log(req.body);
        
        const { name, mobile, email, password } = req.body;
        if (!name) {
            return res.status(404).send({
                success: false,
                message: 'Name is Required'
            });
        }
        if (!mobile) {
            return res.status(404).send({
                success: false,
                message: 'Mobile Number is Required'
            });
        }
        if (!email) {
            return res.status(404).send({
                success: false,
                message: 'Email is Required'
            });
        }
        if (!password) {
            return res.status(404).send({
                success: false,
                message: 'Password is Required'
            });
        }
console.log("RAVI@@@");

        const hashedPassword = await hashPassword(password);
        await DB.query(
            `SELECT email, name From auth WHERE email = '${email}'`, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Insert User in Table',
                        err
                    });
                } else {
                    if (results.length > 0) {
                        return res.status(400).json({
                            success: false,
                            message: 'Email Already register',
                            results
                        });
                    }
                }
            }
        );

        const sql = `INSERT INTO auth (name, email, password) VALUES (?,?,?)`;
        await DB.query(sql, [name, email, hashedPassword], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Add User in Database',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'User Regiseted Succesfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Creating',
            error
        });
    }
}

export const loginAuthController = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email) {
            return res.status(404).send({
                success: false,
                message: 'Email is Required'
            });
        }
        if (!password) {
            return res.status(404).send({
                success: false,
                message: 'Password is Required'
            });
        }

        const sql = `SELECT * FROM auth WHERE email = '${email}'`
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in login form Database',
                    err
                });
            } else {
                if (results.length === 0) {
                    return res.send(200).send({
                        success: true,
                        message: 'Email is not Registered'
                    })
                } else {
                    compare(password, results);
                }
            }
        });


        const compare = async (pass, result) => {
            const match = await comparePassword(pass, result[0].password);
            if (match) {
                const token = await JWT.sign({id: result[0].id }, process.env.JWT_SECRET, {expiresIn: '1d'});
                return res.status(200).send({
                    success: true,
                    message: 'Login Successfully',
                    result,
                    token
                });
            } else {
                return res.status(401).send({
                    success: false,
                    message: 'Please Enter Valid Password'
                });
            }
        }

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        });
    }
}