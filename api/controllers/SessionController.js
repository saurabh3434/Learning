/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');
module.exports = {
    login: function(req,res,next){
        // var oldDateObj = new Date();
        // var newDateObj = new Date(oldDateObj.getTime()+60000);
        // req.session.cookie.expires= newDateObj;
        // req.session.authenticated= true;
        // console.log(req.session);
        res.view('session/login');
    },
    create: function(req, res, next){
        if(!req.param('email') || !req.param('password')){
            var usernamePasswordRequiredError = [{name: 'usernamePassword required', message: 'you must enter both a username and password'}];
            req.session.flash = {
                err: usernamePasswordRequiredError
            }
            res.redirect('session/login');
            return;

        }
        User.findOneByEmail(req.param('email'), function foundUser(err, user){
            if(err) return next(err);

            if(!user){
                var noAccountError = [{name: 'noAccount', message:'The email '+req.param('email')+ ' not found'}];
                req.session.flash = {
                    err: noAccountError
                }
                res.redirect('session/login');
                return;
            }
            bcrypt.compare(req.param('password'), user.encryptedPassword, function(err,valid){
                if(err) return next(err);

                if(!valid){
                    var usernamePasswordMismatchError = [{name: 'usernamePasswordMismatchError', message: 'Invalid username and password combination'}];
                    req.session.flash = {
                        err: usernamePasswordMismatchError
                    }
                    res.redirect('session/login');
                    return;
                }

                req.session.authenticated = true;
                req.session.User = user;

                if(req.session.User.admin) {
                    res.redirect('/user');
                    return;
                }

                res.redirect('/');
            });

        });
    },
    destroy: function(req,res,next){
        req.session.destroy();

        res.redirect('/session/login');
    }
	
};

