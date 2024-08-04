const { NinjaAPI } = require("poe-api-manager");

const ninjaAPI = new NinjaAPI("Settlers");

const fetchHeadhunterPrice = async () => {
  try {
    const uniqueAccessories = await ninjaAPI.itemView.uniqueAccessory.getData();
    const headhunter = uniqueAccessories.find(item => item.name === "Headhunter");

    if (headhunter) {
      console.log(`Headhunter Price in Divine :`, headhunter.divineValue);
    } else {
      console.log("Headhunter item not found.");
    }
  } catch (error) {
    console.error("Error fetching Headhunter data:", error);
  }
};

fetchHeadhunterPrice();
