import React from "react";

const products = [
    { id: 1, name: "Smart Watch", price: "4,999 Rs", rating: 5, image: 'images/pro1.png', description: "Our Smart Watch combines style, functionality, and cutting-edge technology to enhance your daily life. With its sleek design and advanced features, it's more than just a timepiece." },
    { id: 2, name: "Iphone", price: "350,999 Rs", rating: 4, image: 'images/pro2.png', description: "The iPhone is a revolutionary smartphone that has redefined the way we communicate, work, and stay entertained. Packed with powerful features and a sleek design." },
    { id: 3, name: "Laptop", price: "130,000 Rs", rating: 5, image: 'images/pro3.png', description: "Our laptops are designed to empower you with the ultimate computing experience, whether you're working, studying, or enjoying entertainment on the go. Combining sleek design." },
    { id: 4, name: "Dress", price: "7,999 Rs", rating: 5, image: 'images/pro4.png', description: "Our dress coat is the epitome of timeless elegance and sophisticated style. Crafted with meticulous attention to detail, it is designed to elevate your formal attire and make a lasting impression." },
    { id: 5, name: "Water Bottle", rating: 4, price: "1,999 Rs", image: 'images/pro5.png', description: "Our water bottle is designed to be the perfect companion for your active lifestyle. It's made of durable, BPA-free plastic and features a leak-proof lid that makes it easy to drink from on the go." },
    { id: 6, name: "Electric Fan", price: "2,999 Rs", rating: 5, image: 'images/pro6.png', description: "Our electric fan is designed to be the perfect addition to your home. With a sleek, modern design and powerful motor, it will keep you cool all summer long." },
    { id: 7, name: "Bag", price: "3,999 Rs", rating: 5, image: 'images/pro7.png', description: "Our bag is designed to be the perfect companion for your everyday adventures. It's made of durable, water-resistant material and features a padded laptop sleeve, so you can take it anywhere." },
    { id: 8, name: "Pant", price: "2,999 Rs", rating: 5, image: 'images/pro8.png', description: "Our pants are designed to be the perfect addition to your wardrobe. They're made from a soft, stretchy fabric that will keep you comfortable all day long." },
]

const ProductCard = ({ product }) => (
    <div className="p-4 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <div className="bg-cover bg-center h-40 w-40 p-4" style={{ backgroundImage: `url(${product.image})` }}></div>
            <div className="p-4 text-center">
                <h1 className="text-3xl text-gray-900 font-bold">{product.name}</h1>
                <div className="mt-1">
                    {"⭐".repeat(product.rating)}
                </div>
                <div className="mt-1 text-orange-600 font-bold text-2xl">{product.price}</div>
                <p className="mt-2 text-justify text-gray-600 w-60 ">{product.description}</p>
                <div className="mt-5">
                    <button className="bg-orange-600 text-white rounded-sm px-4 py-2 shadow-lg">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
);

const App = () => (
    <div className="my-5">
        <h1 className="text-3xl font-bold text-center text-gray-900">Previous Products</h1>
        <div className="flex flex-wrap justify-center">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
);

export default App;
