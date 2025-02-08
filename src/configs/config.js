// @ts-check
import profileImage from '../images/profilepic.jpg?url';
import backgroundImage from '../images/backgrounds/pokedrop.jpg?url';
import productImage from '../images/product1.jpg?url';
import productImage20250207 from '../images/product20250207.JPG?url';
import productImage20250208 from '../images/productImage20250208.jpeg?url';

/** @type {import('../types.js').SiteConfig} */
const config = {
    user: {
        name: "PokéDrops", bio: "Limited TCG drops at market-breaking prices.", profileImage: profileImage,
    }, background: {
        color: "#93c5fd", image: backgroundImage,
    }, socialLinks: [{
        icon: "fa6-brands:instagram", url: "https://instagram.com/getpokedrops", title: "Instagram",
    }, {
        icon: "fa6-solid:cart-shopping", url: "https://www.carousell.sg/u/nightcorebchong/", title: "Carousell",
    }, // Add more social links as needed
        // Search for icons here - https://fontawesome.com/search
    ], links: [{
        description: "Get notified to our latest drops! (it's free)", url: "https://t.me/pokedrops", icon: "fa6-brands:telegram", title: "PokéDrops Telegram channel",
    }, // Add more links as needed
    ], products: [
        {
            title: "Pokémon UPC 151",
            description: "151 ultra premium collection, Great condition",
            url: "https://www.carousell.sg/p/good-deal-pokemon-upc-151-1350900199/",
            price: 330,
            includePriceOnSite: true,
            image: productImage,
            availability: "Available", // Options: Available, Reserved, Sold
        }, {
            title: "[Paldea Evolved] Sleeved Booster Packs",
            description: "Selling Leftover sleeved boosters.",
            url: "https://carousell.app.link/zwoZOrUjNQb",
            price: 8.2,
            includePriceOnSite: true,
            image: productImage20250207,
            availability: "Available" // Options: Available, Reserved, Sold
        }, {
            title: "Super Electric Breaker JP BB",
            description: "[Non-shrinked] have 2 boxes.",
            url: "https://carousell.app.link/MQf9CmXkOQb",
            price: 85,
            includePriceOnSite: true,
            image: productImage20250208,
            availability: "Available" // Options: Available, Reserved, Sold
        }, // Add more products as needed
    ],
};

export default config;
