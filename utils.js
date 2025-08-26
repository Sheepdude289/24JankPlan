// Function to calculate distance from point (x,y) to line segment (x1,y1)-(x2,y2)
function distanceToLine(x, y, x1, y1, x2, y2) {
    const A = x - x1;
    const B = y - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const len_sq = C * C + D * D;
    let param = -1;
    if (len_sq !== 0) param = dot / len_sq;

    let xx, yy;

    if (param < 0) {
        xx = x1;
        yy = y1;
    } else if (param > 1) {
        xx = x2;
        yy = y2;
    } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
    }

    const dx = x - xx;
    const dy = y - yy;
    return Math.sqrt(dx * dx + dy * dy);
}

// Function to calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Helper function to calculate Euclidean distance between two points
function euclideanDistance(p1, p2) {
    const dx = p1.xPercent - p2.xPercent;
    const dy = p1.yPercent - p2.yPercent;
    return Math.sqrt(dx * dx + dy * dy);
}

// Build graph nodes from waypoints, airports, and vors
const graphNodes = {};

// Add all nodes to graphNodes by id
[...waypoints, ...mapAirports, ...vors].forEach(node => {
    graphNodes[node.id] = {
        ...node,
        neighbors: []
    };
});

// Connect nodes with edges based on distance threshold
const DISTANCE_THRESHOLD = 20; // Adjust threshold as needed

Object.values(graphNodes).forEach(node => {
    Object.values(graphNodes).forEach(otherNode => {
        if (node.id !== otherNode.id) {
            const dist = euclideanDistance(node, otherNode);
            if (dist <= DISTANCE_THRESHOLD) {
                node.neighbors.push({
                    id: otherNode.id,
                    cost: dist
                });
            }
        }
    });
});

// A* pathfinding algorithm implementation
function aStar(startId, goalId) {
    const openSet = new Set([startId]);
    const cameFrom = {};

    // Get all airport IDs to exclude them as intermediate waypoints
    const airportIds = new Set(mapAirports.map(ap => ap.id));

    const gScore = {};
    const fScore = {};

    Object.keys(graphNodes).forEach(id => {
        gScore[id] = Infinity;
        fScore[id] = Infinity;
    });

    gScore[startId] = 0;
    fScore[startId] = euclideanDistance(graphNodes[startId], graphNodes[goalId]);

    while (openSet.size > 0) {
        // Get node in openSet with lowest fScore
        let current = null;
        let lowestF = Infinity;
        openSet.forEach(id => {
            if (fScore[id] < lowestF) {
                lowestF = fScore[id];
                current = id;
            }
        });

        if (current === goalId) {
            // Reconstruct path
            const path = [];
            let curr = current;
            while (curr) {
                path.unshift(curr);
                curr = cameFrom[curr];
            }
            return path;
        }

        openSet.delete(current);

        const currentNode = graphNodes[current];
        currentNode.neighbors.forEach(neighbor => {
            // Skip if this is an airport (except for start and goal)
            if (neighbor.id !== startId && neighbor.id !== goalId && airportIds.has(neighbor.id)) {
                return;
            }

            const tentativeG = gScore[current] + neighbor.cost;
            if (tentativeG < gScore[neighbor.id]) {
                cameFrom[neighbor.id] = current;
                gScore[neighbor.id] = tentativeG;
                fScore[neighbor.id] = tentativeG + euclideanDistance(graphNodes[neighbor.id], graphNodes[goalId]);
                if (!openSet.has(neighbor.id)) {
                    openSet.add(neighbor.id);
                }
            }
        });
    }

    // No path found
    return [];
}

// Function to calculate the number of waypoints based on airport proximity
function calculateWaypointCount(departure, arrival) {
    const departureAirport = mapAirports.find(ap => ap.id === departure);
    const arrivalAirport = mapAirports.find(ap => ap.id === arrival);
    
    if (!departureAirport || !arrivalAirport) {
        return 3; // Default value if airports not found
    }
    
    // Calculate the average difference in x and y percentages
    const xDiff = Math.abs(departureAirport.xPercent - arrivalAirport.xPercent);
    const yDiff = Math.abs(departureAirport.yPercent - arrivalAirport.yPercent);
    const avgDiff = (xDiff + yDiff) / 2;
    
    // Determine number of waypoints based on the average difference
    if (avgDiff < 5) {
        return 1; // Very close airports - direct route
    } else if (avgDiff < 15) {
        return 2; // Moderately close airports - 2 waypoints
    } else if (avgDiff < 25) {
        return 3; // Medium distance - 3 waypoints
    } else if (avgDiff < 35) {
        return 4; // Long distance - 4 waypoints
    } else {
        return 5; // Very long distance - 5 waypoints
    }
}
