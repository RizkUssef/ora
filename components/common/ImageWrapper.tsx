"use client";
import Image, { StaticImageData } from "next/image";

const ImageWrapper = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageSrc: StaticImageData & { src: string };
  imageAlt: string;
  imageWidth?: string;
  imageHeight?: string;
}) => {
  return (
    <div className={`image-wrapper ${imageWidth} ${imageHeight}`}>
      <div className={`single-image-wrapper ${imageWidth} ${imageHeight}`}>
        <Image className="image" src={imageSrc} alt={imageAlt}></Image>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default ImageWrapper;
