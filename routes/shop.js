const express = require('express')
const router= express.Router();
const path = require('path')
const rootDir = require('../util/path')
const {shopPage} = require('../controllers/ctrl-shop')

router.get("/",shopPage);


module.exports=router
