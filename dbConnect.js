const mongoose =require('mongoose')

const connect = mongoose.connect('mongodb+srv://saurabhmor02:saurabh4614@cluster0.rjj2ya5.mongodb.net/Fin-Flow-users', {useNewUrlParser : true , useUnifiedTopology : true})
// const connect = mongoose.connect('mongodb+srv://saurabh5800:saurabh4614@cluster22.fgreejt.mongodb.net/Fin-Flow-users', {useNewUrlParser : true , useUnifiedTopology : true})
// const connect = mongoose.connect('mongodb+srv://saurabhmor02:saurabh4614@cluster0.rjj2ya5.mongodb.net/test', {useNewUrlParser : true , useUnifiedTopology : true}) 
const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected', () => console.log('Mongo DB Connection Successfull'))

