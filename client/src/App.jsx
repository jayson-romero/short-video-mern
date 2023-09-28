import { useState, useEffect } from "react"
import "./App.css"
import Video from "./components/Video/Video"
import axios from "axios"

import LoadingComponent from "./components/Loading/LoadingComponent"
import ErrorComponent from "./components/Error/ErrorComponent"

function App() {
	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const res = await axios.get("http://localhost:9000/v2/posts")
				setVideos(res.data)
				setLoading(false)
			} catch (error) {
				setLoading(false)
				setError(error.message)
			}
		}
		fetchData()
	}, [])

	if (loading) {
		return <LoadingComponent />
	}
	if (error) {
		return <ErrorComponent message={error} />
	}

	return (
		<div className="app">
			<div className="app__videos">
				{videos &&
					videos.map(
						({
							_id,
							url,
							channel,
							description,
							song,
							likes,
							shares,
							messages,
						}) => (
							<Video
								key={_id}
								url={url}
								channel={channel}
								description={description}
								song={song}
								likes={likes}
								shares={shares}
								messages={messages}
							/>
						)
					)}
			</div>
		</div>
	)
}

export default App
