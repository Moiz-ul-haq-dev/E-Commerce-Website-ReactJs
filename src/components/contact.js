import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className="container mx-auto mt-4">
                <div className="card bg-white shadow rounded-lg">
                    <div className="card-header p-6">
                        <h5 className="text-[#F57224] font-bold">Contact Us</h5>
                    </div>
                    <div className="card-body p-6">
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" placeholder="Enter your name" className="form-control mt-1 block w-full shadow-sm sm:text-sm rounded-md" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" className="form-control mt-1 block w-full shadow-sm sm:text-sm rounded-md" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows="4" placeholder="Enter your message" className="form-control mt-1 block w-full shadow-sm sm:text-sm rounded-md"></textarea>
                            </div>
                            <button type="submit" className="btn bg-[#F57224] text-white mt-4 px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
