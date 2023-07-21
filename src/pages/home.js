import React from 'react'
import Navbar from "../components/navbar";
import ImageCarousel from "../components/carousel";
import Products from "../components/product";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <Products />
      <Footer />
    </>
  )
}
