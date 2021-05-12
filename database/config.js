const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DV_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
    } catch (error) {
        throw new Error('Error a la hora de iniciar base de datos')
    }
    
}


module.exports = {
    dbConnection
}