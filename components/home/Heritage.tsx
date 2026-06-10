'use client';
import Link from "next/link";
import HeritageImage from "@/app/assets/heritage.jpg";
import ImageWrapper from "../common/ImageWrapper";

const Heritage = () => {
  return (
    <div className="heritage-section container ">
      <ImageWrapper imageSrc={HeritageImage} imageAlt={"Heritage Image"}></ImageWrapper>
      <div className="heritage-content w-1/2">
        <p className="title">OUR HERITAGE</p>
        <h1 className="label">The Legacy of ôRə</h1>
        <p className="text">
          Founded in 1904, Aurelia Grand Hall was envisioned as a sanctuary for
          the most exquisite celebrations of the era. Over a century later, we
          continue to preserve that singular vision, blending historic grandeur
          with modern amenities to create a canvas where every moment shines.
        </p>
        <Link href={"#"} className="link">
          OUR FULL STORY
        </Link>
      </div>
    </div>
  );
};

export default Heritage;
