const express = require("express")
const bodyParser = require('body-parser')
const fetch = require("node-fetch")
const { EmbedBuilder, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient({url:process.env.hook1}); // hook1 is the webhook url
const AUTHKEY = process.env['KEY'] // an auth key so people cant just fire randomly, any random string

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.listen(process.env.PORT || 3000, () => {
  console.log('server running on', process.env.PORT || 3000)
})

function isrblx(req) { // for rolbox people, remove this func and the func call if you want any other lang
  return req.headers['roblox-id'] && req.headers['user-agent'] // check if the person is on roblox
}

async function requesturl(body,embeds) {
// unused stuff lazy to add
  const response = webhookClient.send(body)
}


server.get('/', (req, res) => {
  res.send(
`failure of life`
  )
})

server.post("/", (req, res) => {
  console.log(req.body,req.headers.url)
  if(req.headers.auth && req.headers.auth == AUTHKEY && isrblx(req)){
    console.log("sending request")
    var response = requesturl(req.body)
    res.status(200).send({Message: "success"})
  }else{
    res.status(401).send({Message: "failure of life"})
  }
})
