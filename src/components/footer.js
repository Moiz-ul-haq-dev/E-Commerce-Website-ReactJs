import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="flex flex-wrap text-white font-sans" style={{ backgroundColor: '#100F3D' }}>
                <div className="w-full md:w-1/2 p-4">
                    <h5 className="uppercase mt-10 font-bold text-center">E-Commerce Store</h5>
                    <p className="mt-2">At Our Ecommerce Store, we are passionate about providing exceptional products and an unparalleled shopping experience. We strive to offer a curated selection of high-quality items that meet the diverse needs and tastes of our valued customers.</p>
                </div>
                <div className="w-full md:w-1/4 p-4 text-center">
                    <h5 className="uppercase mt-10 font-bold">Links</h5>
                    <ul className="list-none mt-2 space-y-2">
                        <li><Link to="/" className="text-white no-underline">Home</Link></li>
                        <li><Link to="/product" className="text-white no-underline">Products</Link></li>
                        <li><Link to="/cart" className="text-white no-underline">Cart</Link></li>
                        <li><Link to="/contact" className="text-white no-underline">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 p-4">
                    <h5 className="uppercase mt-10 font-bold text-center">Links</h5>
                    <ul className="list-none mt-2 space-y-2 text-center">
                        <li><Link href="/" className="text-white no-underline">Facebook</Link></li>
                        <li><Link href="/" className="text-white no-underline">Instagram</Link></li>
                        <li><Link href="/" className="text-white no-underline">Twitter</Link></li>
                        <li><Link href="/" className="text-white no-underline">LinkedIn</Link></li>
                    </ul>
                </div>
                <div className="mx-auto text-white">
                    © 2023 Copyright:
                    <Link href="/" className="no-underline text-white"> ecommerce-store.com</Link>
                </div>
            </div>
        </>
    )
}

