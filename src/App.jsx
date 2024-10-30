import React from 'react';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import Banner from './Components/Banner/Banner';
import FAQ from './Components/FAQ/FAQ';
import NavBar from './Components/NavBar/NavBar';

export default function App() {
  return (
    <>
      <main className="overflow-hidden">
        <NavBar />
        <section id="home">
          <Home />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="banner">
          <Banner />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}
