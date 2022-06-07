const assert = require('assert');
let Products = require('../models/productos');

describe('Get all products', function(){
    it('it must to return all prodcts in the productos file', function(){
        let productsBD = new Products();
        productsBD.products.forEach((product) => {
            console.log(product);
        })
        assert.deepEqual(productsBD.products, [{id: 1, nombre: 'Camisa', precio: 15.5}, {id: 2, nombre: 'Pantalon', precio: 30.5}, {id: 3, nombre: 'Zapatos', precio: 40.5}, {id: 4, nombre: 'Gorra', precio: 10.5}]);
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
        assert.deepEqual(productsBD.products, [{id: 1, nombre: 'Camisa', precio: 15.5}, {id: 2, nombre: 'Pantalon', precio: 30.5}, {id: 3, nombre: 'Zapatos', precio: 40.5}, {id: 4, nombre: 'Gorra', precio: 10.5}, {id: 5, nombre: 'Celular', precio: 100.5}]);
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
        assert.deepEqual(productsBD.products, [{id: 1, nombre: 'Camisa', precio: 15.5}, {id: 2, nombre: 'PS5', precio: 100}, {id: 3, nombre: 'Zapatos', precio: 40.5}, {id: 4, nombre: 'Gorra', precio: 10.5}]);
    })
})





