const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Data tidak boleh kosong!"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const Fruit = mongoose.model("Fruits", fruitSchema);

//Insert data single
const pepaya = new Fruit({
    name: "Pepaya",
    rating: 9,
    review: "Rasa enak"
});

pepaya.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Data buah berhasil ditambahkan");
    }
});
