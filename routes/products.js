const express = require('express'),
      router = express.Router(),
      productController = require('../controllers/product.controller');

router.get('/', productController.index);
router.post('/', productController.store);
router.get('/:id', productController.show);
router.patch('/:id', productController.update);
router.put('/:id', productController.replace);
router.delete('/:id', productController.destroy);

module.exports = router;
