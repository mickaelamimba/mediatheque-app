const sharp =require('sharp')
const uid2 =require('uid2')
const path = require('path')


class Resize{
    constructor(folder){
        this.folder = folder
    }
    async save(buffer){
        const filename = Resize.filename()
        const filepath = this.filepath(filename)
        await sharp(buffer)
            .resize(300,300,{
                fit: sharp.fit.inside,
                withoutEnlargement :true
            })
            .toFile(filepath)
        return filename
    }
    static filename(){
        return `${uid2(16)}.jpg`
    }
    filepath(filename){
        return path.resolve(`${this.folder}/${filename}`)
    }
}

module.exports = Resize
