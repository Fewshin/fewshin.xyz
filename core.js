const express = require('express')
const app = express()
const config = require('./config.json')
const Logger = require('./utilities/Logger')
const log = new Logger('bgBlue', 'System')

class Core {
  constructor (options) {
    this.options = options || {}
  }
  initiator () {
    app.listen(80, function() { log.system(`Site has loaded on port ${config.port}`) })
    app.use(express.static('./web_pages'))
    app.get('/', function (req, res) { res.redirect(301, 'http://www.fewshin.xyz/home') })
    app.use('/home', express.static('./web_pages/homepage.html'))
    app.use('/backgrounds', express.static('./web_pages/BackgroundsInstructions.html'))
    app.use('/siteimages', express.static('./images'))
  }
}

module.exports = Core