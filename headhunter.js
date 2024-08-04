const { NinjaAPI } = require("poe-api-manager");

const ninjaAPI = new NinjaAPI("Settlers");

const iname = "headhunter";

const fetchHeadhunterPrice = async () => {
  try {
    const uniqueAccessories = await ninjaAPI.itemView.uniqueAccessory.getData();
    const headhunter = uniqueAccessories.find(item => item.name === "Headhunter");

    if (headhunter) {
      console.log(iname ,`Price in Divine :`, headhunter.divineValue);
    } else {
      console.log(iname, "item not found.");
    }
  } catch (error) {
    console.error("Error fetching", iname, "data:", error);
  }
};

fetchHeadhunterPrice();
