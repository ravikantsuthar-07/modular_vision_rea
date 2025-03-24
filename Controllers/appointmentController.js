import DB from '../DB/connection.js';

export const getAppointmentController = async (req, res) => {
    try {
        const sql = `SELECT * FROM appointments`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Appointment',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Appointment Get Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Appointment',
            error
        });
    }
}

export const createAppointmentController = async (req, res) => {
    try {
        const { name, email, mobile, service, message } = req.body;

        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Name is Required!...'
            })
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email is Required!...'
            })
        }
        if (!mobile) {
            return res.status(400).send({
                success: false,
                message: 'Mobile is Required!...'
            })
        }
        if (!service) {
            return res.status(400).send({
                success: false,
                message: 'Service is Required!...'
            })
        }
        if (!message) {
            return res.status(400).send({
                success: false,
                message: 'Message is Required!...'
            })
        }
        const sql = `INSERT INTO appointments (name, email, mobile, service, message) VALUES (?,?,?,?,?)`;
        await DB.query(sql, [name, email, mobile, service, message], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Creating Appointment',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Appointment Submit Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Creating Appointment',
            error
        });
    }
}

export const getCountAppointmentController = async (req, res) => {
    try {
        const sql = `SELECT COUNT(*) as count FROM appointments`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Counting Appointments',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Count Appointments Successfuuly',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Counting Appointments',
            error
        });
    }
}

export const getContactAppointmentController = async (req, res) => {
    try {
        const sql = `SELECT * FROM contacts`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Contact',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Contact Get Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Contact',
            error
        });
    }
}

export const createContactAppointmentController = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Name is Required!...'
            })
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email is Required!...'
            })
        }
        if (!subject) {
            return res.status(400).send({
                success: false,
                message: 'Subject is Required!...'
            })
        }
        if (!message) {
            return res.status(400).send({
                success: false,
                message: 'Message is Required!...'
            })
        }
        const sql = `INSERT INTO contacts (name, email, subject, message) VALUES (?,?,?,?)`;
        await DB.query(sql, [name, email, subject, message], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Sending Contact',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Contact Request Send Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Creating Contact',
            error
        });
    }
}


export const getCountContactController = async (req, res) => {
    try {
        const sql = `SELECT COUNT(*) as count FROM contacts`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Counting Contacts',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Count Contacts Successfuuly',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Counting Contacts',
            error
        });
    }
}