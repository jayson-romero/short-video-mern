import "./VideoFooter.css"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import { useEffect } from "react"
// import Ticker from "react-ticker"
import { motion, useAnimation } from "framer-motion"

const VideoFooter = ({ channel, description, song }) => {
	const controls = useAnimation()

	const animationVariants = {
		initial: { x: "100%" },
		animate: { x: "-100%" },
	}

	const animationOptions = {
		duration: 3, // Duration of the animation in seconds
		ease: "linear", // Linear easing for continuous animation
		repeat: Infinity, // Infinite animation loop
	}

	useEffect(() => {
		controls.start("animate", animationOptions)
	}, [])

	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>{channel}</h3>
				<p>{description}</p>
				<div className="videoFooter__ticker">
					<MusicNoteIcon className="videoFooter__icon" />
					<div className="holder">
						<motion.p
							variants={animationVariants}
							initial="initial"
							animate={controls}
						>
							{song}
						</motion.p>
					</div>
				</div>
			</div>
			<img
				className="videoFooter__record"
				src="https://static.thenounproject.com/png/934821-200.png"
				alt="video footer"
			/>
		</div>
	)
}

export default VideoFooter
