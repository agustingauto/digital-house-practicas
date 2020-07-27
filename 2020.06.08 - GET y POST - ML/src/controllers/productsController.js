const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productsParse = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const products = require('../data/productsDataBase.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const aplicardesc = (n, desc) => n - (n*desc/100);

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products', {products:products, toThousand, aplicardesc})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idprod = req.params.productId;
		res.render('detail', {products: products, idprod, toThousand, aplicardesc})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		res.redirect('/')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let idprod = req.params.productId;
		res.render('product-edit-form', {products: products, idprod})
	},
	// Update - Method to update
	update: (req, res) => {
		let idprod = req.params.productId;
		products[idprod-1].price = req.body.price;
		fs.writeFile('../data/productsDataBase.json');//ESTA ES LA LINEA QUE NO SE COMO SOBREESCRIBIR
		res.redirect('/')// Do the magic AGUSDICEQUEPENDING
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.render('index')// Do the magic AGUSDICEQUEPENDING
	}
};

module.exports = controller;