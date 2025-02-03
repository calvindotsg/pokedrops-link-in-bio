// @ts-check
import profileImage from '../images/profilepic.jpg?url';
import backgroundImage from '../images/backgrounds/pokedrop.jpg?url';
import productImage from '../images/product1.jpg?url';

/** @type {import('../types.js').SiteConfig} */
const config = {
  user: {
    name: "PokéDrops",
    bio: "Limited TCG drops at market-breaking prices.",
    profileImage: profileImage,
  },
  background: {
    color: "#f0f0f0",
    image: backgroundImage,
  },
  socialLinks: [
    {
      platform: "telegram",
      url: "https://t.me/pokedrops",
      icon: "telegram",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/getpokedrops",
      icon: "camera-retro",
    },
    // Add more social links as needed
    // Search for icons here - https://fontawesome.com/search
  ],
  links: [
    {
      title: "Get notified to our latest drops! (it's free)",
      url: "https://t.me/pokedrops",
      icon: "telegram",
    },
    // Add more links as needed
  ],
  products: [
    {
      title: "Pokémon UPC 151",
      description: "151 ultra premium collection, Great condition",
      url: "https://www.carousell.sg/p/good-deal-pokemon-upc-151-1350900199/",
      price: 300,
      includePriceOnSite: true,
      image: productImage,
    },
    // Add more products as needed
  ],
};

export const analytics = {
  posthog: {
    enableTracking: false
  }
};

export default config;
