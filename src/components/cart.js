import React from 'react'

export default function AddToCart() {
    return (
        <>
            (
            <div className="container mx-auto h-screen block justify-center items-center">
                <div className="text-center mb-10">
                    <h2 className="font-bold text-2xl text-[#100F3D]">Your Add to Cart</h2>
                </div>
                <div className="card border shadow mb-4 w-3/4 mx-auto">
                    <div className="card-body p-4">
                        <div className="grid grid-cols-6 gap-4 items-center">
                            <div>
                                <img src="/images/pro2.png" alt="Product" className="w-20 h-20 object-cover" />
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Name</p>
                                    <p className="font-semibold">Iphone</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Color</p>
                                    <p className="font-semibold text-red-500">Red</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Quantity</p>
                                    <p className="font-semibold">1</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Price</p>
                                    <p className="font-semibold">350,999 Rs</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Total</p>
                                    <p className="font-semibold">350,999 Rs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border shadow mb-5 w-3/4 mx-auto">
                    <div className="card-body p-4 flex justify-end">
                        <p className="mb-0 me-5 flex items-center">
                            <span className="text-sm text-gray-500 mr-2">Order total:</span>
                            <span className="font-semibold">350,999 Rs</span>
                        </p>
                    </div>
                </div>

                <div className="flex justify-end w-3/4 mx-auto">
                    <button type="button" className="btn btn-light btn-lg mr-2 py-2 px-4 border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out">Continue shopping</button>
                    <button type="button" className="btn btn-lg py-2 px-4 bg-[#F57224] text-white hover:bg-orange-600 transition duration-300 ease-in-out">Add to cart</button>
                </div>
            </div>
        </>
    )
}
