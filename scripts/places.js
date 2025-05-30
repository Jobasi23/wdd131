// Static values (Imperial units as example)
const temperature = 40; // °F
const windSpeed = 10;   // mph

// Wind chill calculation for °F and mph
function calculateWindChill(tempF, speedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
}

// Check if wind chill calculation is applicable
let windChillDisplay = "N/A";
if (temperature <= 50 && windSpeed > 3) {
    windChillDisplay = calculateWindChill(temperature, windSpeed) + " °F";
}

// Display wind chill in the Weather section
document.addEventListener("DOMContentLoaded", () => {
    // Replace '#windchill' with your actual element selector
    const windChillElement = document.querySelector("#windchill");
    if (windChillElement) {
        windChillElement.textContent = windChillDisplay;
    }
});