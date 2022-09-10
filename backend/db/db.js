const mongoose = require('mongoose')

const connectDB = async() => {
    try {
       await mongoose.connect(process.env.DB);
       console.log('db conectada');
    } catch (error) {
        console.log(error);
    }
    
}
module.exports = { connectDB };