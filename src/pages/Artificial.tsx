import { useState } from "react";
import { loadContent } from '../data';

export default function Artificial() {
  const content = loadContent();

  // Dummy products
  const products = [
    { id: 1, image: "pic1.jpeg", title: "Gold-Plated Necklace Set", price: "₹2,999", desc: "Elegant gold-plated necklace with matching earrings. Price negotiable." },
    { id: 2, image: "pic2.jpeg", title: "Kundan Bridal Jewellery Set", price: "₹12,499", desc: "Premium handcrafted kundan bridal set. Price negotiable." },
    { id: 3, image: "pic3.jpeg", title: "Antique Silver Kada", price: "₹1,299", desc: "Traditional oxidized silver kada. Price negotiable." },
    { id: 4, image: "pic4.jpeg", title: "Diamond Finish Pendant", price: "₹3,499", desc: "Stylish pendant with diamond-like shine. Price negotiable." },
    { id: 5, image: "pic5.jpeg", title: "Pearl Choker Set", price: "₹5,999", desc: "Classic pearl choker with premium finish. Price negotiable." },
    { id: 6, image: "pic6.jpeg", title: "Women’s Designer Bangles", price: "₹7,299", desc: "Beautifully crafted designer bangles. Price negotiable." },
    { id: 7, image: "pic7.jpeg", title: "Traditional Gold Bangles", price: "₹8,299", desc: "Traditional heavy gold-style bangles. Price negotiable." },
    { id: 8, image: "pic8.jpeg", title: "Stone-Studded Fancy Rings", price: "₹9,299", desc: "Stylish stone-studded partywear rings. Price negotiable." },
    { id: 9, image: "pic9.jpeg", title: "Gold Plated Mangalsutra", price: "₹10,299", desc: "Elegant lightweight gold-plated mangalsutra. Price negotiable." },
    { id: 10, image: "pic10.jpeg", title: "Bridal Choker Necklace", price: "₹11,299", desc: "Heavy bridal choker set for weddings. Price negotiable." },
    { id: 11, image: "pic11.jpeg", title: "Premium Kundan Earrings", price: "₹11,299", desc: "Beautiful handcrafted kundan earrings. Price negotiable." },
    { id: 12, image: "pic12.jpeg", title: "Antique Temple Jewellery", price: "₹11,299", desc: "Traditional temple design jewellery. Price negotiable." },
    { id: 13, image: "pic13.jpeg", title: "American Diamond Bracelet", price: "₹11,299", desc: "Elegant AD bracelet with premium finish. Price negotiable." },
    { id: 14, image: "pic14.jpeg", title: "Full Bridal Jewellery Combo", price: "₹11,299", desc: "Complete bridal jewellery combo set. Price negotiable." },
    { id: 15, image: "pic15.jpeg", title: "Oxidized Silver Earrings", price: "₹11,299", desc: "Trendy oxidized earrings for daily wear. Price negotiable." },
    { id: 16, image: "pic16.jpeg", title: "Gold Polish Kada Pair", price: "₹11,299", desc: "High-quality gold polish kada pair. Price negotiable." },
    { id: 17, image: "pic17.jpeg", title: "Long Rani Haar Necklace", price: "₹11,299", desc: "Traditional long rani haar necklace. Price negotiable." }
  ]


  // Pagination Setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/sukhLogoWatermark1.png')" }}>

      <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #8B6C1F, #C8A951, #FFD700, #D4AF37, #B8860B)"
  }}>Artificial Jewellery</h2>
      <p className="text-lg font-bold mb-3 bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #C0C0C0, #E8E8E8, #FFFFFF, #D9D9D9, #A9A9A9)"
  }}>Artificial Jewellery Listing</p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl shadow-md p-4 bg-white hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />

            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-green-600 font-bold text-lg mt-2">{p.price}</p>
            <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
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
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
