const accountmodel = require('../../models/account')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);




class registercontroller {
    
    // [post] /action/register
   async register(req, res, next){
       var user = req.body.username
       var pass =  req.body.password
       const hash = await bcrypt.hashSync(pass, salt);
        accountmodel.findOne({ username:user})
            .then(data=> {
                if(data){
                    res.json('already exitsed user')
                }
                else{
                    accountmodel.create({
                               username : user,
                               password : hash // store hash password in database
                           })
                }
            })
            .then(data=> {
                res.json("success created an account");
            })
            .catch(err=> {
                res.status(500).json("failed to create an account");
            })
    }
}
module.exports = new registercontroller();