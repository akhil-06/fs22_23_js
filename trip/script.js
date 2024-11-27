document.getElementById("trip-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const tripName = document.getElementById("trip-name").value;
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    if (days <= 0) {
        alert("End date must be after start date.");
        return;
    }

    const itineraryContainer = document.getElementById("itinerary");
    itineraryContainer.innerHTML = "<p>Generating itinerary...</p>";

    try {
        const response = await fetch(
            `https://gemini.googleapis.com/v1/itinerary?start=${startDate.toISOString()}&end=${endDate.toISOString()}&tripName=${tripName}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer AIzaSyAcSbtI31LZPhsFYpCV_ZWqFR68BdmLvd0"
                }
            }
        );

        if (!response.ok) throw new Error("Failed to fetch itinerary");

        const data = await response.json();
        displayItinerary(data, itineraryContainer, days);
    } catch (error) {
        itineraryContainer.innerHTML = `<p>Error generating itinerary: ${error.message}</p>`;
    }
});

function displayItinerary(data, container, days) {
    container.innerHTML = `<h2>Your Itinerary for ${days} Day(s)</h2>`;
    data.days.forEach((day, index) => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("itinerary-day");
        dayElement.innerHTML = `
            <h3>Day ${index + 1}: ${day.date}</h3>
            <p><strong>Where to stay:</strong> ${day.accommodation}</p>
            <p><strong>Things to do:</strong> ${day.activities.join(", ")}</p>
            <p><strong>Food options:</strong> ${day.food.join(", ")}</p>
            <p><strong>Tickets/Costs:</strong> ${day.tickets}</p>
        `;
        container.appendChild(dayElement);
    });
}
