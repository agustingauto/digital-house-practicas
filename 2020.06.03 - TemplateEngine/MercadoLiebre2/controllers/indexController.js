let data = require('../productsDataBase.json');


const indexController = {
    index: function(req, res) {
        res.render('index', {"data": data});
    },
    productdetail: function(req, res){
        let idprod = req.params.id;
        let category = req.params.category;
        res.render('product-detail', {"data": data, "params": idprod});
    }
}

module.exports = indexController;