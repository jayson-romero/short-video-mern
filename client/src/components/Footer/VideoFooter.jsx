import "./VideoFooter.css"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
// import Ticker from "react-ticker"

const VideoFooter = ({ channel, description, song }) => {
	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>{channel}</h3>
				<p>{description}</p>
				<div className="videoFooter__ticker">
					<MusicNoteIcon className="videoFooter__icon" />
					<p>{song}</p>
					{/* <PageVisibility onChange={handleVisibilityChange}>
						{pageIsVisible && (
							<Ticker mode="smooth">
								{({ index }) => (
									<>
										<p>{song}</p>
									</>
								)}
							</Ticker>
						)}
					</PageVisibility> */}
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
