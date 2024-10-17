import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
