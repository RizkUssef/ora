'use client';
import Image, { StaticImageData } from 'next/image'

const ImageWrapper = ({imageSrc, imageAlt} : {imageSrc: StaticImageData & { src: string }, imageAlt: string}) => {
  return (
      <div className="heritage-image-wrapper">
        <div className="image-wrapper">
            <Image className="image" src={imageSrc} alt={imageAlt}></Image>
        </div>
        <div className="border"></div>
      </div>
  )
}

export default ImageWrapper
