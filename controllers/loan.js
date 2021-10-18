

const loanCreat = async (req,res)=>{
    if(req.role !== 'Employe' || req.role !== 'Inscrit'){
        res.json('Unauthorized')
    }
    const Loan = req.app.get('models').Loan
    const recoveryLimitDate = new Date(Date.now())
    recoveryLimitDate.setDate(recoveryLimitDate.getDate()+1)
    console.log(recoveryLimitDate)

    const newLoan = await new Loan({
        recoveryDate : req.body.recoveryDate,
        available:req.body.available,
        dateOfLoan :req.body.dateOfLoan,
        user:req.body.user,
        book:req.body.book,
    })
    res.json(recoveryLimitDate)
}

module.exports = {loanCreat}