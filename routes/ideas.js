// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();

// // Load Idea Model
// require('../models/Idea');
// const Idea = mongoose.model('ideas');

// // Idea Index Page
// router.get('/page3', (req, res) => {
// 	console.log("-----------------------------");
//   Idea.find()
//     .then(ideas => {
// 			console.log("--------" + ideas + "--------------");
//       res.render('/page3')
//     });
// });

// // Add Idea Form
// router.get('/add', (req, res) => {
//   res.render('ideas/add');
// });

// module.exports = router;