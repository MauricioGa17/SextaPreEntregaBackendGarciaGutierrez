import mongoose from 'mongoose';

const cartCollection = 'cart';

const cartSchema = new mongoose.Schema({

});

mongoose.set('strictQuery', false);

const cartModel = mongoose.model(cartCollection, cartSchema);

export default cartModel;