import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-center py-10">
      <div className="text-white py-2 px-4 rounded-md inline-block">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
