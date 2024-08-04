const { NinjaAPI } = require("poe-api-manager");

const ninjaAPI = new NinjaAPI("Settlers");

const fetchHeadhunterPrice = async () => {
  try {
    // Unique Accessories verilerini al
    const uniqueAccessories = await ninjaAPI.itemView.uniqueAccessory.getData();
    
    // "Headhunter" item'ini bul
    const headhunter = uniqueAccessories.find(item => item.name === "Headhunter");

    if (headhunter) {
      console.log(`Headhunter item found:`, headhunter);
      console.log(`Headhunter Price in Chaos:`, headhunter.chaosEquivalent);
    } else {
      console.log("Headhunter item not found.");
    }
  } catch (error) {
    console.error("Error fetching Headhunter data:", error);
  }
};

// Headhunter itemini arama
fetchHeadhunterPrice();
