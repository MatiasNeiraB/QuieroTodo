const {Router} = require('express');
const { GetProduct, DeleteProduct, NewProduct } = require('../controllers/productos');
const router = Router();

router.get('/', GetProduct)

router.post('/', NewProduct)

router.delete('/', DeleteProduct)

module.exports = router;

