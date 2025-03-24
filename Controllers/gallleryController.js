import DB from '../DB/connection.js';

export const getProductGallleryController = async (req, res) => {
    try {
        const ProductId = req.params.id;
        const sql = `SELECT * FROM gallerys WHERE productid = ?`;
        await DB.query(sql, [ProductId], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: `Erorr in Getting Images`,
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Gallery Images Get Suceessfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: ' Errror in Getting Gallery Image',
            error
        });
    }
}

export const createProductGallleryController = async (req, res) => {
    try {
        const ProductId = req.params.id;
        const image = req.file;
        const sql = `INSERT INTO gallerys (productId, image) VALUES (?, ?)`;
        await DB.query(sql, [ProductId, image.filename], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error in Uploading Image',
                    err
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: 'Image Upload Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: ' Errror in Creating Gallery Image',
            error
        });
    }
}

export const deleteProductGalleryController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM gallerys WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message:'Error in Deleting Product Image',
                    err
                });
            } else {
                return res.status(200).send({
                    success: true,
                    message: 'Image Deleted Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in Deleting Gallery',
            error
        });
    }
}