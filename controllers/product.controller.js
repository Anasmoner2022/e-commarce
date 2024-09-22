const product = require('../models/product');

//Get All Products
function index(req, res){(
    product.find({})
    .then((products)=>{
        if(products.length === 0){
            res.status(404).json({
                message: "No Product Yet",
                method: 'GET',
                statusCode: '404'
            })
        }else{
            res.status(200).json({
                message: "Products Retrieved Successfully ",
                method: 'GET',
                statusCode: '200',
                products: products
            })
        }
    }).catch(err => {
        res.status(500).json({error: err})
    })
)
}
//Get Single Product
function show(req, res){}
//Add New Product
function store(req, res){}
//Update One Product
function update(req, res){}
//Replace products
function replace(req, res){}
//Delete Product
function destroy(req, res){}


module.exports = {
    index,
    show,
    store,
    update,
    replace,
    destroy
}
