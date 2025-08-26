const CHART_TYPES = {
    AERONAV_CHARTS: 'aeronavcharts',
    CHARTS_24: '24charts',
    QUICK_CHARTS: 'quickcharts',
    DIRECT_URLS: 'direct-urls',
};

// Chart links data
const chartLinks = {
    "IGAR": "https://charts.awdevsoftware.org/#375",
    "IJAF": "https://charts.awdevsoftware.org/#288",
    "IBAR": "https://charts.awdevsoftware.org/#226",
    "IBLT": "https://charts.awdevsoftware.org/#384",
    "IRFD": "https://charts.awdevsoftware.org/#355",
    "IGRV": "https://charts.awdevsoftware.org/#233",
    "IHEN": "https://charts.awdevsoftware.org/#244",
    "IZOL": "https://charts.awdevsoftware.org/#249",
    "ILAR": "https://charts.awdevsoftware.org/#157",
    "ILKL": "https://charts.awdevsoftware.org/#269",
    "IIAB": "https://charts.awdevsoftware.org/#123",
    "IMLR": "https://charts.awdevsoftware.org/#385",
    "IPAP": "https://charts.awdevsoftware.org/#69",
    "IPPH": "https://charts.awdevsoftware.org/#104",
    "ISCM": "https://charts.awdevsoftware.org/#382",
    "IDCS": "https://charts.awdevsoftware.org/#284",
    "IBTH": "https://charts.awdevsoftware.org/#37",
    "ISAU": "https://charts.awdevsoftware.org/#192",
    "ISKP": "https://charts.awdevsoftware.org/#330",
    "ITKO": "https://charts.awdevsoftware.org/#0",
    "ITRC": "https://charts.awdevsoftware.org/#393"
};

// Function to update chart links with error handling
function updateChartLinks(departureIcao, arrivalIcao, chartType = CHART_TYPES.CHARTS_24) {
    const chartResults = document.getElementById('chart-results');
    
    if (!departureIcao || !arrivalIcao) {
        chartResults.innerHTML = '<p>Chart links will be displayed here after a flight plan is made.</p>';
        return;
    }
    
    const twentyFourChartsUrl = 'https://charts.awdevsoftware.org/';
    
    // Function to check if a URL is accessible
    const checkUrlAvailability = async (url) => {
        try {
            const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
            // If we get here, the request was successful (even with CORS)
            return true;
        } catch (error) {
            // If there's an error (network issue, CORS, etc.), consider it unavailable
            return false;
        }
    };
    
    // Function to create chart link with error handling
    const createChartLink = async (icao, type) => {
        const url = chartLinks[icao] || twentyFourChartsUrl;
        const isAvailable = await checkUrlAvailability(url);
        
        if (isAvailable) {
            return `
                <p>Charts for ${type} airport (${icao}): 
                    <a href="${url}" target="_blank" class="chart-link" data-icao="${icao}">${url}</a>
                </p>
            `;
        } else {
            return `
                <p class="chart-error">
                    Oops! I couldn't load the chart for ${type} airport (${icao}). 
                    <a href="${twentyFourChartsUrl}" target="_blank" class="fallback-link">Try 24Charts directly</a>
                </p>
            `;
        }
    };
    
    
    // Handle different chart types
    switch(chartType) {
        case CHART_TYPES.CHARTS_24:
            // Show loading message
            chartResults.innerHTML = '<p class="loading-message">Fetching chart links! Standby...</p>';

            // Check both links and update the UI for 24Charts
            Promise.all([
                createChartLink(departureIcao, 'departure'),
                createChartLink(arrivalIcao, 'arrival')
            ]).then(([departureHtml, arrivalHtml]) => {
                chartResults.innerHTML = `
                    ${departureHtml}
                    <br>
                    ${arrivalHtml}
                    <br>
                    <p>Couldn't find your preferred chart pack? Go directly to 24charts and choose your own: 
                        <a href="${twentyFourChartsUrl}" target="_blank" class="fallback-link">${twentyFourChartsUrl}</a>
                    </p>
                `;
            }).catch(error => {
                console.error('Error loading chart links:', error);
                showChartError(twentyFourChartsUrl);
            });
            break;
            
        case CHART_TYPES.QUICK_CHARTS:
            // Placeholder for QuickCharts
            chartResults.innerHTML = `
                <p>For 24QuickCharts, please visit: <a href="https://atc24resources.github.io/24QuickCharts/" target="_blank">https://atc24resources.github.io/24QuickCharts/</a></p>
                <br>
                <p>Once there, please select the chart packs you want to use for ${departureIcao} and ${arrivalIcao}.</p>
            `;
            break;
            
        case CHART_TYPES.DIRECT_URLS:
            // Placeholder for Direct URLs
            chartResults.innerHTML = `
                <p>Specific Chart URL's will be added in v1.2.0!</p>
            `;
            break;

        case CHART_TYPES.AERONAV_CHARTS:
            // Placeholder for Aeronav Charts
            chartResults.innerHTML = `
                <p>Charts from Aeronav will be added soon!</p>
            `;
            break;
    }
}

// Helper function to show chart error
function showChartError(twentyFourChartsUrl) {
    const chartResults = document.getElementById("chart-results");
    chartResults.innerHTML = `
        <p class="chart-error">
            Oops! I couldn't load the chart links. Please try again later or visit 
            <a href="${twentyFourChartsUrl}" target="_blank" class="fallback-link">24Charts</a> directly.
        </p>
    `;
}
