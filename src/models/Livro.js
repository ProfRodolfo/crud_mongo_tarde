import mongoose from "mongoose"

const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false });

//versionKey - é uma funcionalidade do Mongoose que permite que o MongoDB acompanhe as alterações em um documento. Ela funciona como um contador que é incrementado a cada vez que um documento é modificado. 

const livro = mongoose.model("livros", livroSchema);

export default livro;
