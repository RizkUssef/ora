import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-section pt-10">
      <div className="container flex flex-col gap-10">
        <div className="z-10 flex gap-3">
          <div className="flex flex-col gap-3 items-start">
            <h1 className="title">ôRə Grand Hall</h1>
            <p className="text w-1/2 text-left">
              Timeless elegance defined through history and meticulous
              hospitality. Join us for an unforgettable experience.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h1 className="links-title">CONTACT</h1>
            <div className="flex flex-col gap-1 text-left">
              <p className="text w-1/2">1204 Heritage Way Saint Aurelia, Estates of the Grand Hall</p>
              <p className="text">(123) 456-7890</p>
              <p className="text">WdN5T@example.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h1 className="links-title">EXPLORE</h1>
            <div className="flex flex-col gap-1 text-left">
              <Link className="links" href="/">Gallery</Link>
              <Link className="links" href="/">Events</Link>
              <Link className="links" href="/">Packages</Link>
            </div>
          </div>
        </div>
        <div className="z-10 flex justify-between py-3 w-full border-t border-footer-border">
          <p className="copy">© 2023 ôRə Grand Hall. All rights reserved.</p>
          <p className="dev">Designed and Developed by @Rizk Ussef</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
