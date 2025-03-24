import DB from '../DB/connection.js'
export const getServiceController = async (req, res) => {
    try {
        const sql = `SELECT * FROM services WHERE status = 1`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in DataBase!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Services Get Successfully!..',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Sercvices',
            error
        });
    }
}

export const getLastServiceController = async (req, res) => {
    try {
        const sql = `SELECT * FROM services WHERE status = 1 ORDER BY id DESC LIMIT 6`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in DataBase!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Services Get Successfully!..',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Sercvices',
            error
        });
    }
}


export const getSingleServiceController = async (req, res) => {
    try {
        const id =req.params.id;
        const sql = `SELECT * FROM services WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Services',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Service Get Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Sercvices',
            error
        });
    }
}

export const getAdminServiceController = async (req, res) => {
    try {
        const sql = `SELECT * FROM services`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in DataBase!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Services Get Successfully!..',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Sercvices',
            error
        });
    }
}

export const createServiceController = async (req, res) => {
    try {
        const { name, shortDesc, icons, heading, subHeading, Decs1, Decs2 } = req.body;
        const image = req.file;
        if (!name) {
            return res.status(400).send({ success: false, message: "Service Name is Required" })
        }
        if (!shortDesc) {
            return res.status(400).send({ success: false, message: "Service Main Description is Required" })
        }
        if (!icons) {
            return res.status(400).send({ success: false, message: "Service Icons is Required" })
        }
        if (!heading) {
            return res.status(400).send({ success: false, message: "Service Heading is Required" })
        }
        if (!subHeading) {
            return res.status(400).send({ success: false, message: "Service Sub Heading is Required" })
        }
        if (!Decs1) {
            return res.status(400).send({ success: false, message: "Service Description is Required" })
        }
        if (!Decs2) {
            return res.status(400).send({ success: false, message: "Service Description is Required" })
        }

        const sql = `INSERT INTO services ( name, shortDesc, icons, heading, subHeading, Decs1, Decs2, image) VALUES (?,?,?,?,?,?,?,?)`;
        await DB.query(sql, [name, shortDesc, icons, heading, subHeading, Decs1, Decs2, image.filename], (err, results) => {
            if (err) {
                return res.status(500).send({ success: false, message: 'ERror in Inserting Data', err })
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Service is Added Successfully!...',
                    results
                });
            }
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Sercvices',
            error
        });
    }
}

export const updateSstatusServiceController = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const sql = `UPDATE services SET status = ? WHERE id = ?`;
        console.log(status);
        
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating Status!...',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'Status Updated Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Updating Status',
            error
        });
    }
}

export const updateServiceController = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, shortDesc, icons, heading, subHeading, Decs1, Decs2 } = req.body;
        const image = req.file;
        if (!name) {
            return res.status(400).send({ success: false, message: "Service Name is Required" })
        }
        if (!shortDesc) {
            return res.status(400).send({ success: false, message: "Service Main Description is Required" })
        }
        if (!icons) {
            return res.status(400).send({ success: false, message: "Service Icons is Required" })
        }
        if (!heading) {
            return res.status(400).send({ success: false, message: "Service Heading is Required" })
        }
        if (!subHeading) {
            return res.status(400).send({ success: false, message: "Service Sub Heading is Required" })
        }
        if (!Decs1) {
            return res.status(400).send({ success: false, message: "Service Description is Required" })
        }
        if (!Decs2) {
            return res.status(400).send({ success: false, message: "Service Description is Required" })
        }

        const sql = `UPDATE services SET name = ? , shortDesc = ?, icons = ?, heading =? , subHeading = ?, Decs1 =? , Decs2 = ?, image = ?  WHERE id = ?`;
        await DB.query(sql, [name, shortDesc, icons, heading, subHeading, Decs1, Decs2, image.filename, id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating!...',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'Service Updated Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Updating Services',
            error
        });
    }
}


export const deleteServiceController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM services WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Deleting Data!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: false,
                    message: 'Service is Deleted Successfully',
                    results
                })
            }
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Deleting Services',
            error
        });
    }
}

export const getCountServiceController = async (req, res) => {
    try {
        const sql = `SELECT COUNT(*) as count FROM services`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Counting Service',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Count Serivce Successfuuly',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Counting Service',
            error
        });
    }
}