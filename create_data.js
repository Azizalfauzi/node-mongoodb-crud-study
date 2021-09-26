const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruits", fruitSchema);

//Insert data single
// const apple = new Fruit({
//     name: "Apel",
//     rating: 8,
//     review: "Rasa enak"
// });

// apple.save(function (error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Data buah berhasil ditambahkan");
//     }
// });
//insert data array
const nanas = new Fruit({
    name: "Nanas",
    rating: 7,
    review: "Rada masam"
});
const pisang = new Fruit({
    name: "Pisang",
    rating: 9,
    review: "Manis dan mantab"
});
const jeruk = new Fruit({
    name: "Jeruk",
    rating: 6,
    review: "Masam sekali"
});

Fruit.insertMany([
    nanas, pisang, jeruk
], function (error) {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Data buah berhasil di simpan");
    }
});