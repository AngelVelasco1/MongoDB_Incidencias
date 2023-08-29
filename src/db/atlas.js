import { MongoClient } from 'mongodb';

dotenv.config('../.');


const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.tfk8jyc.mongodb.net/${process.env.ATLAS_DB}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true 
}

export const getConx = () => {
    try {
        const client = MongoClient.connect(uri, options);
        return client.db()
    }
    catch(err) {
        res.status(500).send({err: err.message, status: 500})
    }
}

export const endConx = () => {
    return client.close();
}