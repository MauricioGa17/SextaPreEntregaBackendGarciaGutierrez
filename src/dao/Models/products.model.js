import mongoose from 'mongoose';

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({

});

mongoose.set('strictQuery', false);

const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel;