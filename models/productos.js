
class Productos {
    products = [
        {
            id: 1,
            nombre: 'Camisa',
            precio: 15.5,
        },
        {
            id: 2,
            nombre: 'Pantalon',
            precio: 30.5,
        },
        {
            id: 3,
            nombre: 'Zapatos',
            precio: 40.5,
        },
        {
            id: 4,
            nombre: 'Gorra',
            precio: 10.5,
        }
    ];

    listAllProducts() {
        this.products.forEach((product) => {
            console.log(product);
        });
    }
}

module.exports = Productos;