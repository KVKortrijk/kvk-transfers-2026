const transfers = [
    {
        direction: "incoming",
        category: "Bought",
        name: "Suf Podgoreanu",
        position: "LW / ST / RW",
        value: "€650k",
        fee: "Free Transfer",
        club: "Maccabi Haifa",
        image: "images/podgoreanu.png"
    },
 {
    direction: "incoming",
    category: "Bought",
    name: "Nayel Mehssatou",
    position: "CM / CDM / RB",
    value: "€1.5m",
    fee: "€300k",
    club: "Standard Liège",
    image: "images/nayel-mehssatou.png"
 },
    {
        direction: "incoming",
        category: "Bought",
        name: "Boris Lambert",
        position: "CDM / CB",
        value: "€800k",
        fee: "€475k (Loan Triggered)",
        club: "Willem II",
        image: "images/boris-lambert.png"
    },

    {
        direction: "incoming",
        category: "On Loan",
        name: "Ken Masui",
        position: "LM / CAM / RM",
        value: "€900k",
        fee: "Loan (Option to Buy: YES)",
        club: "Nagoya Grampus",
        image: "images/ken-masui.png"
    },

    {
        direction: "incoming",
        category: "On Loan",
        name: "Harrison Murray-Campbell",
        position: "CB / RB / LB",
        value: "€500k",
        fee: "Loan (Option to Buy: NO)",
        club: "Chelsea",
        image: "images/harrison-murray-campbell.png"
    },

    {
        direction: "incoming",
        category: "Extended",
        name: "Brecht Dejaegere",
        position: "CM / CDM / CAM",
        value: "€300k",
        fee: "Contract Extension (1 year)",
        club: "KV Kortrijk",
        image: "images/brecht-dejaegere.png"
    },

    {
        direction: "incoming",
        category: "Returning",
        name: "Mohamed Boussadia",
        position: "CAM / CM",
        value: "N/A",
        fee: "Returned from Loan",
        club: "R Knokke FC",
        image: "images/mohamed-boussadia.png"
    }
];
function createCard(player) {
    return `
    <div class="card">
        <img class="player-photo" src="${player.image}" alt="${player.name}">
        <div class="player-info">
            <h4>${player.name}</h4>
            <p>${player.position}</p>

            <div class="details">
                <div><strong>Market Value:</strong> ${player.value}</div>
                <div><strong>Fee:</strong> ${player.fee}</div>
                <div><strong>From:</strong> ${player.club}</div>
            </div>
        </div>
    </div>
    `;
}

function renderPlayers() {

    document.getElementById("incomingBought").innerHTML = "";
    document.getElementById("incomingLoan").innerHTML = "";
    document.getElementById("incomingExtended").innerHTML = "";
    document.getElementById("incomingReturn").innerHTML = "";

    document.getElementById("outgoingSold").innerHTML = "";
    document.getElementById("outgoingLoan").innerHTML = "";
    document.getElementById("outgoingReleased").innerHTML = "";

    const search = document.getElementById("search").value.toLowerCase();

    let incoming = 0;
    let outgoing = 0;

    transfers.forEach(player => {

        if (!player.name.toLowerCase().includes(search))
            return;

        let target = "";

        if (player.direction === "incoming") incoming++;
        if (player.direction === "outgoing") outgoing++;

        if (player.direction === "incoming" && player.category === "Bought")
            target = "incomingBought";

        if (player.direction === "incoming" && player.category === "On Loan")
            target = "incomingLoan";

        if (player.direction === "incoming" && player.category === "Extended")
            target = "incomingExtended";

        if (player.direction === "incoming" && player.category === "Returning")
            target = "incomingReturn";

        if (player.direction === "outgoing" && player.category === "Sold")
            target = "outgoingSold";

        if (player.direction === "outgoing" && player.category === "On Loan")
            target = "outgoingLoan";

        if (player.direction === "outgoing" && player.category === "Released")
            target = "outgoingReleased";

        if (target !== "") {
            document.getElementById(target).innerHTML += createCard(player);
        }
    });

    document.getElementById("incomingCount").textContent = incoming;
    document.getElementById("outgoingCount").textContent = outgoing;
}

document.getElementById("search").addEventListener("input", renderPlayers);

renderPlayers();
