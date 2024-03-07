import "./App.css";
import { StarRating } from "./components/StartRating/star-rating";

function App() {
	return (
		<div className="App">
			<StarRating noOfStars={10} />
		</div>
	);
}

export default App;
