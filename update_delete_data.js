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

// Fruit.updateOne({ _id: '614ff82ff4861164c55d3bd9' }, { name: 'Kedondong' }, function (error) {
//     if (error) {
//         console.log(error);
//     } else {
//         mongoose.connection.close();
//         console.log('Data buah berhasil di update');
//     }
// });
Fruit.deleteOne({ _id: "614ff82ff4861164c55d3bd9" }, function (error) {
    if (error) {
        console.log(error);
    } else {
        // mongoose.connection.close();
        console.log('Data buah berhasil di hapus!');
    }
});
Fruit.find(function (error, fruits) {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        fruits.forEach(function (fruits) {
            console.log(fruits.name);
        });
        //console.log(fruits);
    }
});