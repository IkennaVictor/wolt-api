const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');

const restaurantCtrl = require('../controllers/restaurant');


router.get('/', restaurantCtrl.getAll);
router.get('/:id', restaurantCtrl.getRecord);
router.put('/:id', multer, restaurantCtrl.updateRecord);
router.post('/', multer, restaurantCtrl.createRecord);
router.delete('/:id', restaurantCtrl.deleteRecord);

module.exports = router;
