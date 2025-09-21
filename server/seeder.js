import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();


const products = [
  // Phones
  {
    name: "iPhone 14 Pro",
    category: "Phones",
    price: 999,
    brand: "Apple",
    description: "Latest Apple iPhone with A16 Bionic chip",
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg",
  },
  {
    name: "Samsung Galaxy S23",
    category: "Phones",
    price: 899,
    brand: "Samsung",
    description: "Flagship Samsung phone with Snapdragon 8 Gen 2",
    image: "https://m.media-amazon.com/images/I/71Sa+QAjw-L._AC_SL1500_.jpg",
  },
  {
    name: "Google Pixel 7 Pro",
    category: "Phones",
    price: 799,
    brand: "Google",
    description: "Pixel flagship with Tensor G2 chip",
    image: "https://m.media-amazon.com/images/I/71WdpfFfbhL._AC_SL1500_.jpg",
  },
  {
    name: "OnePlus 11",
    category: "Phones",
    price: 729,
    brand: "OnePlus",
    description: "Fast and smooth with Snapdragon 8 Gen 2",
    image: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SL1500_.jpg",
  },
  {
    name: "Xiaomi 13 Pro",
    category: "Phones",
    price: 699,
    brand: "Xiaomi",
    description: "Affordable flagship with Leica cameras",
    image: "https://m.media-amazon.com/images/I/71f3+qvX0bL._AC_SL1500_.jpg",
  },

  // Earphones
  {
    name: "Apple AirPods Pro 2",
    category: "Earphones",
    price: 249,
    brand: "Apple",
    description: "Noise-cancelling wireless earphones",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
  },
  {
    name: "Sony WF-1000XM4",
    category: "Earphones",
    price: 279,
    brand: "Sony",
    description: "Industry-leading noise cancellation",
    image: "https://m.media-amazon.com/images/I/61W9jl6K2-L._AC_SL1500_.jpg",
  },
  {
    name: "Samsung Galaxy Buds2 Pro",
    category: "Earphones",
    price: 229,
    brand: "Samsung",
    description: "Premium wireless earbuds with Hi-Fi sound",
    image: "https://m.media-amazon.com/images/I/61POyQjR2TL._AC_SL1500_.jpg",
  },
  {
    name: "Jabra Elite 7 Pro",
    category: "Earphones",
    price: 199,
    brand: "Jabra",
    description: "Compact earbuds with adjustable ANC",
    image: "https://m.media-amazon.com/images/I/61OxaAEfCzL._AC_SL1500_.jpg",
  },
  {
    name: "Bose QuietComfort Earbuds II",
    category: "Earphones",
    price: 299,
    brand: "Bose",
    description: "Best-in-class noise cancellation and comfort",
    image: "https://m.media-amazon.com/images/I/61pZYPjvSSL._AC_SL1500_.jpg",
  },

  // Laptops
  {
    name: "MacBook Pro 16” M2",
    category: "Laptops",
    price: 2499,
    brand: "Apple",
    description: "Powerful laptop with Apple M2 Max chip",
    image: "https://m.media-amazon.com/images/I/61fd2oCrvyL._AC_SL1500_.jpg",
  },
  {
    name: "Dell XPS 15",
    category: "Laptops",
    price: 1899,
    brand: "Dell",
    description: "Slim premium Windows laptop with OLED display",
    image: "https://m.media-amazon.com/images/I/71Ur9T6rW5L._AC_SL1500_.jpg",
  },
  {
    name: "HP Spectre x360",
    category: "Laptops",
    price: 1599,
    brand: "HP",
    description: "Convertible 2-in-1 laptop with touch display",
    image: "https://m.media-amazon.com/images/I/61iJ4jUVkkL._AC_SL1500_.jpg",
  },
  {
    name: "Asus ROG Zephyrus G14",
    category: "Laptops",
    price: 1499,
    brand: "Asus",
    description: "Gaming laptop with Ryzen 9 and RTX GPU",
    image: "https://m.media-amazon.com/images/I/81OGbTeeP-L._AC_SL1500_.jpg",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Laptops",
    price: 1799,
    brand: "Lenovo",
    description: "Business-class lightweight laptop",
    image: "https://m.media-amazon.com/images/I/71xEtDj08hL._AC_SL1500_.jpg",
  },

  // Tablets
  {
    name: "Apple iPad Pro 12.9”",
    category: "Tablets",
    price: 1099,
    brand: "Apple",
    description: "Flagship iPad with M2 chip and Liquid Retina XDR",
    image: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SL1500_.jpg",
  },
  {
    name: "Samsung Galaxy Tab S8 Ultra",
    category: "Tablets",
    price: 1199,
    brand: "Samsung",
    description: "Ultra-large AMOLED display tablet",
    image: "https://m.media-amazon.com/images/I/71V3VCLZXRL._AC_SL1500_.jpg",
  },
  {
    name: "Microsoft Surface Pro 9",
    category: "Tablets",
    price: 999,
    brand: "Microsoft",
    description: "2-in-1 detachable tablet PC",
    image: "https://m.media-amazon.com/images/I/71rP7N63JzL._AC_SL1500_.jpg",
  },
  {
    name: "Amazon Fire HD 10",
    category: "Tablets",
    price: 149,
    brand: "Amazon",
    description: "Affordable tablet with Alexa support",
    image: "https://m.media-amazon.com/images/I/61N0+NhBvKL._AC_SL1500_.jpg",
  },
  {
    name: "Lenovo Tab P12 Pro",
    category: "Tablets",
    price: 799,
    brand: "Lenovo",
    description: "High-end Android tablet with AMOLED screen",
    image: "https://m.media-amazon.com/images/I/71K6UCJCeWL._AC_SL1500_.jpg",
  },

  // Smart Watches
  {
    name: "Apple Watch Ultra",
    category: "Smart Watches",
    price: 799,
    brand: "Apple",
    description: "Rugged smartwatch for fitness and outdoor use",
    image: "https://m.media-amazon.com/images/I/91z5KuonXrL._AC_SL1500_.jpg",
  },
  {
    name: "Samsung Galaxy Watch 5 Pro",
    category: "Smart Watches",
    price: 499,
    brand: "Samsung",
    description: "Durable smartwatch with GPS and health tracking",
    image: "https://m.media-amazon.com/images/I/71MHpQYJ7sL._AC_SL1500_.jpg",
  },
  {
    name: "Garmin Fenix 7",
    category: "Smart Watches",
    price: 699,
    brand: "Garmin",
    description: "Multi-sport GPS smartwatch with rugged design",
    image: "https://m.media-amazon.com/images/I/71rB+gLqF2L._AC_SL1500_.jpg",
  },
  {
    name: "Fitbit Sense 2",
    category: "Smart Watches",
    price: 299,
    brand: "Fitbit",
    description: "Advanced health smartwatch",
    image: "https://m.media-amazon.com/images/I/71lEkK90OEL._AC_SL1500_.jpg",
  },
  {
    name: "Huawei Watch GT 3 Pro",
    category: "Smart Watches",
    price: 349,
    brand: "Huawei",
    description: "Premium smartwatch with long battery life",
    image: "https://m.media-amazon.com/images/I/71+0OItDN7L._AC_SL1500_.jpg",
  },

  // Mouses
  {
    name: "Logitech MX Master 3S",
    category: "Mouses",
    price: 99,
    brand: "Logitech",
    description: "Ergonomic design, ultra-fast scrolling, wireless",
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
  },
  {
    name: "Razer DeathAdder V3 Pro",
    category: "Mouses",
    price: 149,
    brand: "Razer",
    description: "Lightweight, wireless gaming mouse with optical switches",
    image: "https://m.media-amazon.com/images/I/61oYFZlY4NL._AC_SL1500_.jpg",
  },
  {
    name: "Apple Magic Mouse 2",
    category: "Mouses",
    price: 79,
    brand: "Apple",
    description: "Multi-touch surface, sleek Apple design",
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg",
  },
  {
    name: "SteelSeries Aerox 5",
    category: "Mouses",
    price: 139,
    brand: "SteelSeries",
    description: "Ultra-light gaming mouse with 9 programmable buttons",
    image: "https://m.media-amazon.com/images/I/71W7y7LB2rL._AC_SL1500_.jpg",
  },
  {
    name: "HP Z3700 Wireless Mouse",
    category: "Mouses",
    price: 29,
    brand: "HP",
    description: "Slim, wireless, affordable mouse for daily use",
    image: "https://m.media-amazon.com/images/I/71Bf0NnFu2L._AC_SL1500_.jpg",
  },

  // Keyboards
  {
    name: "Keychron K2 Wireless",
    category: "Keyboards",
    price: 89,
    brand: "Keychron",
    description: "Hot-swappable mechanical keyboard, Bluetooth support",
    image: "https://m.media-amazon.com/images/I/71TNwrGdKHL._AC_SL1500_.jpg",
  },
  {
    name: "Logitech MX Keys",
    category: "Keyboards",
    price: 119,
    brand: "Logitech",
    description: "Wireless illuminated keyboard with low-profile keys",
    image: "https://m.media-amazon.com/images/I/71YZz2YzydL._AC_SL1500_.jpg",
  },
  {
    name: "Razer Huntsman Mini",
    category: "Keyboards",
    price: 129,
    brand: "Razer",
    description: "60% compact gaming keyboard with optical switches",
    image: "https://m.media-amazon.com/images/I/71r48YdM3KL._AC_SL1500_.jpg",
  },
  {
    name: "Corsair K95 RGB Platinum XT",
    category: "Keyboards",
    price: 199,
    brand: "Corsair",
    description: "Mechanical gaming keyboard with per-key RGB",
    image: "https://m.media-amazon.com/images/I/81r8JAZVdHL._AC_SL1500_.jpg",
  },
  {
    name: "Apple Magic Keyboard",
    category: "Keyboards",
    price: 99,
    brand: "Apple",
    description: "Slim, rechargeable keyboard for Mac/iPad",
    image: "https://m.media-amazon.com/images/I/71yFR12-dsL._AC_SL1500_.jpg",
  },

  // TVs
  {
    name: "LG OLED C2 55”",
    category: "TVs",
    price: 1399,
    brand: "LG",
    description: "4K OLED TV with Dolby Vision and webOS",
    image: "https://m.media-amazon.com/images/I/81ct+X+tkHL._AC_SL1500_.jpg",
  },
  {
    name: "Samsung QN90B Neo QLED 65”",
    category: "TVs",
    price: 1799,
    brand: "Samsung",
    description: "4K QLED TV with Mini LED and Quantum HDR",
    image: "https://m.media-amazon.com/images/I/81iVuIF4QVL._AC_SL1500_.jpg",
  },
  {
    name: "Sony Bravia XR A80K 55”",
    category: "TVs",
    price: 1499,
    brand: "Sony",
    description: "4K OLED with Cognitive Processor XR",
    image: "https://m.media-amazon.com/images/I/91QUFaz3SSL._AC_SL1500_.jpg",
  },
  {
    name: "TCL 6-Series Roku TV 65”",
    category: "TVs",
    price: 899,
    brand: "TCL",
    description: "Affordable 4K QLED TV with Roku built-in",
    image: "https://m.media-amazon.com/images/I/91cwv5p0YmL._AC_SL1500_.jpg",
  },
  {
    name: "Hisense U8H 55”",
    category: "TVs",
    price: 799,
    brand: "Hisense",
    description: "4K ULED TV with Dolby Vision IQ and HDR10+",
    image: "https://m.media-amazon.com/images/I/91bY7sZzE5L._AC_SL1500_.jpg",
  },

  // Cameras
  {
    name: "Canon EOS R5",
    category: "Cameras",
    price: 3899,
    brand: "Canon",
    description: "45MP full-frame mirrorless camera, 8K video",
    image: "https://m.media-amazon.com/images/I/81R1F3L5sXL._AC_SL1500_.jpg",
  },
  {
    name: "Sony A7 IV",
    category: "Cameras",
    price: 2499,
    brand: "Sony",
    description: "33MP full-frame mirrorless, 4K60p video",
    image: "https://m.media-amazon.com/images/I/81tF-Fq2wCL._AC_SL1500_.jpg",
  },
  {
    name: "Nikon Z6 II",
    category: "Cameras",
    price: 1999,
    brand: "Nikon",
    description: "24MP mirrorless, dual processors, 4K video",
    image: "https://m.media-amazon.com/images/I/81x4Md43FUL._AC_SL1500_.jpg",
  },
  {
    name: "Fujifilm X-T5",
    category: "Cameras",
    price: 1699,
    brand: "Fujifilm",
    description: "40MP APS-C camera with retro design",
    image: "https://m.media-amazon.com/images/I/81H2kryOWJL._AC_SL1500_.jpg",
  },
  {
    name: "GoPro HERO11 Black",
    category: "Cameras",
    price: 499,
    brand: "GoPro",
    description: "Action camera with 5.3K video and stabilization",
    image: "https://m.media-amazon.com/images/I/81h0ZgULC1L._AC_SL1500_.jpg",
  },

  // Chargers
  {
    name: "Anker 737 GaNPrime 120W",
    category: "Chargers",
    price: 99,
    brand: "Anker",
    description: "Fast USB-C charger with 3 ports",
    image: "https://m.media-amazon.com/images/I/61K2iUYp5bL._AC_SL1500_.jpg",
  },
  {
    name: "Apple 20W USB-C Charger",
    category: "Chargers",
    price: 19,
    brand: "Apple",
    description: "Fast charging for iPhone and iPad",
    image: "https://m.media-amazon.com/images/I/61vtLhO6fDL._AC_SL1500_.jpg",
  },
  {
    name: "Samsung 45W Super Fast Charger",
    category: "Chargers",
    price: 49,
    brand: "Samsung",
    description: "USB-C fast charger with PPS support",
    image: "https://m.media-amazon.com/images/I/61pDewJ5muL._AC_SL1500_.jpg",
  },
  {
    name: "Belkin BoostCharge Pro 4-Port",
    category: "Chargers",
    price: 69,
    brand: "Belkin",
    description: "120W desktop charger with multiple ports",
    image: "https://m.media-amazon.com/images/I/61L0M0iDJgL._AC_SL1500_.jpg",
  },
  {
    name: "Spigen ArcStation Pro 40W",
    category: "Chargers",
    price: 39,
    brand: "Spigen",
    description: "Dual USB-C charger with GaN technology",
    image: "https://m.media-amazon.com/images/I/61lEKzoh+WL._AC_SL1500_.jpg",
  },
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

importData();
