const express = require('express');
const router = express.Router();
const path = require('path');
const productcontroller = require('../app/controllers/Productscontroller');
// handle upload image 
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file , cb) => {
        cb(null, "src/public/img");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname);
    },
});
const upload = multer({ storage:storage });

router.get('/search',productcontroller.search);
router.get('/create',productcontroller.create);
router.post('/add',upload.single('image'),productcontroller.add);
router.put('/:id',productcontroller.update); // nhan id tu edit.hbs de update du lieu 
router.get('/category',productcontroller.category);
router.get('/:id', productcontroller.show);



module.exports = router;
