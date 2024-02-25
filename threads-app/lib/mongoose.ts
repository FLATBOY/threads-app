import mongoose from 'mongoose'

let isConnected = false;

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGOOSE_URL) return console.log('MONGOOSE_URL not found');
    if(isConnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connect('process.env.MONGODB_URL');

        isConnected = true;
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
