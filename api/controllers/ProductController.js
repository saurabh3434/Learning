/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	insert: function(req,res,next){
        res.view('ServerSide/index',{layout: 'serverLayout'});
    },
    create: function(req,res,next){
        Product.create(req.params.all(),function productUpdated(err, product){
            if(err){
                req.session.flash={
                    err: err
                }
                return res.redirect('/product/insert');
            }
            res.redirect('/product/insert');
            req.session.flash={}
        });
    },
    firstPage: function(req,res,next){
        Product.find(function foundProducts(err, product){
            if(err) return next(err);
            res.view('ClientSide/index',{
                product:product
            });
        });
    },
    men: function(req,res,next){
        Product.find({Section:'Men'},function foundSection(err, product){
            if(err) return next(err);
            res.view('ClientSide/section',{
                product:product
            });
        });
        

    },
    kids: function(req,res,next){
        Product.find({Section:'Kids'},function foundSection(err, product){
            if(err) return next(err);
            res.view('ClientSide/section',{
                product:product
            });
        });
        

    },
    women: function(req,res,next){
        Product.find({Section:'Women'},function foundSection(err, product){
            if(err) return next(err);
            res.view('ClientSide/section',{
                product:product
            });
        });    
    },

    description:function(req,res,next){
        Product.findOne(req.param('id'), function foundProduct(err, product){
            if(err){
                return next(err);
            }
            if(!product)return next();
            res.view('ClientSide/description',{
                product:product
            });
        });
    }
};

