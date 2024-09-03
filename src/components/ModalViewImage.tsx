import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface ModalViewImageProps {
  onClose: () => void;
  images: Image[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  setSelectedImage: (image: Image) => void;
}

export default function ModalViewImage({
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
  setSelectedImage,
}: ModalViewImageProps) {
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
    <div
      className="absolute inset-0 bg-gray-950/50 h-full flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="">
        <div className="relative h-6">
          <button
            onClick={onClose}
            className="absolute right-0 text-orange-500"
            aria-label="Close"
          >
            <FaX />
          </button>
        </div>
        <div className="w-full h-full md:w-[440px] md:h-[440px] relative">
          <img
            src={images[currentIndex].product.src}
            alt={images[currentIndex].product.alt}
            className="md:rounded-xl w-full h-full object-cover"
          />
          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3"
            onClick={handleNext}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="flex gap-4 mt-3 justify-center">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image.product.src}
                alt={image.product.alt}
                className={`size-[88px] rounded-md cursor-pointer hover:contrast-50 ${
                  currentIndex === index
                    ? "border-2 border-orange-800 contrast-50"
                    : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
