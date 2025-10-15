import mongoose from "mongoose";
import dotenv from "dotenv";
import Pizza from "./models/pizzaModel.js";
import Drink from "./models/drinkModel.js";
import Wrap from "./models/wrapModel.js";
import Special from "./models/specialModel.js";
import Upsell from "./models/upsellModel.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ MongoDB prijungta!");
  } catch (error) {
    console.error("❌ MongoDB prijungimo klaida:", error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await Pizza.deleteMany({});
    await Drink.deleteMany({});
    await Wrap.deleteMany({});
    await Special.deleteMany({});
    await Upsell.deleteMany({});

    const pizzas = [
      {
        name: "Margherita",
        description:
          "Klasikinė itališka pica su pomidorų padažu ir mocarela sūriu",
        price: 7.99,
        image:
          "https://img.freepik.com/free-photo/freshly-baked-margherita-pizza-with-mozzarella-cheese-basil-leaves_9975-124847.jpg?semt=ais_hybrid&w=740&q=80",
      },
      {
        name: "Pepperoni",
        description:
          "Pica su pomidorų padažu, mocarela ir pepperoni griežinėliais",
        price: 8.99,
        image:
          "https://www.nicepng.com/png/full/4-43553_free-png-pepperoni-pizza-png-images-transparent-pepperoni.png",
      },
      {
        name: "Mexicana",
        description:
          "Pica su jautiena, kukurūzais, pupelėmis, čili ir jalapeño",
        price: 9.49,
        image:
          "https://www.pngitem.com/pimgs/m/641-6417264_mexican-pizza-png-pepperoni-transparent-png.png",
      },
      {
        name: "Diablo",
        description: "Labai aštri pica su čili, jalapeño, peperoncini ir sūriu",
        price: 9.99,
        image:
          "https://t4.ftcdn.net/jpg/10/37/90/89/360_F_1037908928_mrp7EdSMmQBAW5k6EMwHKCdMWiTgxreL.jpg",
      },
      {
        name: "Mafia",
        description:
          "Itališka pica su kumpiu, grybais, alyvuogėmis ir pomidorais",
        price: 9.1,
        image:
          "https://troliupica.lt/sites/default/files/styles/large/public/productas_image/mafija_astri_pica.png?itok=AB9T5uhZf",
      },
      {
        name: "Cheese Lovers",
        description:
          "4 sūrių pica – mocarela, gorgonzola, parmezanas ir čederis",
        price: 8.79,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqKrUCkBrH8CIyrzr-T_4sPcJcHG5U_IrwKg&s",
      },
      {
        name: "Siracusa",
        description: "Pica su šonine, kiaušiniu, svogūnais ir pomidorų padažu",
        price: 9.29,
        image:
          "https://images.bolt.eu/store/2025/2025-08-18/9de91f0f-3096-4542-89da-de1548d4aa33.jpeg",
      },
      {
        name: "BBQ Chicken",
        description:
          "Pica su vištiena, BBQ padažu, raudonais svogūnais ir sūriu",
        price: 9.12,
        image: "https://www.nicepng.com/png/detail/23-233373_pizza-bbq.png",
      },
    ];

    const drinks = [
      {
        name: "Coca-Cola",
        size: "0.5L",
        price: 1.99,
        image:
          "https://www.nicepng.com/png/detail/175-1755089_coca-cola-light-can.png",
      },
      {
        name: "Fanta",
        size: "0.5L",
        price: 1.99,
        image:
          "https://t3.ftcdn.net/jpg/04/59/68/76/360_F_459687602_UnQwEflTm1OJqcocV48Ll5zP6hVrPbNc.jpg",
      },
      {
        name: "Sprite",
        size: "0.5L",
        price: 1.99,
        image: "https://order.homeofseafood.com/wp-content/uploads/sprite.jpg",
      },
      {
        name: "Mineralinis vanduo",
        size: "0.5L",
        price: 0.99,
        image:
          "https://t4.ftcdn.net/jpg/14/97/02/75/360_F_1497027519_FoIRuo5K90dlSTU2EBphTOzWfS6vupa5.jpg",
      },
    ];

    const wraps = [
      {
        name: "Chicken Caesar Wrap",
        ingredients: "Vištiena, salotos, Caesar padažas",
        price: 5.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrjLnNcCIMwz6mNNzwj7qOC034UU8DaHLrA&s",
      },
      {
        name: "Veggie Wrap",
        ingredients: "Salotos, pomidorai, agurkai, humusas",
        price: 4.99,
        image:
          "https://img.freepik.com/premium-photo/veggie-wrap-with-white-background-high-quality-ultr_889056-17645.jpg",
      },
      {
        name: "Tuna Wrap",
        ingredients: "Tunas, salotos, majonezas",
        price: 5.99,
        image:
          "https://st5.depositphotos.com/16122460/67380/i/450/depositphotos_673807884-stock-photo-delicious-tortilla-wrap-tuna-isolated.jpg",
      },
    ];

    const specials = [
      {
        title: "Lunch Combo",
        description: "Pica + gėrimas pigiau",
        discount: 20,
        validUntil: new Date("2025-12-31"),
        items: [
          {
            id: "pizza123",
            name: "Margarita",
            price: 8.99,
            image:
              "https://img.freepik.com/free-photo/freshly-baked-margherita-pizza-with-mozzarella-cheese-basil-leaves_9975-124847.jpg?semt=ais_hybrid&w=740&q=80g",
          },
          {
            id: "cola456",
            name: "Coca-Cola",
            price: 1.99,
            image:
              "https://www.nicepng.com/png/detail/175-1755089_coca-cola-light-can.png",
          },
        ],
      },
      {
        title: "Evening Special",
        description: "Pica + wrap + gėrimas su nuolaida",
        discount: 15,
        validUntil: new Date("2025-12-31"),
        items: [
          {
            id: "pizza789",
            name: "Pepperoni",
            price: 9.99,
            image:
              "https://www.nicepng.com/png/full/4-43553_free-png-pepperoni-pizza-png-images-transparent-pepperoni.png",
          },
          {
            id: "wrap123",
            name: "Chicken Wrap",
            price: 5.99,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrjLnNcCIMwz6mNNzwj7qOC034UU8DaHLrA&s",
          },
          {
            id: "cola456",
            name: "Coca-Cola",
            price: 1.99,
            image:
              "https://www.nicepng.com/png/detail/175-1755089_coca-cola-light-can.png",
          },
        ],
      },
    ];

    const upsellData = [
      {
        name: "Coca-Cola 0.5L",
        price: 1.99,
        image:
          "https://www.nicepng.com/png/detail/175-1755089_coca-cola-light-can.png",
        category: "Gėrimai",
      },
      {
        name: "Fanta 0.5L",
        price: 1.99,
        image:
          "https://t3.ftcdn.net/jpg/04/59/68/76/360_F_459687602_UnQwEflTm1OJqcocV48Ll5zP6hVrPbNc.jpg",
        category: "Gėrimai",
      },
      {
        name: "Česnakinis padažas",
        price: 0.79,
        image: "https://www.pizzagrande.lt/foto/mini/foto20240801152310.jpg",
        category: "Padažai",
      },
      {
        name: "Klasikinis kečupas",
        price: 0.69,
        image:
          "https://worldrecipes.eu/storage/526333/conversions/marinara-cover_webp.webp",
        category: "Padažai",
      },
    ];

    await Pizza.insertMany(pizzas);
    await Drink.insertMany(drinks);
    await Wrap.insertMany(wraps);
    await Special.insertMany(specials);
    await Upsell.insertMany(upsellData);

    console.log("✅ Duomenys įkelti sėkmingai!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed klaida:", error);
    process.exit(1);
  }
};

connectDB().then(seedData);
