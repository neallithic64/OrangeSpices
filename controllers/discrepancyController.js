const discrepancyModel = require('../models/Discrepancy');
const supplyModel = require('../models/Supplies');
const { validationResult } = require('express-validator');

exports.checkDiscrepancy = (req, res) => {
    const errors = validationResult(req);
    var id = req.params.id;
    const { physicalCount } = req.body;
    var len = physicalCount.length;
    var i;
    console.log("id inside controller");
    console.log(id);
    console.log("physicalCount inside controller");
    console.log(physicalCount);

    for(i = 0; i < len; i++){
        
    }

    if(errors.isEmpty()){
        if(physicalCount != ""){
            supplyModel.getByID(id, (err, result) => {
                console.log("result in getByID");
                console.log(result);
                var stock = result.totalSupply;
                if(physicalCount == stock){
                    req.flash('success_msg', 'System count and physical count are the same.');
                    res.redirect('/supplies');
                }
                else {
                    console.log("pasok dito");
                    var discrepancy = {
                       physicalCount: physicalCount,
                       date: Date.now(),
                       supplyID: id
                    };
                    console.log("discrepancy");
                    console.log(discrepancy);
                    /*
                    discrepancyModel.add(discrepancy, function(err, result){
                        if (err) {
                            console.log(err);
                            console.log('Could not add discrepancy.');
                        } else {
                            console.log('Discrepancy added!');
                            console.log(result);
                        }
                    })
                    */
                    res.redirect('/supplies');
                }
            })
        }
        else {
            req.flash('error_msg', 'Please enter physical count.');req.flash('error_msg', 'Please enter physical count.');
            res.redirect('/supplies');
        }
    }
    else {
        const messages = errors.array().map((item) => item.msg);
        req.flash('error_msg', messages.join(' '));
        res.redirect('/supplies');
    }    
};