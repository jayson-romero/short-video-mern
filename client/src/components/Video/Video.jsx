import { useRef, useState } from "react"
import VideoFooter from "../Footer/VideoFooter"
import VideoSidebar from "../VideoSidebar/VideoSidebar"
import "./Video.css"

const Video = ({
	url,
	channel,
	description,
	song,
	likes,
	shares,
	messages,
}) => {
	const [playing, setPlaying] = useState(false)
	const videoRef = useRef(null)

	const handleVideoPress = () => {
		if (playing) {
			videoRef.current.pause()
			setPlaying(false)
		} else {
			videoRef.current.play()
			setPlaying(true)
		}
	}

	return (
		<div className="video">
			<video
				src={url}
				className="video__player"
				loop
				ref={videoRef}
				onClick={handleVideoPress}
			></video>
			<VideoFooter channel={channel} description={description} song={song} />
			<VideoSidebar likes={likes} shares={shares} messages={messages} />
		</div>
	)
}

export default Video
