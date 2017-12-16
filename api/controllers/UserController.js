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
    index: function(req,res,next){
        // console.log(new Date());
        // console.log(req.session.authenticated);

        User.find(function foundUsers(err, user){
            if(err) return next(err);
            res.view('index',{
                user:user 
            });
        });
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
            req.session.authenticated = true;
            req.session.User = user;
           // res.json(user);
           res.redirect('/');
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
   
	
};


