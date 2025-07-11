import DB from '../DB/connection.js';

export const getProjectController = async (req, res) => {
    try {
        const sql = `SELECT * FROM project WHERE status = 1`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Data!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'All Projects Get Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Projects',
            error
        });
    }
}

export const getSingleProjectController = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `SELECT * FROM project WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Data!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'All Projects Get Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Single Projects',
            error
        });
    }
}

export const getAdminProjectController = async (req, res) => {
    try {
        const sql = `SELECT project.*, services.name as SName FROM project LEFT JOIN services ON project.serviceid = services.id`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Data!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'All Projects Get Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Projects',
            error
        });
    }
}

export const createProjectController = async (req, res) => {
    try {
        const { name, category, serviceid, description, type, complete_date, location } = req.body;
        const image = req.file;
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Project Name is Required!..'
            });
        }
        if (!category) {
            return res.status(400).send({
                success: false,
                message: 'Project Category is Required!..'
            });
        }
        if (!serviceid) {
            return res.status(400).send({
                success: false,
                message: 'Project Service is Required!..'
            });
        }
        if (!description) {
            return res.status(400).send({
                success: false,
                message: 'Project Description is Required!..'
            });
        }
        if (!type) {
            return res.status(400).send({
                success: false,
                message: 'Project Type is Required!..'
            });
        }
        if (!complete_date) {
            return res.status(400).send({
                success: false,
                message: 'Project Completion Date is Required!..'
            });
        }

        if (!location) {
            return res.status(400).send({
                success: false,
                message: 'Project Location is Required!..'
            });
        }

        if (!image) {
            return res.status(400).send({
                success: false,
                message: 'Project Image is Required!..'
            });
        }

        const sql = `INSERT INTO project (name, category, serviceid, description, type, complete_date, location, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        await DB.query(sql, [name, category, serviceid, description, type, complete_date, location, image.filename], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Creating Project!...',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Project is Created Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Creating Projects',
            error
        });
    }
}


export const updateStatusProjectController = async (req, res) => {
    try {
        const id = req.params.id;
        const {status} = req.body;
        const sql = `UPDATE project SET status = ? WHERE id = ?`;
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updating Status',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'Project Status Updated Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Update Status Projects',
            error
        });
    }
}

export const updateProjectController = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, category, serviceid, description, type, complete_date, location } = req.body;
        const image = req.file;
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Project Name is Required!..'
            });
        }
        if (!category) {
            return res.status(400).send({
                success: false,
                message: 'Project Category is Required!..'
            });
        }
        if (!serviceid) {
            return res.status(400).send({
                success: false,
                message: 'Project Service is Required!..'
            });
        }
        if (!description) {
            return res.status(400).send({
                success: false,
                message: 'Project Description is Required!..'
            });
        }
        if (!type) {
            return res.status(400).send({
                success: false,
                message: 'Project Type is Required!..'
            });
        }
        if (!complete_date) {
            return res.status(400).send({
                success: false,
                message: 'Project Completion Date is Required!..'
            });
        }

        if (!location) {
            return res.status(400).send({
                success: false,
                message: 'Project Location is Required!..'
            });
        }

        if (!image) {
            return res.status(400).send({
                success: false,
                message: 'Project Image is Required!..'
            });
        }
        const sql = `UPDATE project SET name = ?, category = ?, serviceid = ? , description = ?, type = ?, complete_date = ?, location = ?, image = ? WHERE id = ?`;
        await DB.query(sql, [name, category, serviceid, description, type, complete_date, location, image.filename, id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Updated PRoject!..',
                    err
                });
            } else {
                return res.status(304).send({
                    success: true,
                    message: 'Project Updated Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Updateing Projects',
            error
        });
    }
}

export const deleteProjectController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM project WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Deleting Project!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Project Deleted Successfully!...',
                    results
                })
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Deleting Projects',
            error
        });
    }
}

export const getByServiceIdProjectController = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const sql = `SELECT * FROM project WHERE serviceid = ? AND status = 1`;
        await DB.query(sql, [serviceId], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Service Project',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Proect Get Succesfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Get By Service Id Projects',
            error
        });
    }
}

export const getLastProjectController = async (req, res) => {
    try {
        const sql = `SELECT * FROM project ORDER BY id DESC LIMIT 3`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Data!...',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'All Projects Get Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Get Last 3 Projects',
            error
        });
    }
}

export const getCountProjectController = async (req, res) => {
    try {
        const sql = `SELECT COUNT(*) as count FROM project`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Counting Projects',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Count Project Successfuuly',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Counting Projects',
            error
        });
    }
}

export const getCategoryProjectController = async (req, res) => {
    try{
        const sql = `SELECT DISTINCT category FROM project`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Projects Category',
                    err
                });
            } else{
                return res.status(201).send({
                    success: true,
                    message: 'Getting Projects Category Successfully',
                    results
                });
            }
        })
    } catch (error){
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Projects Category',
            error
        });
    }
}

export const getByCategoryProjectController = async (req, res) => {
    try {
        const category = req.params.category;
        const sql = `SELECT * FROM project WHERE category = '${category}'`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Getting Projects By Category',
                    err 
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Getting Project Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Getting Projects By Category',
            error
        });
    }
}