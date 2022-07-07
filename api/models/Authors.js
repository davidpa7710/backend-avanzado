import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    nationality: String,
    birthday: Date,

})

const AuthorModel = mongoose.model('Author', authorSchema)

export default AuthorModel