const productModel = require('../models/Product');
const orderModel = require('../models/Order');
const orderListModel = require('../models/OrderList');
const { validationResult } = require('express-validator');

//Getting all orders
exports.getAllOrders = (param, callback) => {
    orderModel.getAll(param, (err, order) => {
        if (err) throw err;

        const ordersObjects = [];

        order.forEach(function(doc) {
            ordersObjects.push(doc.toObject());
        });

        callback(ordersObjects);
    });
};

exports.addOrder = (req, res) => {
    const { quantity, id } = req.body;

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        console.log("quantity");
        console.log(quantity);
        
        if(id != null){
            var list = {
                orderDate: Date.now()
            };

            orderListModel.add(list, function(err, result){
                if(err){
                    console.log(err);
                    req.flash('error_msg', 'Could not add order list. Please try again.');
                    res.redirect('/products/add');
                  }
                  else {
                    console.log("List added!");
                    console.log(result);
                    var sub;
                    var listID = result._id;
                    console.log("listID");
                    console.log(listID);
                    
                    productModel.getByID(id, (err, product) => {
                        console.log("product name");
                        console.log(product.prodName);
                        sub = quantity * product.prodPrice;
                        var order = {
                            productID: id,
                            orderListID: listID,
                            orderQuantity: quantity,
                            subTotal: sub
                        }

                        orderModel.add(order, function(err, result){
                            if (err) {
                                req.flash('error_msg', 'Could not add order.');
                                res.redirect('/POS');
                            } else {
                                res.redirect('/POS');
                            }
                        })
                    })
                }
            })
        }
    } else {
        const messages = errors.array().map((item) => item.msg);
        req.flash('error_msg', messages.join(' '));
        res.redirect('/POS');
    }
};

