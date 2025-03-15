import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-center text-white py-3 fixed bottom-0 w-full">
      © {new Date().getFullYear()} TOEIC Gamification. All rights reserved.
    </footer>
  );
};

export default Footer;
