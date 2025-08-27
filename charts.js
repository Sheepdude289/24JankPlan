const CHART_TYPES = {
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

// Direct URL links per-airport (as provided)
const airportDirectLinks = {
    IRFD: {
        aeronav: "https://drive.google.com/file/d/1a8ZqQjxqUC99J5oSskeH6dmsBeDTRUb9/view",
        vfr_sectional: "https://drive.google.com/file/d/1CgVtu508WLQa-UVjiWa2vjEkYXQyG3Yk/view",
        formicacid: "https://drive.google.com/file/d/12rwTgSjcOXxvZ6z8o8y5GRV1lNnt-h4D/view",
        p1anes: "https://drive.google.com/file/d/1Qu4M2WDXUVdLJLYMPVIQVPQ9azsL5LVi/view",
        ezydubs_hayd3n_21_aerosd: "https://drive.google.com/file/d/1MOI1puAwf733QynAkhTGVuPrP-gbwz7m/view",
        aloha516: "https://drive.google.com/file/d/1r2VyXQZnF-cOM3LHbQLobU157fTRh3Kq/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/IRFD%20Ground%20Chart.png",
    },
    IMLR: {
        aeronav: "https://drive.google.com/file/d/1iJ-5He0OgX4FMW6Y32DRKr9rAh4hgQ4R/view",
        villethedude_willek10: "https://drive.google.com/file/d/1kFz3l__nWp8TIL9TpKmVKTpzjBUIWgj3/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/IMLR%20Ground%20Chart.png",
    },
    IGAR: {
        ptfs_ground: "https://ptfs.xyz/charts/light/IGAR%20Ground%20Chart.png",
    },
    IBLT: {
        ptfs_ground: "https://ptfs.xyz/charts/light/IBLT%20Ground%20Chart.png",
    },
    ITRC: {
        ptfs_ground: "https://ptfs.xyz/charts/light/ITRC%20Ground%20Chart.png",
    },
    ILAR: {
        // Note: Both ILAR and IZOL had similar contributor links in the list; included as provided.
        midwestavgeek: "https://drive.google.com/file/d/1bxKI8ZyCZFna3vlktUnJL2re54uo3X9s/view",
        majuki: "https://drive.google.com/file/d/1JS5B0PEggxT5-EffHOxGaY8VYFlHXAxO/view",
        aeronav: "https://drive.google.com/file/d/19gg9VmHTmyurm6rCwgjnBj2BenFUOBp1/view",
        villethedude_willek10: "https://drive.google.com/file/d/1KPS6iq3-vXsN82kY6UaPtz1rUqsSSK9M/view?is=664774ad&hm=234bba181453c4c44b46c39907d160346b1059c008072b8f10aacff292e3e982",
        aloha516: "https://docs.google.com/document/d/1Hat4-PSwd9L0tWKaofTEQH-egoJLw7pzvgCo2RHO0cE/edit?tab=t.0",
        ptfs_ground: "https://ptfs.xyz/charts/light/ILAR%20Ground%20Chart.png",
    },
    IPAP: {
        aeronav: "https://drive.google.com/file/d/1Ckwrvr93OBZxEfpSwTzc75ALkCmjqsqr/view",
        galaxyON: "https://drive.google.com/file/d/1XVRda5-v6RtOGDjbEZ5aCX8RjziF5G6V/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/IPAP%20Ground%20Chart.png",
    },
    IHEN: {
        ptfs_ground: "https://ptfs.xyz/charts/light/IHEN%20Ground%20Chart.png",
    },
    IBAR: {
        ptfs_ground: "https://ptfs.xyz/charts/light/IBAR%20Ground%20Chart.png",
    },
    IZOL: {
        midwestavgeek: "https://drive.google.com/file/d/1bxKI8ZyCZFna3vlktUnJL2re54uo3X9s/view",
        majuki: "https://drive.google.com/file/d/1JS5B0PEggxT5-EffHOxGaY8VYFlHXAxO/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/IZOL%20Ground%20Chart.png",
    },
    IJAF: {
        midwestavgeek: "https://docs.google.com/document/d/1AAVgOdVWRAq070j-ExKGqF0lbdd2R4lzb-O3G9ISoy4/edit?tab=t.0",
        ptfs_ground: "https://ptfs.xyz/charts/light/IJAF%20Ground%20Chart.png",
    },
    ISCM: {
        ptfs_ground: "https://ptfs.xyz/charts/light/ISCM%20Ground%20Chart.png",
    },
    ITKO: {
        aeronav: "https://drive.google.com/file/d/1iYxp9qz4f7C6o5DaMVQQufx9rInLcmJh/view",
        vfr_sectional: "https://drive.google.com/file/d/1yg0urxOYRm2goWV2Su5N89jrXz_0hDt7/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/ITKO%20Ground%20Chart.png",
    },
    IDCS: {
        ptfs_ground: "https://ptfs.xyz/charts/light/IDCS%20Ground%20Chart.png",
    },
    IPPH: {
        aeronav: "https://drive.google.com/file/d/1Qhg6zRsIBAjeC_iidsy39FVt5UZhdi5o/view",
        natto_ryseaviation_nikita39gamer: "https://docs.google.com/document/d/1sEOREpJL5TCAs7tejRn2Fm02Ai4IZV5uolC9cX65x3c/edit?tab=t.0",
        vfr_area: "https://drive.google.com/file/d/1kso74CWS0VoImrbpZukNEGJJTK8fwsHo/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/IPPH%20Ground%20Chart.png",
    },
    ILKL: {
        ptfs_ground: "https://ptfs.xyz/charts/light/ILKL%20Ground%20Chart.png",
    },
    IBTH: {
        aeronav: "https://drive.google.com/file/d/1OSWgKHBnu8ch3sP68erv8_nVcAFIY7CQ/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/IBTH%20Ground%20Chart.png",
    },
    ISKP: {
        tiaguinho_2009: "https://drive.google.com/file/d/1BEaoKLa9hvXCPPKdkc4IGa9Wc22OXr0s/view",
        tiaguinho_2009_vfr_sectional: "https://drive.google.com/file/d/1Qil75AR81swGrRluwlVPab1NFHauX1j4/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/ISKP%20Ground%20Chart.png",
    },
    IGRV: {
        aeronav: "https://drive.google.com/file/d/1G4M1CGxjXO688x-l7WBnD8UfhiLq2yrB/view",
        formicacid: "https://drive.google.com/file/d/1VtNssokJlCwTLjKG-ziQaa2thAEBj7x9/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/IGRV%20Ground%20Chart.png",
    },
    ISAU: {
        aeronav: "https://drive.google.com/file/d/1m18kxQhwlVMXoY4T8FSIHtmz_ohooGbI/view",
        isau_doc: "https://docs.google.com/document/d/1iRG8S9p2bq99rgnofHK6_r0jtJqgXc1bj13W0IaBSzc/edit?tab=t.0#heading=h.hev5tuk6ocb6",
        ptfs_vfr: "https://drive.google.com/file/d/1_FLT3Wdnu3b-gErjoSf_WNuZW5J5hhZL/view",
        ptfs_ground: "https://ptfs.xyz/charts/light/ISAU%20Ground%20Chart.png",
    },
};

function renderDirectLinksForIcao(icao, label) {
    const entries = airportDirectLinks[icao];
    if (!entries) return `<p>No direct links available for ${label} airport (${icao}).</p>`;
    const items = Object.entries(entries).map(([key, url]) => {
        return `<li><a href="${url}" target="_blank" rel="noopener" data-linkkey="${key}">${key.replace(/_/g,' ')}</a></li>`;
    }).join('');
    return `
        <div class="direct-links-group">
            <p>Direct links for ${label} airport (${icao}):</p>
            <ul>${items}</ul>
        </div>
    `;
}

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
            chartResults.innerHTML = [
                renderDirectLinksForIcao(departureIcao, 'departure'),
                '<br>',
                renderDirectLinksForIcao(arrivalIcao, 'arrival')
            ].join('');
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
