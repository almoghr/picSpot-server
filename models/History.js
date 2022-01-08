import { Schema, model } from 'mongoose';


const HistorySchema = new Schema({
 
});

const  History = model('History', HistorySchema);

module.exports =  History;