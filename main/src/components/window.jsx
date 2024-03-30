import { useEffect } from "react";
import "./styles/window.css";
import WindowPopup from "./windowPopup";

const Window = ({renderWindowPopup}) => {
	useEffect(() => {
		var background = [
			"rgba(143, 189, 255, 0.7)",
			"rgba(255,255,255,0.6)",
			"rgba(255,255,255,0.9)",
		];

		// Function for planet colors
		function backgroundColor() {
			return background[Math.floor(Math.random() * background.length)];
		}

		// Get viewport size
		var viewportWidth = window.innerWidth;
		var viewportHeight = window.innerHeight;
		var viewportSize = viewportWidth + viewportHeight;

		// Set limit for amount of stars and planets based on viewport size
		var starLimit = viewportSize * 0.12;
		var planetLimit = viewportSize * 0.025;

		// Get random number
		function getRandom() {
			return Math.random();
		}

		// Function for creating a star
		function newStar() {
			var starDiv = document.createElement("div");
			starDiv.className = "star";
			return starDiv;
		}

		// Function for creating a planet
		function newPlanet() {
			var planetDiv = document.createElement("div");
			planetDiv.className = "planet";
			return planetDiv;
		}

		// Function for creating the moon
		function newMoon() {
			var moonDiv = document.createElement("div");
			moonDiv.className = "moon";
			return moonDiv;
		}

		// Loop for creating stars
		function createStars() {
			for (var i = 0; i <= starLimit; i++) {
				var star = newStar();
				star.style.top = getRandom() * 100 + "%";
				star.style.left = getRandom() * 100 + "%";
				star.style.height = getRandom() * 3 + "px";
				star.style.width = star.style.height;
				star.style.animationDelay = getRandom() + "s";
				star.style.animationDuration = getRandom() + 1 + "s";
				document.body.appendChild(star);
			}
		}

		// Loop for creating planets
		function createPlanets() {
			for (var i = 0; i <= planetLimit; i++) {
				var planet = newPlanet();
				planet.style.top = getRandom() * 100 + "%";
				planet.style.left = getRandom() * 100 + "%";
				planet.style.height = getRandom() * 6 + 2 + "px";
				planet.style.width = planet.style.height;
				planet.style.opacity = getRandom() + 0.15;
				planet.style.animationDelay = getRandom() + "s";
				planet.style.animationDuration = getRandom() + 3 + "s";
				planet.style.background = backgroundColor();
				document.body.appendChild(planet);
			}
		}

		// Create the moon
		var moon = newMoon();
		document.body.appendChild(moon);

		// Call functions
		createStars();
		createPlanets();

		// Clean up function
		return () => {
			// Remove stars, planets, and moon when component unmounts
			document.querySelectorAll(".star").forEach((star) => star.remove());
			document.querySelectorAll(".planet").forEach((planet) => planet.remove());
			document.querySelector(".moon").remove();
		};
	}, []); // Empty dependency array to run effect only once
	return (
		<div className="window-container">
			<WindowPopup isOpen={renderWindowPopup} />
		</div>
	);
};

export default Window;
