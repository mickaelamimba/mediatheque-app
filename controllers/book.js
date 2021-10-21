const path = require("path");
const Resize = require("../utils/Resize");
const oneBook =async (req, res)=>{
    const models = req.app.get('models')
   const book= models.Book.findOne({_id: req.query})
    res.json()
}
const getBooks = async(req,res)=>{
    try{
        let allBooks
        let Book = req.app.get('models').Book
        const {page,limit}=req.query

        const pagesOptions = {
            page: parseInt(page,10) ||1,
            limit:parseInt(limit,10)||3,

        }
        if(req.query.load){
            allBooks = await  Book.find({})
        }

        if(req.query.page ){
           allBooks = await  Book.paginate({loan:false},pagesOptions)

        }else{
            allBooks = await  Book.find()
        }

        return res.json(allBooks)
    }catch (e) {
        return res.json(e.message)
    }
}

const postBook = async(req, res)=>{
    try{

        let {...files}=req.files
        let file = files.picture
        if(req.role !== 'Employe'){
       return res.status(400).join({message: 'Unauthorized'})
        }

        if(!file|| Object.keys(file).length === 0){
            return res.status(400).join({message:'No files were uploaded'})
        }
        if(file){
            let type = file.mimetype.split('/')[1]
            if(type !== 'jpeg'){
                return res.status(400).join({message:'is note [ jpg - png - jpeg ] file'})
            }

            const imagePath = path.join(__dirname,'../public/images')
            const fileUpload = new Resize(imagePath)
            if(!file){
               return res.status(401).json({message: 'place an image'})
            }

            let filename = await fileUpload.save(file.data)
            const models = req.app.get('models')
            const userId = await models.User.findOne({token: req.body.token})
            const Book = req.app.get('models').Book
            const newBook = await new Book({
                title: req.body.title,
                picture: `public/images/${filename}`,
                releaseDate:req.body.releaseDate,
                description:req.body.description,
                author:req.body.author,
                genre:req.body.genre,
                available:req.body.available,
                loan: req.body.loan,
                user: await userId._id
            }).save()
            res.status(200).json(newBook)


        }


    }catch(e){
        return res.status(400).send(e.message)
    }

}

module.exports = {postBook,getBooks,oneBook}