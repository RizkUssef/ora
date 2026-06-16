"use client";

import ImageWrapper from "../common/ImageWrapper";
import GrandBallroom from "@/app/assets/GrandBallroom.png";
import GardenTerrace from "@/app/assets/GardenTerrace.png";
import PrivateSalon from "@/app/assets/PrivateSalon.png";

const Spaces = () => {
  return (
    <div className="spaces-section container ">
      <h1 className="header">Our Signature Spaces</h1>
      <div className="spaces-image-wrapper">
        <div className="w-1/3 ">
          <ImageWrapper
            imageSrc={GrandBallroom}
            imageAlt={"The Grand Ballroom"}
            imageWidth={"!w-[350px]"}
          ></ImageWrapper>

          <h2 className="spaces-sub-title mt-5">The Grand Ballroom</h2>
          <p className="spaces-hint">CAPACITY: 800 GUESTS</p>
        </div>
        <div className="w-1/3">
          <ImageWrapper
            imageSrc={GardenTerrace}
            imageAlt={"The Garden Terrace"}
            imageWidth={"!w-[350px]"}

            // imageHeight={"!h-1/3"}
          ></ImageWrapper>

          <h2 className="spaces-sub-title mt-5">The Garden Terrace</h2>
          <p className="spaces-hint">CAPACITY: 400 GUESTS</p>
        </div>
        <div className="w-1/3">
          <ImageWrapper
            imageSrc={PrivateSalon}
            imageAlt={"The Private Salon"}
            imageWidth={"!w-[350px]"}
            // imageHeight={"h-50"}
          ></ImageWrapper>

          <h2 className="spaces-sub-title mt-5">The Private Salon</h2>
          <p className="spaces-hint">CAPACITY: 80 GUESTS</p>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
