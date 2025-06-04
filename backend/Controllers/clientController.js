import DB from '../DB/connection.js'

export const getClientController = async (req, res) => {
    try {
        const sql = `SELECT * FROM clients WHERE status = 1`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Clinets',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Clients Get Successfully',
                    results
                })
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Clients',
            error
        });
    }
}

export const getSingleClientController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `SELECT * FROM clients WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Clinets',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Clients Get Successfully',
                    results
                })
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Clients',
            error
        });
    }
}

export const getAdminClientController = async (req, res) => {
    try {
        const sql = `SELECT * FROM clients`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Clinets',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Clients Get Successfully',
                    results
                })
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Clients',
            error
        });
    }
}

export const createClientController = async (req, res) => {
    try {
        const {name} = req.body;
        const image = req.file;
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Client Name is Required'
            });
        }
        if (!image) {
            return res.status(400).send({
                success: false,
                message: 'Client Image is Required'
            });
        }
        const sql = `INSERT INTO clients(name, image) VALUES (?,?)`;
        await DB.query(sql, [name, image.filename], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Creating Clients',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Clients Creating Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Creating Clients',
            error
        });
    }
}

export const updateClientController = async (req, res) => {
    try {
        const id = req.params.id;
        
        const {name} = req.body;
        const image = req.file;
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Client Name is Required'
            });
        }
        if (!image) {
            return res.status(400).send({
                success: false,
                message: 'Client Image is Required'
            });
        }

        const sql = `UPDATE clients SET name = ?, image = ? WHERE id = ?`;
        await DB.query(sql,[name, image.filename, id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating Client',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'Client Update Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Updating Clients',
            error
        });
    }
}

export const updateStatusClientController = async (req, res) => {
    try {
        const id = req.params.id;
        
        const {status} = req.body;

        const sql = `UPDATE clients SET status = ? WHERE id = ?`;
        await DB.query(sql,[status,  id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating Updating Client',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'Client Status Update Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Update Status Clients',
            error
        });
    }
}

export const deleteClientController = async (req, res) => {
    try {
        const id = req.params.id;
        

        const sql = `DELETE FROM clients WHERE id = ?`;
        await DB.query(sql,[id], (err, results) => {
            console.log("RAVI@@@");
            
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Deleting Client',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Client Deleted Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Deleting Clients',
            error
        });
    }
}