import DB from '../DB/connection.js'
export const getAboutUsController = async (req, res) => {
    try {
        const sql = `SELECT * FROM about`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Getting About Us Details Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting About Us Details',
            error
        });
    }
}


export const getSingleAboutUsController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `SELECT * FROM about WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Getting About Us Details Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting About Us Details',
            error
        });
    }
}


export const createAboutUsController = async (req, res) => {
    try {
        const {h1, d1, d2, year} = req.body;
        const image = req.file;
        if (!h1) {
            return res.status(400).send({
                success: false,
                message: 'Main Heading is Required!'
            })
        }
        if (!d1) {
            return res.status(400).send({
                success: false,
                message: 'Main Description is Required!'
            })
        }
        if (!d2) {
            return res.status(400).send({
                success: false,
                message: 'Description is Required!'
            })
        }
        if (!year) {
            return res.status(400).send({
                success: false,
                message: 'When was company is Started? is Required!'
            })
        }

        const sql = 'INSERT INTO about (head, decs1, decs2, year, image) VALUES (?,?,?,?,?)';
        await DB.query(sql, [h1, d1, d2, year, image.filename], (err, results) =>{
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Creating AboutUS!...',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Data Inserted Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting About Us Details',
            error
        });
    }
}

export const updateAboutUsController = async (req, res) => {
    try {
        const id = req.params.id;
        const {h1, d1, d2, year} = req.body;
        const image = req.file;
        if (!h1) {
            return res.status(400).send({
                success: false,
                message: 'Main Heading is Required!'
            })
        }
        if (!d1) {
            return res.status(400).send({
                success: false,
                message: 'Main Description is Required!'
            })
        }
        if (!d2) {
            return res.status(400).send({
                success: false,
                message: 'Description is Required!'
            })
        }
        if (!year) {
            return res.status(400).send({
                success: false,
                message: 'When was company is Started? is Required!'
            })
        }
        const sql = `UPDATE about SET head = ?, decs1 = ?, decs2 = ?, year = ?, image = ? WHERE id =?`
        await DB.query(sql, [h1, d1, d2, year, image.filename, id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating Data',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'Updated Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting About Us Details',
            error
        });
    }
}

export const deleteAboutUsContoller = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM about WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Delete About',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Deleted Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error Deleting About Us',
            error
        });
    }
}