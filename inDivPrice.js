const { NinjaAPI, WatchAPI } = require("poe-api-manager");
const ninjaAPI = new NinjaAPI("Settlers"); // League name
const watchAPI = new WatchAPI("Settlers");

const requestedProperties = ["id", "name", "divineValue", "explicitModifiers"];

const iname = "Mageblood"; // case sensitive item name !

const fetchItemPrice = async () => {

  const theItem = await ninjaAPI.itemView.uniqueAccessory.getData(requestedProperties);
  const itemOut = theItem.find(item => item.name === iname);
  
  if (itemOut) {
    console.log("poe.ninja Currency Data:", itemOut);
  } else {
    console.log(iname, "not found.");
  }
  
};

fetchItemPrice();
