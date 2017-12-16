/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    signup: function(req,res, next){
       
        res.view('ClientSide/signup');
        
    },

    create: function(req,res,next){
        User.create( req.params.all(), function userCreated(err, user){
            if(err){
               // console.log(err);
               var AlreadyExistEmail = [req.param('email').concat(' Already Exist')];
               
                req.session.flash={
                    err: AlreadyExistEmail
                }
                //res.locals.flash = _.clone(req.session.flash);
                
                return res.redirect('/user/signup');
            }
           // res.json(user);
           res.redirect('/user/show/'+user.id);
            req.session.flash={}
        });
        
    },
    show: function(req,res,next){
        User.findOne(req.param('id'), function foundUser(err, user){
            if(err){
                return next(err);
            }
            if(!user)return next();
            res.view('ClientSide/show',{
                user:user
            });
        });
    },
    login: function(req,res,next){
        res.view('ClientSide/login');
    }
	
};


