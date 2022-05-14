const mongoose = require('mongoose');
const product = require('./product');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first: {
        type: String,
        required: true
    },
    last: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        items:[
            {
                product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
                quantity: { type: Number, required: true}
            }
        ]
    }
})

userSchema.methods.addToCart = function(product, quantity) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
        return cp.product.toString() === product._id.toString();
    })
    const updatedCartItems = [...this.cart.items];
    console.log("Cart Product Index: ", cartProductIndex);
    if (cartProductIndex >= 0) {
        updatedCartItems[cartProductIndex].quantity = this.cart.items[cartProductIndex].quantity + quantity
    } else {
        updatedCartItems.push({
            product: product,
            quantity: quantity
        });
    }
    this.cart.items = updatedCartItems;
    console.log("Updated User: ", this);
    console.log("Updated")
    return this.save();
}

userSchema.methods.deleteFromCart = function(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
        return item.product.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
}

userSchema.methods.updateCartQuantity = function(product, newQuantity) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
        return cp.product.toString() === product._id.toString();
    })
    const updatedCartItems = [...this.cart.items];
    updatedCartItems[cartProductIndex].quantity = newQuantity;
    this.cart.items = updatedCartItems;
    return this.save();
}

module.exports = mongoose.model('User', userSchema);

