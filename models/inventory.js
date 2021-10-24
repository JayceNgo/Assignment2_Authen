/* Filename: inventory.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 24nd Oct 2021
5:00Am  */
let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        }
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);