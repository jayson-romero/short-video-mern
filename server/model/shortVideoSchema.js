import mongoose from "mongoose"

const shortVideoSchema = mongoose.Schema({
	url: String,
	channel: String,
	description: String,
	song: String,
	likes: String,
	shares: String,
	messages: String,
})

const Videos = mongoose.model("shortVideo", shortVideoSchema)
export default Videos
