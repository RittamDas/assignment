const express = require("express")
const request = require("request")
const app = express()


app.use(express.json())

app.get("/topstories", (req, res) => {
    let arr = []
    request({
        url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
        json: true
    }, (error, response, body) => {
        let len = body.length
        for(let i = 0;i < len; i++){
            request({
                url: `https://hacker-news.firebaseio.com/v0/item/${body[i]}.json?print=pretty`,
                json: true
            }, (err, resp, bd) => {
                arr = [...arr, bd]
                if(i === (len-1)) res.json({stories: arr})
            })
        }
    })
})

app.get("/newstories", (req, res) => {
    let arr = []
    request({
        url: "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty",
        json: true
    }, (error, response, body) => {
        let len = body.length
        for(let i = 0;i < len; i++){
            request({
                url: `https://hacker-news.firebaseio.com/v0/item/${body[i]}.json?print=pretty`,
                json: true
            }, (err, resp, bd) => {
                arr = [...arr, bd]
                if(i === (len-1)) res.json({stories: arr})
            })
        }
    })
})

app.get("/beststories", (req, res) => {
    let arr = []
    request({
        url: "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty",
        json: true
    }, (error, response, body) => {
        let len = body.length
        for(let i = 0;i < len; i++){
            request({
                url: `https://hacker-news.firebaseio.com/v0/item/${body[i]}.json?print=pretty`,
                json: true
            }, (err, resp, bd) => {
                arr = [...arr, bd]
                if(i === (len-1)) res.json({stories: arr})
            })
        }
    })
})

app.listen(8080, () => {
    console.log("Here We Go")
})