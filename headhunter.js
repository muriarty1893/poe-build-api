const { NinjaAPI } = require("poe-api-manager");

const ninjaAPI = new NinjaAPI("Settlers");

const iname = "Headhunter";

const fetchItemPrice = async () => {
  try {
    const uniqueAccessories = await ninjaAPI.itemView.uniqueAccessory.getData();
    const unqiueAccessoryItemrn = uniqueAccessories.find(item => item.name === iname);

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
