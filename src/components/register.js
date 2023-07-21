import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <section className="min-h-screen bg-white">
                <div className="container mx-auto h-full flex items-center py-5 rounded-md">
                    <div className="w-96 mx-auto">
                        <div className="rounded shadow bg-white p-12">
                            <div className="text-center">
                                <img src="/images/favicon.png" alt="Logo" width="70" height="70" className="mx-auto mb-4 mt-5" />
                                <h2 className="text-2xl font-bold mb-2 text-[#100F3D]">Register</h2>
                                <p className="mb-5 text-[#100F3D]">Register Yourself!</p>

                                <div className="mb-4">
                                    <label className="block text-left text-[#100F3D]" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="w-full border border-gray-200 rounded px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-left text-[#100F3D]" htmlFor="password">Password</label>
                                    <input type="password" id="password" className="w-full border border-gray-200 rounded px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-left text-[#100F3D]" htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" id="confirmPassword" className="w-full border border-gray-200 rounded px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none" />
                                </div>

                                <p className="text-sm mb-5 text-[#100F3D]">Have an Account? <Link to="/login" className="text-[#100F3D] underline">Login</Link></p>
                                <button type="submit" className="w-full text-white bg-[#0F0D3D] px-4 py-3 font-medium rounded">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
