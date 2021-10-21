

const getRoleMiddleware = async(req,res,next)=>{


    if(!req.body?.token){
        req.role='unauthenticated'
        return next()
    }

    const User = req.app.get('models').User

    const toCkeckUser = await User.findOne({token: req.body.token })
    console.log(toCkeckUser)


    if(!toCkeckUser){
        req.role='unauthenticated'
        return next()
    }
    req.role = toCkeckUser.role
    next()
}

module.exports = getRoleMiddleware