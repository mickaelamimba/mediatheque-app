const encryptPassword = require("../utils/encryptPassword");
const decryptPassword = require("../utils/decryptPassword");
const userGet =async(req,res)=>{
    try{
        const User = req.app.get('models').User
        const allUsers = await User.find()
        res.json(allUsers)
    }catch(e){
return res.json(e.message)
    }
}
const userCreat = async(req,res)=>{

    try{
        if (!req.body.password){
          return  res.json('no password')
        }

        const {token,salt,hash} = encryptPassword(req.body.password)
        const User = req.app.get('models').User
        const NewUser = await new User({
            name :req.body.name,
            firstName: req.body.firstName,
            address: req.body.address,
            email: req.body.email,
            birthDate: req.body.birthDate,
            validateAccount: req.body.validateAccount,
            token,
            hash,
            salt,
            role:req.body.role,
        }).save()
        res.json(NewUser)
    }catch(e){

    }
}
const userDelete =async(req,res)=>{
    try{
        if (!req.body._id){
            return  res.json('id not found')
        }
        if(req.role !== 'Employe'){
          return  res.json('Unauthorized')
        }
        const User = req.app.get('models').User
        const toDeleteUser = await User.findById(req.body._id)
        await toDeleteUser.remove()
        res.json("successfully delete")
    }catch(e){
        return res.json(e.message)
    }
}
const userUpdate = async(req,res)=>{
    try{
        if (!req.body._id || !req.body.toModify){
            return  res.json('id not found')
        }
        const User = req.app.get('models').User
        const toModifyUser = await User.findById(req.body._id)
        const toModifyKeys = Object.keys(req.body.toModify)
        for (const key of toModifyKeys) {
            toModifyUser[key] = req.body.toModify[key]
        }
        await toModifyUser.save()

        res.json("successfully delete")
    }catch(e){
        return res.json(e.message)
    }
}
const userLogin = async(req,res)=>{
    try{
        if (!req.body.email ||!req.body.password){
           return res.json({error :'email or password missing'})
        }

        const User = req.app.get('models').User
        const topVerifyUser = await User.findOne({email: req.body.email})

        if(topVerifyUser.validateAccount !== true){
            return res.json({error :'user not validate'})
        }
        if(!topVerifyUser){
            return res.json({error :'No user found'})
        }
        res.json(decryptPassword(topVerifyUser, req.body.password))

    }catch (e) {
        res.json(e.message)
    }
}
const validateUser = async(req,res)=>{
    try {
        if (!req.body.email ){
            return res.json('user not valid')
        }
        const model = req.app.get('models')
        const User = req.app.get('models').User

        const topVerifyUser = await User.findOne({email: req.body.email})
        const modify = await User.findByIdAndUpdate(topVerifyUser._id, {validateAccount:true})
        const toModifyCustomer = await model.Customer.findOneAndUpdate(topVerifyUser._id, {status:'Valide'})
        res.json({message: 'utilisateur vadlider'})
    }catch (err){
        res.json(err)
    }
}

module.exports = {userCreat,userGet,userUpdate,userDelete,userLogin,validateUser}