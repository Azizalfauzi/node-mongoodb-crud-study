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

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Data tidak boleh kosong!"],
    },
    umur: {
        type: Number,
    },
    favoriteFruit: fruitSchema,
});
const People = mongoose.model("People", peopleSchema);


//Insert data single
const anggur = new Fruit({
    name: "Anggur",
    rating: 8,
    review: "Rasa enak"
});

anggur.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Data buah berhasil ditambahkan");
    }
});

const people = new People({
    name: "Aziz Alfauzi",
    umur: 23,
    favoriteFruit: anggur,
});

people.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Data berhasil ditambahkan mempunyai relasi dengan buah");
    }
});