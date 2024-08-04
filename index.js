const { NinjaAPI, WatchAPI } = require("poe-api-manager");

// NinjaAPI ve WatchAPI nesnelerini başlatın
const ninjaAPI = new NinjaAPI("Settlers");
const watchAPI = new WatchAPI("Settlers");

const requestedProperties = ["id", "name", "icon"];

const fetchData = async () => {
    try {
        // poe.ninja'dan Yağ (Oil) verilerini al
        //const oilData = await ninjaAPI.itemView.oil.getData(requestedProperties);
        //console.log("poe.ninja Oil Data:", oilData);

        // poe.ninja'dan Para Birimi (Currency) verilerini al
        const currencyData = await ninjaAPI.currencyView.currency.getData(requestedProperties);
        console.log("poe.ninja Currency Data:", currencyData);

        // poe.watch'tan Scarab verilerini al
        //const scarabData = await watchAPI.view.scarab.getData(requestedProperties);
        //console.log("poe.watch Scarab Data:", scarabData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Verileri al ve göster
fetchData();
