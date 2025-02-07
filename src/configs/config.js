// @ts-check
import profileImage from '../images/profilepic.jpg?url';
import backgroundImage from '../images/backgrounds/pokedrop.jpg?url';
import productImage from '../images/product1.jpg?url';
import productImage20250207 from '../images/product20250207.jpg?url';

/** @type {import('../types.js').SiteConfig} */
const config = {
    user: {
        name: "PokéDrops", bio: "Limited TCG drops at market-breaking prices.", profileImage: profileImage,
    }, background: {
        color: "#93c5fd", image: backgroundImage,
    }, socialLinks: [{
        icon: "fa6-brands:telegram", url: "https://t.me/pokedrops", title: "Telegram",
    }, {
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
            price: 300,
            includePriceOnSite: true,
            image: productImage,
            availability: "Reserved", // Options: Available, Reserved, Sold
        }, {
            title: "[PALDEA EVOLVED] Sleeved Booster Packs",
            description: "Selling Leftover PALDEA EVOLVED sleeved boosters. HAVE 30 LEFT. $8.20 / pack, $8 / pack for all",
            url: "https://carousell.app.link/zwoZOrUjNQb",
            price: 8,
            includePriceOnSite: true,
            image: productImage20250207,
            availability: "Available" // Options: Available, Reserved, Sold
        },// Add more products as needed
    ],
};

export default config;
