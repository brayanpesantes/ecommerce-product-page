import { useState } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ModalViewImage from "./ModalViewImage";

interface ProductGalleryProps {
  images: Image[];
}

export default function ProductGallery({
  images,
}: Readonly<ProductGalleryProps>) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious() {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }

  function handleNext() {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }

  return (
    <div>
      <div className="w-full h-full md:w-[440px] md:h-[440px] relative">
        {isOpen &&
          createPortal(
            <ModalViewImage
              onClose={() => setIsOpen(false)}
              images={images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              setSelectedImage={setSelectedImage}
            />,
            document.body
          )}
        <img
          src={selectedImage.product.src}
          alt={selectedImage.product.alt}
          className="md:rounded-xl w-full h-full object-cover"
          onClick={() => setIsOpen(true)}
          role="button"
          aria-label={`View image of ${selectedImage.product.alt}`}
        />
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 md:hidden bg-white rounded-full p-2"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 md:hidden bg-white rounded-full p-2"
          onClick={handleNext}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="hidden md:flex flex-row gap-8 mt-8 ">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(images.indexOf(image));
            }}
            aria-label={`View thumbnail of ${image.thumbnail.alt}`}
          >
            <img
              src={image.thumbnail.src}
              alt={image.thumbnail.alt}
              className={`size-[88px] rounded-md cursor-pointer ${
                selectedImage.id === image.id
                  ? "border-2 border-orange-500 contrast-50"
                  : ""
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
