const SHA256 = require('crypto-js/sha256')
const encBase64 = require('crypto-js/enc-base64')
const decryptPassword =({salt,hash,token,role,name,firstName,validateAccount},password)=>{

    const toCompareHash =SHA256(salt + password).toString(encBase64)

    if(hash === toCompareHash){
        return{token: token, role: role,name:name,firstName:firstName,validateAccount:validateAccount}
    }
return {error :"password invalid"}
}
module.exports =decryptPassword