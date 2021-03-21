const Product = require("../../../models/Product");
const File = require("../../../models/File");

const getProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  let ran = Math.random();
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
    });
  }
};

const saveFile = async (req, res) => {

  const filePath = req.body.blob;
  const name = req.body.name;

  try {
    const file = new File({
      name: name,
      file_path: filePath,
    });

    await file.save()
    return res.json({
      success: true,
    });
  } catch (error) {
    return res.json({
      error,
      success: false,
    });
  }

};

const getFiles = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  try {
    const count = await File.find().count();
    const files = await File.find().find().skip(skip).limit(limit).sort({created_at: -1});
    return res.json({
      data: files,
      count,
      success: true,
    });
  } catch (error) {
    return res.json({
      error,
      success: false,
    });
  }
}

const deleteFile = async(req, res) => {
  try {
    await File.findByIdAndDelete(req.params.id);
    return res.json({
      success: true,
    });
  } catch (error) {
    return res.json({
      error,
      success: false,
    });
  }
}

module.exports = {
  getProducts,
  saveFile,
  getFiles,
  deleteFile,
};
