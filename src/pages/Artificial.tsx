import { useState } from "react";

export default function Artificial() {

  const products = [
    { id: 1, image: "pic1.jpeg" },
    { id: 2, image: "pic2.jpeg" },
    { id: 3, image: "pic3.jpeg" },
    { id: 4, image: "pic4.jpeg" },
    { id: 5, image: "pic5.jpeg" },
    { id: 6, image: "pic6.jpeg" },
    { id: 7, image: "pic7.jpeg" },
    { id: 8, image: "pic8.jpeg" },
    { id: 9, image: "pic9.jpeg" },
    { id: 10, image: "pic10.jpeg" },
    { id: 11, image: "pic11.jpeg" },
    { id: 12, image: "pic12.jpeg" },
    { id: 13, image: "pic13.jpeg" },
    { id: 14, image: "pic14.jpeg" },
    { id: 15, image: "pic15.jpeg" },
    { id: 16, image: "pic16.jpeg" },
    { id: 17, image: "pic17.jpeg" },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Popup state
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white p-4 rounded-xl max-w-md w-full">
            {/* ❌ Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-red-600 transition z-50"
              aria-label="Close"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="preview"
              className="w-full h-[70vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <div
        className="p-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sukhLogoWatermark1.png')" }}
      >
        <h2
          className="text-3xl font-bold mb-2 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #8B6C1F, #C8A951, #FFD700, #D4AF37, #B8860B)",
          }}
        >
          Artificial Jewellery
        </h2>

        <p
          className="text-lg font-bold mb-6 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #a2a2a2ff, #7f7f7fff, #836767ff, #a59191ff, #A9A9A9)",
          }}
        >
          Artificial Jewellery Listing
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedImage(p.image)}
              className="border rounded-xl shadow-md p-4 bg-white hover:shadow-xl transition cursor-pointer"
            >
              <div className="bg-gray-50 rounded-md p-3 mb-3">
                <img
                  src={p.image}
                  alt="Gold Plated Jewellery"
                  className="w-full h-48 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold">
                Gold Plated Jewellery
              </h3>

              <p className="text-green-600 font-bold text-lg mt-2">
                Price: Negotiable
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
