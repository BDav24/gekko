require('dotenv').config() // Reads .env file to set SLACK_WEBHOOK_TRADEBOT
const fetch = require('node-fetch')

const webhook = process.env.SLACK_WEBHOOK_TRADEBOT

module.exports = {
  notify: (text) => {
    fetch(webhook, {method: 'POST', body: JSON.stringify({text})}).catch(console.error)
  }
}
