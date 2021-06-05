const dF = require('../../../utils/dateFormatter');
const Product = require('../../../models/wk04/prove/product');


exports.getSingleProduct = (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => {
            res.render('pages/wk04/prove/store/product', {
                links: req.app.locals.links,
                secondaryLinks: req.app.locals.secondaryLinks.wk04,
                storeLinks: res.locals.storeLinks,
                profileLinks: res.locals.profileLinks,
                product: product,
                // This variable should be set dependent on permissions.
                ownsProduct: true,
                title: `CSE 341 | ${product.title}`,
                description: 'Here are a bunch of wares.',
                modified: dF.getModifiedDate('./views/pages/wk04/prove/store/product.ejs'),
                path: `/wk04/prove/products/${req.params.id}`
            });
        })
}

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('pages/wk04/prove/store/products', {
                links: req.app.locals.links,
                secondaryLinks: req.app.locals.secondaryLinks.wk04,
                storeLinks: res.locals.storeLinks,
                profileLinks: res.locals.profileLinks,
                products: products,
                title: 'WK 04 Inventory',
                description: 'Here are a bunch of wares.',
                modified: dF.getModifiedDate('./views/pages/wk04/prove/store/products.ejs'),
                path: '/wk04/prove/products'
            });
        })
}

exports.getAddProductPage = (req, res, next) => {
    res.render('pages/wk04/prove/store/addProduct', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk04,
        storeLinks: res.locals.storeLinks,
        profileLinks: res.locals.profileLinks,
        title: `Add Product | CSE 341`,
        description: 'Add a new product to the store',
        modified: dF.getModifiedDate('./views/pages/wk04/prove/store/addProduct.ejs'),
        path: `/wk04/prove/add-product/`
    });
}

exports.postAddProduct = (req, res, next) => {
    let product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.user
    })
    product.save()
        .then(result => {
            console.log('Created Product: ', product);
            res.redirect('/wk04/prove/products')
        })
}

exports.postDeleteProduct = (req, res, next) => {
    Product.findByIdAndRemove(req.body.id)
        .then(result => {
            console.log('Removed Product: ', result);
            res.redirect('/wk04/prove/products');
        })
        .catch(err => {
            console.error(err);
        })
}

exports.getEditProduct = (req, res, next) => {
    console.log(req.params.id);
    Product.findById(req.params.id)
        .then(product => {
            console.log('Product: ', product)
            if(product) {
                res.render('pages/wk04/prove/store/editProduct', {
                    links: req.app.locals.links,
                    secondaryLinks: req.app.locals.secondaryLinks.wk04,
                    storeLinks: res.locals.storeLinks,
                    profileLinks: res.locals.profileLinks,
                    product: product,
                    title: `Edit Product | CSE 341`,
                    description: 'Add a new product to the store',
                    modified: dF.getModifiedDate('./views/pages/wk04/prove/store/editProduct.ejs'),
                    path: `/wk04/prove/edit-product/`
                });
            }
            else throw new Error('For some reason that product was not found');
        })
        .catch(err => {
            console.error(err);
        })
}
exports.postEditProduct = (req, res, next) => {
    console.log("postEditProduct id: ", req.body.id)
    Product.findById(req.body.id).then(product => {
        product.title = req.body.title;
        product.price = req.body.price;
        product.description = req.body.description;
        product.imageUrl = req.body.imageUrl;
        product.save()
            .then(result => {
                console.log('Updated Product: ', result);
                res.redirect(`/wk04/prove/product/${product.id}`)
            })
    })
    .catch(err => {
        console.error(err);
    })
}