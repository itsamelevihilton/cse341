const fs = require('fs');

module.exports = class User {
    constructor(id, name, price, description, tags, imgUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.tags = tags;
        this.imageUrl = imageUrl;
    }

    save() {
        try {
            const data = fs.readFileSync('./data/wk03/prove/products.json');
            let products = JSON.parse(data);
            products.push(this);
            let result = JSON.stringify(products);
            fs.writeFileSync('./data/wk03/prove/products.json', result);
            return true;
        }
        catch (err) {
            console.error("Error reading the JSON file: ", err);
            return null;
        }
    }

    static fetchAll() {
        try {
            const data = fs.readFileSync('./data/wk03/prove/products.json');
            let products = JSON.parse(data);
            if (!products[0].hasOwnProperty('id')) {
                products.forEach((product, index) => {
                    product.id = index;
                });
                let result = JSON.stringify(products);
                fs.writeFileSync('./data/wk03/prove/products.json', result);
            }
            return products;
        }
        catch (err) {
            console.error("Error reading the JSON file: ", err);
            return null;
        }
    }

    static fetchById(id) {
        try {
            const data = fs.readFileSync('./data/wk03/prove/products.json');
            let products = JSON.parse(data);
            let possibleProducts = products.filter(product => product.id == id);
            if (possibleProducts.length > 0) return possibleProducts[0];
            else console.error("Something went wrong.  That product seems to not exist.");
        }
        catch (err) {
            console.error("Error reading the JSON file: ", err);
            return null;
        }
    }
}