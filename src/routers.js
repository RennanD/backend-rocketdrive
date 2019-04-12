const express = require('express')
const multer = require('multer')
const multerConfig = require('./settings/multer')

const routers = express.Router()

const BoxControler = require('./controlers/BoxControler')
const FileControler = require('./controlers/FileControler')

routers.post('/boxes', BoxControler.store)
routers.get('/boxes/:id',BoxControler.show)
routers.post('/boxes/:id/files',multer(multerConfig).single('file'), FileControler.store)

module.exports = routers