import { useState } from "react";
import { loadContent } from '../data';

export default function Trading() {
  const content = loadContent();
  const products = [
      { id: 1, image: "picb1.jpeg", title: "Antibacterial White Phenyl", price: "Negotiable", desc: "High-quality antibacterial white phenyl for powerful cleaning and hygiene." },
      { id: 2, image: "picb2.jpeg", title: "Sukh Toilet Cleaner", price: "Negotiable", desc: "Strong toilet cleaning formula for removing stains and ensuring freshness." },
      { id: 3, image: "picb3.jpeg", title: "Antibacterial Black Phenyl", price: "Negotiable", desc: "Premium antibacterial black phenyl ideal for deep cleaning and disinfecting." },
      { id: 4, image: "picb4.jpeg", title: "Sukh Floor Cleaner", price: "Negotiable", desc: "Effective floor cleaner that removes dirt and leaves a refreshing fragrance." },
      { id: 5, image: "picb5.jpeg", title: "Sukh Toilet Cleaner", price: "Negotiable", desc: "Powerful toilet cleaner designed for tough stains and long-lasting shine." },
      { id: 6, image: "picb6.jpeg", title: "Sukh Bathroom Cleaner", price: "Negotiable", desc: "Advanced bathroom cleaner for removing soap scum, stains, and germs." },
      { id: 7, image: "picb7.jpeg", title: "Sukh Dish Wash", price: "Negotiable", desc: "High-foam dishwashing liquid that cuts grease and leaves utensils sparkling clean." },
      { id: 8, image: "picb8.jpeg", title: "Multisurface Glass Cleaner", price: "Negotiable", desc: "Streak-free glass and surface cleaner for crystal clear shine." },
      { id: 9, image: "picb9.jpeg", title: "Multipurpose Liquid Cleaner", price: "Negotiable", desc: "Versatile multipurpose cleaner suitable for all household cleaning needs." }
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
  
        <h2 className="text-3xl py-1 font-bold mb-3 bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #001F3F, #003F7F, #005FBF, #007FFF, #3399FF)"
    }}>Trading Products</h2>
        <p className="text-lg font-bold mb-3 bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #000000, #1a1a1a, #333333, #4d4d4d, #666666)"
    }}>We deals in trading of these products.</p>
  
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
                className="w-full h-96 object-fill rounded-md mb-3"
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
        {/* <footer>Contact on this Number for Order products and get delivery</footer> */}
      </div>
    );
}
