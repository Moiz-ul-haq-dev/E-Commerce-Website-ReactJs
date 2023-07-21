import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <>
            <nav style={{ backgroundColor: '#100F3D' }}>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img src='images/cart.png' alt='logo' className='w-10 h-10' />
                            <Link href='/' className='ml-3 flex items-center py-4 px-2'>
                                <span className='font-semibold text-white text-lg'>E-Commerce Store</span>
                            </Link>
                        </div>
                        <div className='hidden md:flex justify-center items-center'>
                            <Link to='/' className='mx-2 py-4 px-2 text-white hover:text-blue-300 transition duration-300'>Home</Link>
                            <Link to='/product' className='mx-2 py-4 px-2 text-white hover:text-blue-300 transition duration-300'>Products</Link>
                            <Link to='/cart' className='mx-2 py-4 px-2 text-white hover:text-blue-300 transition duration-300'>Cart</Link>
                            <Link to='/contact' className='mx-2 py-4 px-2 text-white hover:text-blue-300 transition duration-300'>Contact Us</Link>
                        </div>
                        <div className='flex items-center'>
                            <div className='hidden md:flex items-center space-x-3'>
                                <Link to='/register' className='py-2 px-4 font-medium text-white border border-white rounded-md bg-transparent hover:bg-white hover:text-blue-950 transition duration-300'>Register</Link>
                                <Link to='/login' className='py-2 px-4 font-medium text-white border border-white rounded-md bg-transparent hover:bg-white hover:text-blue-950 transition duration-300'>Log In</Link>
                            </div>

                            <div className='md:hidden flex items-center'>
                                <button className='outline-none mobile-menu-button'>
                                    <svg className=' w-6 h-6 text-white hover:text-blue-300 '
                                        x-show='!showMenu'
                                        fill='none'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path d='M4 6h16M4 12h16M4 18h16'></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
