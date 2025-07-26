const airports = [
    { icao: "IRFD", fullName: "Greater Rockford" },
    { icao: "IPPH", fullName: "Perth" },
    { icao: "IZOL", fullName: "Izolirani" },
    { icao: "ITKO", fullName: "Tokyo" },
    { icao: "ILAR", fullName: "Larnaca" },
    { icao: "IIAB", fullName: "McConnell AFB" },
    { icao: "IPAP", fullName: "Paphos" },
    { icao: "IGRV", fullName: "Grindavik" },
    { icao: "IDCS", fullName: "Saba" },
    { icao: "ILKL", fullName: "Lukla" },
    { icao: "IGAR", fullName: "Airbase Garry" },
    { icao: "IBLT", fullName: "Boltic" },
    { icao: "IMLR", fullName: "Mellor" },
    { icao: "ITRC", fullName: "Training Centre" },
    { icao: "IBTH", fullName: "Saint Barthélemy" },
    { icao: "IHEN", fullName: "Henstridge" },
    { icao: "IBAR", fullName: "Barra" },
    { icao: "ISCM", fullName: "RAF Scampton" },
    { icao: "ISAU", fullName: "Sauthamptona" },
    { icao: "ISKP", fullName: "Skopelos" },
    { icao: "IJAF", fullName: "Al Najaf" },
    { icao: "IUFO", fullName: "UFO Base" }
];

const waypoints = [
    { id: "QUEENS", xPercent: 51.53, yPercent: 54.27 },
    { id: "LAVNO", xPercent: 54.87, yPercent: 55.77 },
    { id: "JAMSI", xPercent: 59.70, yPercent: 59.44 },
    { id: "ATPEV", xPercent: 57.20, yPercent: 54.61 },
    { id: "SETHR", xPercent: 55.87, yPercent: 48.11 },
    { id: "GOLDU", xPercent: 55.87, yPercent: 63.27 },
    { id: "LAZER", xPercent: 59.37, yPercent: 64.77 },
    { id: "ODOKU", xPercent: 50.20, yPercent: 69.77 },
    { id: "REAPR", xPercent: 52.20, yPercent: 75.77 },
    { id: "TRELN", xPercent: 45.37, yPercent: 77.27 },
    { id: "EMJAY", xPercent: 41.97, yPercent: 69.92 },
    { id: "POPUL", xPercent: 46.80, yPercent: 64.25 },
    { id: "MOGTA", xPercent: 44.80, yPercent: 59.92 },
    { id: "HAWFA", xPercent: 47.13, yPercent: 50.42 },
    { id: "ICTAM", xPercent: 43.13, yPercent: 51.25 },
    { id: "KUNAV", xPercent: 44.30, yPercent: 48.75 },
    { id: "KENED", xPercent: 44.47, yPercent: 45.42 },
    { id: "ENDER", xPercent: 37.97, yPercent: 42.92 },
    { id: "BUCFA", xPercent: 38.30, yPercent: 48.75 },
    { id: "POPUL", xPercent: 46.80, yPercent: 64.25 },
    { id: "SUNST", xPercent: 33.80, yPercent: 46.25 },
    { id: "SAWPE", xPercent: 32.13, yPercent: 50.25 },
    { id: "BEANS", xPercent: 32.47, yPercent: 56.59 },
    { id: "LOGAN", xPercent: 37.80, yPercent: 57.75 },
    { id: "EXMOR", xPercent: 38.80, yPercent: 62.25 },
    { id: "ALDER", xPercent: 32.11, yPercent: 67.82 },
    { id: "HOGGS", xPercent: 30.94, yPercent: 72.48 },
    { id: "STACK", xPercent: 23.27, yPercent: 69.4 },
    { id: "SEEKS", xPercent: 25.44, yPercent: 61.82 },
    { id: "WASTE", xPercent: 15.77, yPercent: 72.82 },
    { id: "PACKT", xPercent: 16.27, yPercent: 66.65 },
    { id: "HECKS", xPercent: 10.94, yPercent: 65.15 },
    { id: "HACKE", xPercent: 12.27, yPercent: 57.65 },
    { id: "GEORG", xPercent: 18.61, yPercent: 59.48 },
    { id: "SPACE", xPercent: 25.27, yPercent: 52.32 },
    { id: "SHREK", xPercent: 18.44, yPercent: 50.65 },
    { id: "THACC", xPercent: 11.44, yPercent: 50.15 },
    { id: "FRANK", xPercent: 11.61, yPercent: 43.48 },
    { id: "UWAIS", xPercent: 10.94, yPercent: 37.82 },
    { id: "ACRES", xPercent: 15.11, yPercent: 34.15 },
    { id: "BOBOS", xPercent: 18.44, yPercent: 29.98 },
    { id: "FROOT", xPercent: 23.27, yPercent: 24.98 },
    { id: "BULLY", xPercent: 27.94, yPercent: 19.48 },
    { id: "EURAD", xPercent: 32.77, yPercent: 26.82 },
    { id: "THENR", xPercent: 23.11, yPercent: 32.32 },
    { id: "BLANK", xPercent: 35.11, yPercent: 31.32 },
    { id: "YOUTH", xPercent: 28.77, yPercent: 35.48 },
    { id: "EZYDB", xPercent: 35.11, yPercent: 38.82 },
    { id: "CELAR", xPercent: 25.11, yPercent: 45.98 },
    { id: "SHELL", xPercent: 33.94, yPercent: 11.52 },
    { id: "NIKON", xPercent: 44.77, yPercent: 10.18 },
    { id: "CHILY", xPercent: 56.61, yPercent: 11.18 },
    { id: "SHIBA", xPercent: 40.27, yPercent: 13.35 },
    { id: "LETSE", xPercent: 50.11, yPercent: 15.35 },
    { id: "HONDA", xPercent: 58.77, yPercent: 15.52 },
    { id: "ASTRO", xPercent: 42.11, yPercent: 18.85 },
    { id: "GULEG", xPercent: 37.11, yPercent: 22.52 },
    { id: "PIPER", xPercent: 43.77, yPercent: 23.02 },
    { id: "ONDER", xPercent: 49.44, yPercent: 24.68 },
    { id: "KNIFE", xPercent: 54.61, yPercent: 23.35 },
    { id: "TUDEP", xPercent: 41.61, yPercent: 28.35 },
    { id: "ALLRY", xPercent: 58.61, yPercent: 28.18 },
    { id: "CRAZY", xPercent: 67.70, yPercent: 15.32 },
    { id: "WOTAN", xPercent: 79.70, yPercent: 16.65 },
    { id: "WAGON", xPercent: 87.03, yPercent: 18.98 },
    { id: "WELLS", xPercent: 72.53, yPercent: 21.82 },
    { id: "SQUID", xPercent: 81.36, yPercent: 22.48 },
    { id: "ZESTA", xPercent: 89.03, yPercent: 24.32 },
    { id: "TINDR", xPercent: 61.53, yPercent: 24.98 },
    { id: "NOONU", xPercent: 76.03, yPercent: 27.82 },
    { id: "KELLA", xPercent: 80.03, yPercent: 27.82 },
    { id: "STRAX", xPercent: 63.20, yPercent: 28.82 },
    { id: "TALIS", xPercent: 73.36, yPercent: 33.15 },
    { id: "SISTA", xPercent: 78.36, yPercent: 32.48 },
    { id: "GERLD", xPercent: 41.53, yPercent: 30.32 },
    { id: "RENDR", xPercent: 44.53, yPercent: 30.98 },
    { id: "JOOPY", xPercent: 51.86, yPercent: 30.48 },
    { id: "PROBE", xPercent: 47.70, yPercent: 34.32 },
    { id: "DINER", xPercent: 56.53, yPercent: 34.48 },
    { id: "WELSH", xPercent: 44.53, yPercent: 38.65 },
    { id: "INDEX", xPercent: 48.70, yPercent: 41.65 },
    { id: "GAVIN", xPercent: 58.36, yPercent: 43.32 },
    { id: "OCEEN", xPercent: 62.20, yPercent: 46.32 },
    { id: "SILVA", xPercent: 66.70, yPercent: 43.48 },
    { id: "ANYMS", xPercent: 64.86, yPercent: 56.32 },
    { id: "CAWZE", xPercent: 68.20, yPercent: 48.15 },
    { id: "CAMEL", xPercent: 70.03, yPercent: 37.15 },
    { id: "DUNKS", xPercent: 75.53, yPercent: 37.65 },
    { id: "ROSMO", xPercent: 84.03, yPercent: 34.98 },
    { id: "UDMUG", xPercent: 92.36, yPercent: 31.48 },
    { id: "CYRIL", xPercent: 74.36, yPercent: 42.48 },
    { id: "LLIME", xPercent: 94.70, yPercent: 35.82 },
    { id: "DOGGO", xPercent: 81.20, yPercent: 47.82 },
    { id: "MORRD", xPercent: 92.20, yPercent: 40.65 },
    { id: "JUSTY", xPercent: 82.86, yPercent: 54.48 },
    { id: "BILLO", xPercent: 89.70, yPercent: 50.48 },
    { id: "ABSRS", xPercent: 95.70, yPercent: 47.48 },
    { id: "CHAIN", xPercent: 95.70, yPercent: 56.65 },
    { id: "FORIA", xPercent: 58.53, yPercent: 74.15 },
    { id: "AQWRT", xPercent: 65.36, yPercent: 69.98 },
    { id: "GRASS", xPercent: 67.53, yPercent: 61.82 },
    { id: "RENTS", xPercent: 73.36, yPercent: 58.98 },
    { id: "JACKI",  xPercent: 79.70, yPercent: 64.65 },
    { id: "BOBUX", xPercent: 84.03, yPercent: 69.15 },
    { id: "DEBUG", xPercent: 89.70, yPercent: 64.65 },
    { id: "NUBER", xPercent: 95.70, yPercent: 70.48 },
    { id: "JAZZR", xPercent: 89.36, yPercent: 74.32 },
    { id: "MUONE", xPercent: 83.20, yPercent: 74.32 },
];

const vors = [
    { id: "BAR",  xPercent: 24.36, yPercent: 65.39 },
    { id: "KRT",  xPercent: 14.53, yPercent: 61.06 },
    { id: "GOL",  xPercent: 16.70, yPercent: 40.39 },
    { id: "HAW",  xPercent: 23.20, yPercent: 37.39 },
    { id: "COC",  xPercent: 65.53, yPercent: 21.23 },
    { id: "BTM",  xPercent: 72.20, yPercent: 26.89 },
    { id: "ORG",  xPercent: 68.20, yPercent: 30.56 },
    { id: "TRE",  xPercent: 80.53, yPercent: 42.73 },
    { id: "DIZ",  xPercent: 91.03, yPercent: 45.73 },
    { id: "DET",  xPercent: 89.36, yPercent: 56.06 },
    { id: "KIN",  xPercent: 76.36, yPercent: 63.39 },
    { id: "HUT",  xPercent: 76.20, yPercent: 72.39 },
    { id: "DIR",  xPercent: 63.36, yPercent: 76.06 },
    { id: "CAN",  xPercent: 61.03, yPercent: 72.23 },
    { id: "VOX",  xPercent: 62.53, yPercent: 38.89 },
    { id: "ROM",  xPercent: 60.03, yPercent: 33.89 },
    { id: "RES",  xPercent: 53.36, yPercent: 39.23 },
    { id: "CLR", xPercent: 68.36, yPercent: 53.74 },
    { id: "DEL", xPercent: 75.20, yPercent: 50.74 },
]

const mapAirports = [
    { id: "IRFD", xPercent: 50.33, yPercent: 57.59 }, // Greater Rockford
    { id: "IPPH", xPercent: 66.33, yPercent: 27.25 }, // Perth Intl.
    { id: "IZOL", xPercent: 84.67, yPercent: 44.25 }, // Izolirani Intl.
    { id: "ITKO", xPercent: 47.00, yPercent: 17.25 }, // Tokyo Intl.
    { id: "ILAR", xPercent: 70.67, yPercent: 65.92 }, // Larnaca Intl.
    { id: "IIAB", xPercent: 71.50, yPercent: 72.79 }, // McConnell AFB
    { id: "IPAP", xPercent: 77.17, yPercent: 67.62 }, // Paphos Intl.
    { id: "IGRV", xPercent: 20.67, yPercent: 39.95 }, // Grindavik
    { id: "IDCS", xPercent: 48.17, yPercent: 8.79 }, // Saba Airport
    { id: "ILKL", xPercent: 70.50, yPercent: 28.29 }, // Lukla Airport
    { id: "IGAR", xPercent: 39.67, yPercent: 60.79 }, // Air Base Garry
    { id: "IBLT", xPercent: 43.83, yPercent: 53.45 }, // Boltic Airfield
    { id: "IMLR", xPercent: 38.67, yPercent: 52.92 }, // Mellor Intl.
    { id: "ITRC", xPercent: 51.83, yPercent: 64.95 }, // Training Centre
    { id: "IBTH", xPercent: 57.83, yPercent: 39.09 }, // Saint Barthélemy
    { id: "IHEN", xPercent: 65.17, yPercent: 73.45 }, // Henstridge Airfield
    { id: "IBAR", xPercent: 74.00, yPercent: 71.29 }, // Barra Airport
    { id: "ISCM", xPercent: 81.00, yPercent: 38.12 }, // RAF Scampton
    { id: "ISAU", xPercent: 18.17, yPercent: 62.28 }, // Sauthamptona Airport
    { id: "ISKP", xPercent: 72.83, yPercent: 51.45 }, // Skopelos Airfield
    { id: "IJAF", xPercent: 87.67, yPercent: 41.62 }, // Al Najaf
];


const form = document.getElementById("flight-form");
const generateBtn = document.getElementById("generate-flight-plan");
const resultsDiv = document.getElementById("results");

const autofillPromptDiv = document.getElementById("autofill-prompt");
const ingameCallsignInput = document.getElementById("ingame-callsign");
const callsignInput = document.getElementById("callsign");

// Mapping of in-game callsign prefixes/full to actual callsigns
const callsignMapping = {
    "Aer Dingus": "Aer Lingus",
    "Aeroflat": "Aeroflot",
    "Air Canadian": "Air Canada",
    "AirBalistic": "Air Baltic",
    "Air French": "Air France",
    "Air Old Zealand": "Air New Zealand",
    "Americano Airlines": "American Airlines",
    "Antonov Airlines": "Antonov Airlines",
    "Azol": "Azul Brazilian Airlines",
    "Belta": "Delta",
    "Bepsi": "Air France",
    "Beti Airlines": "Yeti Airlines",
    "Bizz Air": "Wizz Air",
    "Bliss Airlines": "Swiss Airlines",
    "Britain Airways": "British Airways",
    "Byanair": "Ryanair",
    "Cafe Pacific": "Cathay Pacific",
    "Cedu Pacific": "Cebu Pacific",
    "Dan Am": "Pan Am",
    "Doncor": "Condor",
    "Emarates": "Emirates",
    "Flybee": "Flybe",
    "Hardjet": "EasyJet",
    "Ideria": "Iberia",
    "Jetbloo": "Jetblue",
    "Jet3": "Jet2",
    "KLN": "KLM",
    "Koreen Air": "Korean Air",
    "Koreen Air Cargo": "Korean Air Cargo",
    "KOT": "LOT Polish Airways",
    "Lifthansa": "Lufthansa",
    "Lui": "TUI",
    "Northeast": "Southwest",
    "Oantas": "Qantas",
    "Oatar": "Qatari",
    "Reunited Airlines": "United",
    "Scandialian Airlines": "Scandinavian Airlines",
    "Singadoor Airlines": "Singapore Airlines",
    "Sprit": "Spirit Wings",
    "SUS": "UPS",
    "TedEx": "FedEx",
    "Thay Airways": "Thai",
    "Turkey Airlines": "Turkish",
    "VHL": "DHL"
};

let currentSuggestedCallsign = "";

// Function to detect airline from in-game callsign input (case-insensitive)
function detectCallsign(ingameCallsign) {
    const lowerInput = ingameCallsign.toLowerCase();
    for (const [key, value] of Object.entries(callsignMapping)) {
        if (lowerInput.startsWith(key.toLowerCase())) {
            return value;
        }
    }
    return null;
}

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to show autofill prompt
function showAutofillPrompt(suggestedCallsign) {
    autofillPromptDiv.innerHTML = `
        Autofill? <strong>${suggestedCallsign}</strong> 
        <button id="autofill-yes">Yes</button> 
        <button id="autofill-no">No</button>
    `;

    document.getElementById("autofill-yes").addEventListener("click", () => {
        // Replace the in-game callsign part with the suggested callsign in callsign input
        const ingameValue = ingameCallsignInput.value;
        let newCallsign = ingameValue;
        for (const key of Object.keys(callsignMapping)) {
            if (ingameValue.toLowerCase().startsWith(key.toLowerCase())) {
                newCallsign = toTitleCase(suggestedCallsign) + ingameValue.substring(key.length);
                break;
            }
        }
        callsignInput.value = newCallsign;
        autofillPromptDiv.innerHTML = "";
    });

    document.getElementById("autofill-no").addEventListener("click", () => {
        autofillPromptDiv.innerHTML = "";
    });
}

// Event listener on ingame callsign input to detect airline and show prompt
ingameCallsignInput.addEventListener("blur", () => {
    const ingameValue = ingameCallsignInput.value.trim();
    if (!ingameValue) {
        autofillPromptDiv.innerHTML = "";
        return;
    }
    const suggested = detectCallsign(ingameValue);
    if (suggested) {
        currentSuggestedCallsign = suggested;
        showAutofillPrompt(suggested);
    } else {
        autofillPromptDiv.innerHTML = "";
    }
});

let flightRules = "VFR"; // Default

// Handle VFR/IFR buttons
const flightPlanTypeDiv = document.getElementById("flight-plan-type");

const vfrButton = document.getElementById("vfrButton");
const ifrButton = document.getElementById("ifrButton");

function updateFlightRuleSelection(selectedRule) {
    flightRules = selectedRule;
    if (selectedRule === "VFR") {
        vfrButton.classList.add("selected");
        ifrButton.classList.remove("selected");
    } else if (selectedRule === "IFR") {
        ifrButton.classList.add("selected");
        vfrButton.classList.remove("selected");
    }
}

// Initialize default selection
updateFlightRuleSelection("IFR");

vfrButton.addEventListener("click", () => {
    updateFlightRuleSelection("VFR");
});

ifrButton.addEventListener("click", () => {
    updateFlightRuleSelection("IFR");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const aircraft = document.getElementById("aircraft").value.toUpperCase();
    let callsignInputValue = document.getElementById("callsign").value;
    let ingameCallsignInputValue = document.getElementById("ingame-callsign").value;
    const departure = document.getElementById("departure").value.toUpperCase();
    const arrival = document.getElementById("arrival").value.toUpperCase();
    const flightLevel = document.getElementById("flight-level").value.toUpperCase() || "N/A";
    const route = document.getElementById("route").value.toUpperCase() || "DIRECT";

    // Validate ICAOs
    const departureAirport = airports.find(a => a.icao === departure);
    const arrivalAirport = airports.find(a => a.icao === arrival);

    if (!departureAirport || !arrivalAirport) {
        resultsDiv.innerHTML = `<p style="color:red;">Nuh Uh. Invalid ICAO code. Please try again.</p>`;
        return;
    }

    // Function to get canonical callsign capitalization from callsignMapping
    // Function to get canonical callsign value from callsignMapping
    function getCanonicalCallsign(input) {
        for (const [key, value] of Object.entries(callsignMapping)) {
            if (input.toLowerCase().startsWith(key.toLowerCase())) {
                return value + input.substring(key.length);
            }
        }
        return input;
    }

    // Function to get ingame callsign key from callsignMapping
    function getIngameCallsign(input) {
        for (const key of Object.keys(callsignMapping)) {
            if (input.toLowerCase().startsWith(key.toLowerCase())) {
                return key + input.substring(key.length);
            }
        }
        return input;
    }
 
    // Get canonical callsign for callsign input
    const callsign = getCanonicalCallsign(callsignInputValue);
    // Get ingame callsign key for ingameCallsign input
    const ingameCallsign = getIngameCallsign(ingameCallsignInputValue);

    // Build the Discord command including ingame callsign and callsign with canonical capitalization
    const discordMessage = `/createflightplan ingamecallsign:${ingameCallsign} callsign:${callsign} aircraft:${aircraft} flightrules:${flightRules} departing:${departureAirport.fullName} arriving:${arrivalAirport.fullName} flightlevel:${flightLevel} route:${route}`;

    // Mark flight as planned and update route line
    isFlightPlanned = true;
    drawRouteLine(false); // Draw solid line for planned flight
    
    // Create formatted notes text including ingame callsign and callsign
    const formattedNotes = `${ingameCallsign}/${callsign} | ${aircraft}
-------------------------

FLPN TYPE: ${flightRules}

ROUTE: ${departure} → ${route} → ${arrival}
`;

    // Display results with copy buttons including ingame callsign
    resultsDiv.innerHTML = `
        <p><strong>In Game Callsign:</strong> ${ingameCallsign}</p>
        <p><strong>Callsign:</strong> ${callsign}</p>
        <p><strong>Aircraft:</strong> ${aircraft}</p>
        <p><strong>Flight Rules:</strong> ${flightRules}</p>
        <p><strong>Flight Level:</strong> ${flightLevel}</p>
        <p><strong>Route:</strong> ${departure} → ${route} → ${arrival}</p>
        <div style="margin-top: 10px; display: flex; align-items: center; gap: 10px;">
            <button id="copy-notes">Copy formatted for notes</button>
            <span id="copy-side-text-notes" style="font-size: 0.9em; color: green;"></span>
            <button id="copy-discord">Copy formatted for Discord</button>
            <span id="copy-side-text" style="font-size: 0.9em; color: green;"></span>
        </div>
    `;


    // Add click handler for the notes copy button
    document.getElementById("copy-notes").addEventListener("click", () => {
        navigator.clipboard.writeText(formattedNotes).then(() => {
            const btn = document.getElementById("copy-notes");
            const originalText = btn.textContent;
            btn.textContent = "Copied!";
            
            // Get the side text element
            const sideText = document.getElementById("copy-side-text-notes");
            sideText.textContent = "You can now copy this into your note app of choice!";
            
            setTimeout(() => {
                sideText.textContent = "";
                if (btn.textContent === "Copied!") {
                    btn.textContent = originalText;
                }
            }, 5000);
        });
    });

    // Add click handler for the Discord copy button
    document.getElementById("copy-discord").addEventListener("click", () => {
        navigator.clipboard.writeText(discordMessage).then(() => {
            const btn = document.getElementById("copy-discord");
            btn.textContent = "Copied!";
            // Get the side text element
            const sideText = document.getElementById("copy-side-text");
            sideText.textContent = "You may paste your flight directly into #flight-plans!";
            setTimeout(() => {
                sideText.textContent = "";
                if (btn.textContent === "Copied!") {
                    btn.textContent = "Copy formatted for Discord";
                }
            }, 5000);
        });
    });
});

generateBtn.addEventListener("click", () => {
    // Generate 2–4 random waypoints
    let randomRoute = [];
    for (let i = 0; i < 3; i++) {
        randomRoute.push(waypoints[Math.floor(Math.random() * waypoints.length)]);
    }
    document.getElementById("route").value = randomRoute.map(wp => wp.id).join(" ");
});

document.getElementById("auto-fill-form").addEventListener("click", () => {
    document.getElementById("callsign").value = "JBU1234";
    document.getElementById("aircraft").value = "A320";
    document.getElementById("departure").value = "IRFD";
    document.getElementById("arrival").value = "IPPH";
    document.getElementById("route").value = "HONDA";
    flightRules = "VFR";
    const flightPlanTypeDiv = document.getElementById("flight-plan-type");
    flightPlanTypeDiv.textContent = "You Have Chosen: VFR";
    renderWaypoints();
    drawRouteLine(); // Added to draw the flight plan line after autofill
});

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
        // Find waypoint or airport by id
        let wp = waypoints.find(w => w.id === id);
        if (!wp) {
            wp = mapAirports.find(a => a.id === id);
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

// Removed duplicate form submission handler - using the one at the top of the file

// Initial render of waypoints on page load
window.addEventListener("load", () => {
    renderWaypoints();
    drawRouteLine(isFlightPlanned ? false : true);
});

// Re-render waypoints on window resize to maintain positions
window.addEventListener("resize", () => {
    renderWaypoints();
    drawRouteLine(isFlightPlanned ? false : true);
});

// Update route line when route input changes
document.getElementById("route").addEventListener("input", () => {
    if (isFlightPlanned) {
        isFlightPlanned = false;
    }
    drawRouteLine(true);
});

document.getElementById("aircraft").addEventListener("input", () => {
    if (isFlightPlanned) {
        isFlightPlanned = false;
    }
    drawRouteLine(true);
});

// Removed flight-number event listener as it's no longer needed

document.getElementById("departure").addEventListener("input", () => {
    if (isFlightPlanned) {
        isFlightPlanned = false;
    }
    drawRouteLine(true);
});

document.getElementById("arrival").addEventListener("input", () => {
    if (isFlightPlanned) {
        isFlightPlanned = false;
    }
    drawRouteLine(true);
});

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

// Function to generate random waypoints
function generateRouteWaypoints(departureIcao, arrivalIcao, count) {
    // Filter out departure and arrival airports from waypoints
    const availableWaypoints = waypoints.filter(wp => 
        wp.id !== departureIcao && wp.id !== arrivalIcao
    );
    
    // If no waypoints available, return empty array
    if (availableWaypoints.length === 0) {
        console.log("No waypoints available");
        return [];
    }
    
    // Select random waypoints
    const selectedWaypoints = [];
    const maxAttempts = 100;
    let attempts = 0;
    
    while (selectedWaypoints.length < count && attempts < maxAttempts) {
        attempts++;
        const randomIndex = Math.floor(Math.random() * availableWaypoints.length);
        const waypoint = availableWaypoints[randomIndex];
        
        // Make sure we don't add duplicates
        if (!selectedWaypoints.some(wp => wp.id === waypoint.id)) {
            selectedWaypoints.push(waypoint);
        }
    }
    
    // Return just the waypoint IDs
    return selectedWaypoints.map(wp => wp.id);
}

// Update route generation to use the new function
generateBtn.addEventListener("click", () => {
    const waypointCount = parseInt(document.getElementById("waypoint-count").value) || 3;
    const departure = document.getElementById("departure").value.trim().toUpperCase();
    const arrival = document.getElementById("arrival").value.trim().toUpperCase();
    
    // Validate we have both departure and arrival
    if (!departure || !arrival) {
        alert("Please enter both departure and arrival airports first");
        return;
    }
    
    try {
        // Try to generate a route with waypoints along the path
        const routeWaypoints = generateRouteWaypoints(departure, arrival, waypointCount);
        
        // Fallback to random waypoints if we couldn't find enough
        if (routeWaypoints.length === 0) {
            const randomWaypoints = [];
            for (let i = 0; i < waypointCount; i++) {
                randomWaypoints.push(waypoints[Math.floor(Math.random() * waypoints.length)].id);
            }
            document.getElementById("route").value = randomWaypoints.join(" ");
        } else {
            document.getElementById("route").value = routeWaypoints.join(" ");
        }
        
        // Reset flight planned status and redraw the route line
        isFlightPlanned = false;
        drawRouteLine(true);
        
        // Trigger input event to update the route display
        document.getElementById("route").dispatchEvent(new Event('input'));
    } catch (error) {
        console.error("Error generating route:", error);
        alert("Error generating route. Please try again.");
    }
});

// Initial render of waypoints on page load
window.addEventListener("load", () => {
    renderWaypoints();
    drawRouteLine(isFlightPlanned ? false : true);
});

// Re-render waypoints on window resize to maintain positions
window.addEventListener("resize", () => {
    renderWaypoints();
    drawRouteLine(isFlightPlanned ? false : true);
});

// Update route line when route input changes
document.getElementById("route").addEventListener("input", () => {
drawRouteLine(isFlightPlanned ? false : true);
});

// Reset form button functionality
document.getElementById("reset-form").addEventListener("click", (e) => {
    e.preventDefault();
    
    // Show confirmation modal
    showModal("Are you sure you want to reset the flight plan? This will clear all fields and reset the map.", () => {
        // Reset the form
        document.getElementById("flight-form").reset();
        
        // Clear specific fields that might not be reset by the form reset
        document.getElementById("flight-plan-type").textContent = "";
        document.getElementById("autofill-prompt").textContent = "";
        
        // Reset the results display
        document.getElementById("results").innerHTML = `
            <p style="text-align: center;">Your flight plan will be displayed here after you submit it.</p>
            <p>Make sure you have entered <span style="font-weight: bold;">valid callsigns</span>. If not, you could get in trouble if you copy paste!</p>
        `;
        
        // Clear only user-added elements (route lines and waypoint texts)
        const waypointTexts = document.querySelectorAll(".icao-text");
        waypointTexts.forEach(text => text.remove());
        
        // Clear the route line
        const svg = document.getElementById("route-line-svg");
        if (svg) {
            svg.innerHTML = '';
        }
        
        // Re-render the waypoints to restore them
        renderWaypoints();
        
        // Reset flight plan state
        flightRules = "";
        isFlightPlanned = false;
        
        // Clear any waypoint texts
        const existingTexts = document.querySelectorAll(".icao-text");
        existingTexts.forEach(text => text.remove());
        
        // Redraw the route line as dotted
        drawRouteLine(true);
        
        console.log("Flight plan has been reset");
    });
});

// Update route line after generating a random route

// Function to show a modal popup
function showModal(message, onConfirm = null) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.backgroundColor = '#f0f0f0';
    modal.style.padding = '20px';
    modal.style.borderRadius = '5px';
    modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    modal.style.maxWidth = '80%';
    modal.style.textAlign = 'center';
    
    // Add message with line break if it contains 'Please use', otherwise just use the message as is
    const messageElement = document.createElement('p');
    if (message.includes('Please use')) {
        const [firstLine, secondLine] = message.split(' Please use');
        messageElement.innerHTML = `${firstLine}<br>Please use${secondLine}`;
    } else {
        messageElement.textContent = message;
    }
    messageElement.style.margin = '0 0 15px 0';
    
    // Add message element to modal
    modal.appendChild(messageElement);
    
    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    
    // Add close button (Cancel/Close)
    const closeButton = document.createElement('button');
    closeButton.textContent = onConfirm ? 'Cancel' : 'Close';
    closeButton.style.margin = '0 5px';
    closeButton.style.cursor = 'pointer';
    
    // If there's a confirmation callback, add an OK button
    if (onConfirm) {
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.margin = '0 5px';
        okButton.style.cursor = 'pointer';
        okButton.onclick = () => {
            closeModal();
            onConfirm();
        };
        buttonContainer.appendChild(okButton);
    }
    
    // Add close button to container
    buttonContainer.appendChild(closeButton);
    
    // Add buttons to modal
    modal.appendChild(buttonContainer);
    
    // Add modal to overlay
    overlay.appendChild(modal);
    
    // Add to document
    document.body.appendChild(overlay);
    
    // Focus the first button for better keyboard navigation
    if (onConfirm) {
        modal.querySelector('button').focus();
    } else {
        closeButton.focus();
    }
    
    // Close functionality
    function closeModal() {
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
    }
    
    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    };
    
    // Close on cancel button click
    closeButton.onclick = closeModal;
    
    // Close on overlay click
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    };
    
    // Close on Escape key
    document.addEventListener('keydown', function onKeyDown(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', onKeyDown);
        }
    });
}

// Add click handler for chart viewer button
document.addEventListener('DOMContentLoaded', () => {
    const chartViewerBtn = document.querySelector('a[aria-label="Sheep\'s Janky Chart Viewer"]');
    if (chartViewerBtn) {
        chartViewerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal("Sheep's Janky Chart Viewer is still in development! Please use 24Charts linked at the bottom for your convenience.");
        });
    }
    
    // Add click handler for clear waypoints button
    const clearWaypointsBtn = document.getElementById('clear-waypoints');
    if (clearWaypointsBtn) {
        clearWaypointsBtn.addEventListener('click', () => {
            // Remove all ICAO text elements (same as ALT+W functionality)
            const existingTexts = document.querySelectorAll(".icao-text");
            existingTexts.forEach(text => text.remove());
        });
    }
});
