const { NinjaAPI } = require("poe-api-manager");
const ninjaAPI = new NinjaAPI("Settlers");
const requestedProperties = ["id", "name", "icon"];

const iname = "Mageblood"; // case sensitive !

const fetchItemPrice = async () => {
  try {
    const uniqueAccessories = await ninjaAPI.itemView.uniqueAccessory.getData();
    const unqiueAccessoryItemrn = uniqueAccessories.find(item => item.name === iname);
    
    const currencyData = await ninjaAPI.itemView.uniqueAccessory.getData(requestedProperties);
    console.log("poe.ninja Currency Data:", currencyData);
    
    if (unqiueAccessoryItemrn) {
      console.log(iname ,`Price in Divine :`, unqiueAccessoryItemrn.divineValue); 
    } else {
      console.log(iname, "item not found.");
    }
  } catch (error) {
    console.error("Error fetching", iname, "data:", error);
  }
};

fetchItemPrice();
