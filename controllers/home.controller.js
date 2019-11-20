const productsModel = require('../models/products.model');   


exports.getHome = (req, res, next) => {  
    //get products
    //render index.ejs
    // get category
    // if category && category !== all
    // fillter
    // else 
    // render all
    let category = req.query.category;
    let productsPromise
    let validCategories = ['Warrior','Tank','Thief','Mage','SoulWaver']
    if (category && validCategories !== "all"){
        productsPromise = productsModel.getProductsByCategory(category);
    }
    else{
        productsPromise = productsModel.getAllProducts();
    }
    productsPromise.then(products => {
        res.render('index', {
            products: products
        })
    })

}