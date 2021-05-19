const fs = require('fs');

module.exports = class Product {
    constructor(tags, imageUrl, price, name, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    static searchTags(searchTerm) {
        let products = this.fetchAllProducts();
        return products.filter((item) => {
            let matchingTagCount = item.tags.filter(tag => tag.includes(searchTerm)).length;
            if (matchingTagCount > 0) return true;
            else return false;
        })
    }

    static fetchAllProducts() {
        try {
            const data = fs.readFileSync('./data/wk03/ta/items.json', 'utf8');
            let result = JSON.parse(data)
            result.forEach((item, index) => {
                item['index'] = index;
            })
            return result;
        } catch(err) {
            console.error("Error reading the JSON file.", err);
        }
    }
}