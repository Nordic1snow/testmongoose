const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age: Number,
    health:String
}
// const Cat = mongoose.model('Cat',schema);
const mydata = mongoose.model('cats',schema);

const kitty = new mydata({ name: 'testZildjian' });
kitty.save().then(() => console.log('testmeow'));
const kitty1 = new mydata({ name: 'zhang1' ,age:1,health:"good!"});
kitty.save().then(()=>console.log("new schema writed"))
mydata.find({name:"zhang1"},(err,data)=>{console.log(data)})