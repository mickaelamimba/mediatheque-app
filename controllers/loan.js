
const loanGet = async (req,res)=>{
    try {
        const Loan = req.app.get('models').Loan
        const loanSelected= await Loan.find({selected:true}).populate('book')
        const loanCount =await Loan.find({selected:true}).count()
        let data={data:loanSelected,count : loanCount}
       return res.status(200).json(data)
        }catch(err){
        return res.json(err)
    }



}

const loanCreat = async (req,res)=>{
   try {
       if(req.role !== 'Employe' || req.role !== 'Inscrit'){
           res.json('Unauthorized')
       }
       const model = req.app.get('models')
       const Loan = req.app.get('models').Loan
       const recoveryLimitDate = new Date(Date.now() + 60*60*24*1000*3)
       const currentDate = new Date(Date.now() )
       const userId = await model.User.findOne({token: req.body.token})

       const newLoan = await new Loan({
           recoveryInfo :{
               date: req.body.date,
               recovery: req.body.recovery,
               limit :recoveryLimitDate
           },
           dateOfLoan :req.body.dateOfLoan,
           user:userId._id,
           book:req.body.book,
       }).save()
       res.json(newLoan)

       if(recoveryLimitDate === currentDate){
           model.User.findByIdAndUpdate(newLoan.book,{loan: true})
       }

      }catch(err){

   }
}

module.exports = {loanCreat,loanGet}