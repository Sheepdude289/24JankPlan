function renderWaypoints() {
    const waypointContainer = document.getElementById("waypoint-container");
    
    // Store current scroll position to prevent jumping
    const scrollTop = waypointContainer.scrollTop;
    const scrollLeft = waypointContainer.scrollLeft;
    
    // Clear only markers, not the container itself
    document.querySelectorAll('.waypoint-marker, .airport-marker, .vor-marker').forEach(el => el.remove());

    const mapImage = document.getElementById("map-image");
    const mapWidth = mapImage.clientWidth;
    const mapHeight = mapImage.clientHeight;

    // Remove existing ICAO text on ALT+W key press
    window.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "w") {
            // Remove all ICAO text elements
            const existingTexts = document.querySelectorAll(".icao-text");
            existingTexts.forEach(text => text.remove());
            visibleLabels.clear();
        }
    });

    // Render waypoints
    waypoints.forEach(wp => {
        const marker = document.createElement("div");
        marker.className = "waypoint-marker";
        marker.title = wp.id;
        // Position marker based on percentage coordinates
        marker.style.left = (wp.xPercent) + "%";
        marker.style.top = (wp.yPercent) + "%";

        // Add click event to toggle ICAO text
        marker.addEventListener("click", () => {
            const existingText = Array.from(document.querySelectorAll(".icao-text")).find(t => t.textContent === wp.id);
            if (existingText) {
                existingText.remove();
                visibleLabels.delete(wp.id);
            } else {
                const text = document.createElement("div");
                text.className = "icao-text";
                text.textContent = wp.id;
                text.style.position = "absolute";
                text.style.left = marker.style.left;
                text.style.top = `calc(${marker.style.top} + 12px)`;
                text.style.fontSize = "8px";
                text.style.color = "black";
                text.style.pointerEvents = "none";
                text.style.userSelect = "none";
                text.style.fontWeight = "normal";
                text.style.backgroundColor = "transparent";
                waypointContainer.appendChild(text);
                visibleLabels.add(wp.id);
            }
        });
        
        // Recreate label if it was visible before
        if (visibleLabels.has(wp.id)) {
            const text = document.createElement("div");
            text.className = "icao-text";
            text.textContent = wp.id;
            text.style.position = "absolute";
            text.style.left = marker.style.left;
            text.style.top = `calc(${marker.style.top} + 12px)`;
            text.style.fontSize = "8px";
            text.style.color = "black";
            text.style.pointerEvents = "none";
            text.style.userSelect = "none";
            text.style.fontWeight = "normal";
            text.style.backgroundColor = "transparent";
            waypointContainer.appendChild(text);
        }

        waypointContainer.appendChild(marker);
    });

    // Render mapAirports
    mapAirports.forEach(ap => {
        const marker = document.createElement("div");
        marker.className = "airport-marker";
        marker.title = ap.id;
        // Position marker based on percentage coordinates
        marker.style.left = (ap.xPercent) + "%";
        marker.style.top = (ap.yPercent) + "%";

        // Add click event to toggle ICAO text
        marker.addEventListener("click", () => {
            const existingText = Array.from(document.querySelectorAll(".icao-text")).find(t => t.textContent === ap.id);
            if (existingText) {
                existingText.remove();
                visibleLabels.delete(ap.id);
            } else {
                const text = document.createElement("div");
                text.className = "icao-text";
                text.textContent = ap.id;
                text.style.position = "absolute";
                text.style.left = marker.style.left;
                text.style.top = `calc(${marker.style.top} + 12px)`;
                text.style.fontSize = "8px";
                text.style.color = "black";
                text.style.pointerEvents = "none";
                text.style.userSelect = "none";
                text.style.fontWeight = "normal";
                text.style.backgroundColor = "transparent";
                waypointContainer.appendChild(text);
                visibleLabels.add(ap.id);
            }
        });
        
        // Recreate label if it was visible before
        if (visibleLabels.has(ap.id)) {
            const text = document.createElement("div");
            text.className = "icao-text";
            text.textContent = ap.id;
            text.style.position = "absolute";
            text.style.left = marker.style.left;
            text.style.top = `calc(${marker.style.top} + 12px)`;
            text.style.fontSize = "8px";
            text.style.color = "black";
            text.style.pointerEvents = "none";
            text.style.userSelect = "none";
            text.style.fontWeight = "normal";
            text.style.backgroundColor = "transparent";
            waypointContainer.appendChild(text);
        }

        waypointContainer.appendChild(marker);
    });

    // Render vors
    vors.forEach(vor => {
        const marker = document.createElement("div");
        marker.className = "vor-marker";
        marker.title = vor.id;
        // Position marker based on percentage coordinates
        marker.style.left = (vor.xPercent) + "%";
        marker.style.top = (vor.yPercent) + "%";

        // Add click event to toggle ICAO text
        marker.addEventListener("click", () => {
            const existingText = Array.from(document.querySelectorAll(".icao-text")).find(t => t.textContent === vor.id);
            if (existingText) {
                existingText.remove();
                visibleLabels.delete(vor.id);
            } else {
                const text = document.createElement("div");
                text.className = "icao-text";
                text.textContent = vor.id;
                text.style.position = "absolute";
                text.style.left = marker.style.left;
                text.style.top = `calc(${marker.style.top} + 12px)`;
                text.style.fontSize = "8px";
                text.style.color = "black";
                text.style.pointerEvents = "none";
                text.style.userSelect = "none";
                text.style.fontWeight = "normal";
                text.style.backgroundColor = "transparent";
                waypointContainer.appendChild(text);
                visibleLabels.add(vor.id);
            }
        });
        
        // Recreate label if it was visible before
        if (visibleLabels.has(vor.id)) {
            const text = document.createElement("div");
            text.className = "icao-text";
            text.textContent = vor.id;
            text.style.position = "absolute";
            text.style.left = marker.style.left;
            text.style.top = `calc(${marker.style.top} + 12px)`;
            text.style.fontSize = "8px";
            text.style.color = "black";
            text.style.pointerEvents = "none";
            text.style.userSelect = "none";
            text.style.fontWeight = "normal";
            text.style.backgroundColor = "transparent";
            waypointContainer.appendChild(text);
        }

        waypointContainer.appendChild(marker);
    });

    // Log mouse click position on map in xPercent/yPercent format
    const mapDiv = document.getElementById("map");
    mapDiv.addEventListener("click", (event) => {
        const rect = mapDiv.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xPercent = ((x / rect.width) * 100).toFixed(2);
        const yPercent = ((y / rect.height) * 100).toFixed(2);
        console.log(`Clicked position: xPercent: ${xPercent}, yPercent: ${yPercent}`);
    });
    
    // Restore scroll position after re-rendering
    waypointContainer.scrollTop = scrollTop;
    waypointContainer.scrollLeft = scrollLeft;
}

let currentPolyline = null;
let isFlightPlanned = false;
const visibleLabels = new Set(); // Track which waypoint labels are currently visible

function drawRouteLine(dotted = true) {
    const routeInput = document.getElementById("route");
    const departureInput = document.getElementById("departure");
    const arrivalInput = document.getElementById("arrival");
    const routeValue = routeInput.value.trim().toUpperCase();
    const departureValue = departureInput.value.trim().toUpperCase();
    const arrivalValue = arrivalInput.value.trim().toUpperCase();
    const mapDiv = document.getElementById("map");
    const mapWidth = mapDiv.clientWidth;
    const mapHeight = mapDiv.clientHeight;

    // Use existing SVG element with id "route-line-svg"
    let svg = document.getElementById("route-line-svg");
    if (!svg) {
        console.error("SVG element with id 'route-line-svg' not found.");
        return;
    }

    // Clear previous lines
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }

    if (!routeValue && !departureValue && !arrivalValue) {
        return; // No route to draw
    }

    // Build full route including departure and arrival
    const ids = [];
    if (departureValue) {
        ids.push(departureValue);
    }
    if (routeValue) {
        ids.push(...routeValue.split(/\s+/));
    }
    if (arrivalValue) {
        ids.push(arrivalValue);
    }

    const points = [];

    ids.forEach(id => {
        // Find waypoint, airport, or VOR by id
        let wp = waypoints.find(w => w.id === id);
        if (!wp) {
            wp = mapAirports.find(a => a.id === id);
        }
        if (!wp) {
            wp = vors.find(v => v.id === id);
        }
        if (wp) {
            // Convert xPercent/yPercent to pixel coordinates
            const x = (wp.xPercent / 100) * mapWidth;
            const y = (wp.yPercent / 100) * mapHeight;
            points.push([x, y]);
        }
    });

    if (points.length < 2) {
        return; // Need at least two points to draw a line
    }

    // Create polyline element
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    const pointsAttr = points.map(p => p.join(",")).join(" ");
    polyline.setAttribute("points", pointsAttr);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", "blue");
    polyline.setAttribute("stroke-width", "2");
    polyline.setAttribute("stroke-linejoin", "round");
    polyline.setAttribute("stroke-linecap", "round");

    if (dotted) {
        polyline.setAttribute("stroke-dasharray", "6, 6");
    } else {
        polyline.removeAttribute("stroke-dasharray");
    }

    svg.appendChild(polyline);
    currentPolyline = polyline;
}
