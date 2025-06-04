import DB from '../DB/connection.js';
export const getUserSliderController = async (req, res) => {
    try {
        const sql = `SELECT * FROM slider WHERE status = 'active'`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Slider',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'slider getting Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in getting Sliders',
            error
        });
    }
}

export const createSliderController = async (req, res) => {
    try {
        const { heading, describtion } = req.body;
        const img = req.file;
        if (!heading) {
            return res.status(404).send({
                success: false,
                message: 'Heading is Required!..'
            })
        }
        if (!describtion) {
            return res.status(404).send({
                success: false,
                message: 'Description is Required!..'
            })
        }
        if (!img) {
            return res.status(404).send({
                success: false,
                message: 'Iamge is Required!..'
            })
        }
        const sql = `INSERT INTO slider (heading, description, image) VALUES (?,?,?)`;
        await DB.query(sql, [heading, describtion, img.filename], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Inserting Data!..',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Slider Add Sucessfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Creating Slider',
            error
        });
    }
}
export const getAdminSliderController = async (req, res) => {
    try {
        const sql = `SELECT * FROM slider`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Slider',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'slider getting Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in getting Sliders',
            error
        });
    }
}


export const getSingleAdminSliderController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `SELECT * FROM slider WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Single Slider',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Get Slider Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in getting Sliders',
            error
        });
    }
}

export const updateStatusSliderController = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const sql = `UPDATE slider SET status = ? WHERE id = ? `;
        await DB.query(
            sql, [status, id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Updating Status in Database',
                        err
                    });
                } else {
                    if (status == 1) {
                        return res.status(200).json({
                            success: true,
                            message: 'Slider is Activate',
                            results
                        });
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: 'Slider is DeActivate',
                            results
                        });
                    }
                }
            }
        );
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Updating Status of Slider',
            error
        });
    }
}

export const updateSliderController = async (req, res) => {
    try {
        const id = req.params.id;
        const { heading, describtion } = req.body;
        const img = req.file;
        if (!heading) {
            return res.status(404).send({
                success: false,
                message: 'Heading is Required!..'
            })
        }
        if (!describtion) {
            return res.status(404).send({
                success: false,
                message: 'Description is Required!..'
            })
        }
        if (!img) {
            return res.status(404).send({
                success: false,
                message: 'Iamge is Required!..'
            })
        }
        const sql = `UPDATE slider SET heading = ? , description = ? , image = ? WHERE id = ? `;
        await DB.query(
            sql, [heading, describtion, img.filename, id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Updating Slider in Database',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Slider is Updated',
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Updating of Slider',
            error
        });
    }
}

export const deleteSliderController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM slider WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Errror in Deleting Slider',
                    err
                });
            } else{
                return res.status(200).send({
                    success: true,
                    message: 'Slider Deleted SuccesFully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Deleting Slider',
            error
        }); 
    }
}