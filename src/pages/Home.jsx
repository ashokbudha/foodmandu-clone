import React from "react";
import Header from "../components/Header";
import SearchBanner from "../components/SearchBanner";
import FoodmanduFresh from "../components/FoodmanduFresh";
import RestaurantList from "../components/RestaurantList";
import AboutSection from "../components/AboutSection";
import AppDownloadBanner from "../components/AppDownloadBanner";
import RequestSection from "../components/RequestSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBanner />
      <FoodmanduFresh />
      <RestaurantList />
      <AboutSection />
      <AppDownloadBanner />
      <RequestSection />
      <Footer />
    </div>
  );
};

export default Home;
