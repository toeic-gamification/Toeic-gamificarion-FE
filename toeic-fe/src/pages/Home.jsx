import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      {/* Thanh menu */}
      <Navbar />

      {/* Nội dung chính */}
      <div className="pt-20 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">
          Chào mừng đến với TOEIC Gamification!
        </h2>
        <p className="text-gray-700 mb-8">
          Nâng cao kỹ năng TOEIC qua trải nghiệm học tập đầy thú vị!
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
