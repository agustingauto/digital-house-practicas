const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productPARSE = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const products = require('../data/productsDataBase.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const aplicardesc = (n, desc) => n - (n*desc/100);

const controller = {
	root: (req, res) => {
		res.render('index', {products: products, toThousand, aplicardesc})
	},
	search: (req, res) => {
		res.render('index')// Do the magic AGUSDICEQUEPENDING
	},
};

module.exports = controller;
