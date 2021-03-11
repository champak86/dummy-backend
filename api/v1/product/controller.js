const Product = require('../../../models/Product');

const getProducts = async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit ||  10;
    const skip =  (page - 1) * limit;
    try {
        const count = await Product.find().count();
        const products = await Product.find().skip(skip).limit(limit);
        res.json({
            data: products,
            success: true,
            count,
        });
    } catch (error) {
        res.json({
            error,
            success: false,
        })
    }
}

module.exports = {
    getProducts,
}
