import DB from '../DB/connection.js'
export const getFactsController = async (req, res) => {
    try {
        const sql = `SELECT * FROM fact WHERE status = 'active'`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Facts',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Facts Getting Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Fact Details',
            error
        });
    }
}

export const getAdminFactsController = async (req, res) => {
    try {
        const sql = `SELECT * FROM fact`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Facts',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Facts Getting Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Fact Details',
            error
        });
    }
}

export const createFactsController = async (req, res) => {
    try {
        const {head, decs, icons} = req.body;
        if (!head) {
            return res.status(404).send({
                success: false,
                message: 'Heading is Required'
            })
        }
        if (!decs) {
            return res.status(404).send({
                success: false,
                message: 'Descriptions is Required'
            })
        }if (!icons) {
            return res.status(404).send({
                success: false,
                message: 'Icons font is Required'
            })
        }
        const sql = `CREATE fact (head, decs, icons) VALUES(?,?,?)`;
        await DB.query(sql, [head, decs, icons], (err, results)=> {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Creating Facts',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Created Facts Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Creating Fact Details',
            error
        });
    }
}

export const updateFactsController = async (req, res) => {
    try {
        const id = req.params.id;
        const {head, decs, icons} = req.body;
        if (!head) {
            return res.status(404).send({
                success: false,
                message: 'Heading is Required'
            })
        }
        if (!decs) {
            return res.status(404).send({
                success: false,
                message: 'Descriptions is Required'
            })
        }if (!icons) {
            return res.status(404).send({
                success: false,
                message: 'Icons font is Required'
            })
        }

        const sql = `UPDATE fact SET head = ? decs = ? icons = ? WHERE id = ${id}`;
        await DB.query(sql, [head, decs, icons] , (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating Facts',
                    err
                });
            } else{
                return res.status(304).send({
                    success: true,
                    message: 'Updated Fact Details',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Updating Fact Details',
            error
        });
    }
}




export const updateStatusFactController = async (req, res) => {
    try {
        const id = req.params.id;
        const {status} = req.body;
        if (status === 'inactive') {
            status = 'active'
        } else {
            status = 'inactive'
        }
        const sql = `UPDATE fact SET status = ? WHERE id = ${id}`
        await DB.query(sql, [status], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating Status',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'STatus is Updated',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Update Status Fact Details',
            error
        });
    }
}


export const deleteFactController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM fact WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Deleting Fact',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Fact Deleted Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Update Status Fact Details',
            error
        });
    }
}