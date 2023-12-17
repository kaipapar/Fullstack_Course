
/*if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}*/
const mongoose = require('mongoose')

const password = process.argv[2]

const url =
  `mongodb+srv://karrikorsu:${password}@cluster0.ziu0hry.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })