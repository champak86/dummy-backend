const express = require('express');
const { getProducts, getFiles, saveFile, deleteFile } = require('./controller');

const router = express.Router();

router.get('/products', getProducts);
router.get('/recording', getFiles);
router.post('/recording-save', saveFile);
router.delete('/recording-delete/:id', deleteFile);


module.exports = router;