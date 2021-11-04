// this handle product details pages 
const products = require('../../models/products')
var db = require('../../config/db/database');
class ProductsController {
    //[get] /products/:slug
    show(req,res,next){
        products.findOne({_id:req.params.id}).lean()
            .then(Products =>{
                //res.json(Products)
                res.render('products/details',{Products})
            })
            .catch(next);
        //res.send('Product details-' + req.params.slug);
    }

    //[get] /products/category?keyword= || name
    category(req,res,next){
        var product_category = req.query.keyword;
        products.find({category:product_category}).lean()
            .then(Products =>{
                //res.json(Products);
                res.render('products',{Products})
            })
            .catch(next);
    }
    //[get] /products/search?name=   // ex:name=abc, 1 abc, abcd23 return result the same as 'abc'
    search(req,res,next){
            const Searchvalue = req.query.name;
            let regex = new RegExp(Searchvalue,'i');
            products.find({'product_name':regex})
                .then(data =>{
                    res.send(data);
                })
                .catch(next);
        
    }

    //[get] /products/create
    create(req,res,next){
       // res.json(req.body);
        res.render('products/create');
    }
    //[Post] /products/add (add to database)
    add(req,res,next){
        //console.log(req.body);
        const formData = req.body;
        console.log(req.body.image)
        formData.image = "img/"+req.file.filename;
        formData.slug = formData.product_name + formData.category;
        const product = new products(formData);
        product.save()
            .then(() => res.redirect('/adminmanage/v'))
            .catch(error =>{

            });
        //res.send('Product save to database');
       
    }
    //[put] products/:id
    update(req, res,next) {
        //res.json(req.body);
        const formData = req.body;
        console.log(req.body.image)
        formData.image = "img/"+req.body.image;
        products.updateOne({_id:req.params.id}, formData)
            .then(() => res.redirect('/adminmanage/v'))
            .catch(next);
    }


}

module.exports = new ProductsController();