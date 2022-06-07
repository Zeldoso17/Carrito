const assert = require('assert');
const { describe } = require('mocha');
let Products = require('../models/productos');

describe('Get all products', function(){
    it('it must to return all prodcts in the productos file', function(){
        let productsBD = new Products();
        productsBD.products.forEach((product) => {
            console.log(product);
        })
    })
})

describe('add new product', function() {
    it('it must to add a new product in the productos file', function() {
        let productsBD = new Products();
        productsBD.products.push({
            id: 5,
            nombre: 'Celular',
            precio: 100.5,
        })
        productsBD.listAllProducts();
    })
})

describe('update a product', function() {
    it('it must to update a product in the productos file', function() {
        let productsBD = new Products();
        productsBD.products.forEach((product) => {
            if(product.id === 2) {
                product.nombre = 'PS5';
                product.precio = 100;
            }
            console.log(product);
        })
    })
})





