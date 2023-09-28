import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDB from "./config/db.js"
import Videos from "./model/shortVideoSchema.js"

const app = express()
const port = process.env.PORT || 9000

// DB Config
connectDB()
//Middleware
app.use(express.json())
app.use(cors())

// API EndPoint
app.get("/", (req, res) => res.status(200).send("Hello, world!"))

app.post("/v2/posts", async (req, res) => {
	const dbVideos = req.body
	try {
		const response = await Videos.create(dbVideos)
		res.status(201).send(response)
	} catch (error) {
		res.status(500).send(error.message)
	}
})
app.get("/v2/posts", async (req, res) => {
	try {
		const response = await Videos.find()
		res.status(200).send(response)
	} catch (error) {
		res.status(500).send(error.message)
	}
})

//Listener
app.listen(port, () => console.log(`Listening on port: ${port}`))
