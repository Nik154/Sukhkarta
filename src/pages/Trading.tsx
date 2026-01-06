import { useState } from "react";
import { loadContent } from '../data';

export default function Trading() {
  const content = loadContent();
  const products = [
  { id: 1, image: "picb1.jpeg", title: "Antibacterial White Phenyl", category: "Phenyl", price: "Negotiable", desc: "High-quality antibacterial white phenyl for powerful cleaning and hygiene." },
  { id: 2, image: "picb2.jpeg", title: "Sukh Toilet Cleaner", category: "Toilet Cleaner", price: "Negotiable", desc: "Strong toilet cleaning formula for removing stains and ensuring freshness." },
  { id: 3, image: "picb3.jpeg", title: "Antibacterial Black Phenyl", category: "Phenyl", price: "Negotiable", desc: "Premium antibacterial black phenyl ideal for deep cleaning and disinfecting." },
  { id: 4, image: "picb4.jpeg", title: "Sukh Floor Cleaner", category: "Floor Cleaner", price: "Negotiable", desc: "Effective floor cleaner that removes dirt and leaves a refreshing fragrance." },
  { id: 5, image: "picb5.jpeg", title: "Sukh Toilet Cleaner", category: "Toilet Cleaner", price: "Negotiable", desc: "Powerful toilet cleaner designed for tough stains and long-lasting shine." },
  { id: 6, image: "picb6.jpeg", title: "Sukh Bathroom Cleaner", category: "Bathroom Cleaner", price: "Negotiable", desc: "Advanced bathroom cleaner for removing soap scum, stains, and germs." },
  { id: 7, image: "picb7.jpeg", title: "Sukh Dish Wash", category: "Dish Wash", price: "Negotiable", desc: "High-foam dishwashing liquid that cuts grease and leaves utensils sparkling clean." },
  { id: 8, image: "picb8.jpeg", title: "Multisurface Glass Cleaner", category: "Glass Cleaner", price: "Negotiable", desc: "Streak-free glass and surface cleaner for crystal clear shine." },
  { id: 9, image: "picb9.jpeg", title: "Multipurpose Liquid Cleaner", category: "Multipurpose Cleaner", price: "Negotiable", desc: "Versatile multipurpose cleaner suitable for all household cleaning needs." },

  { id: 10, image: "picb10.jpeg", title: "Sukh Floor Cleaner Lime", category: "Floor Cleaner", price: "Negotiable", desc: "Lime-scented floor cleaner for hygienic and fresh floors." },
  { id: 11, image: "picb11.jpeg", title: "Sukh Phenyl Rose", category: "Phenyl", price: "Negotiable", desc: "Rose fragrance phenyl for effective cleaning and pleasant aroma." },
  { id: 12, image: "picb12.jpeg", title: "Sukh Phenyl Pine", category: "Phenyl", price: "Negotiable", desc: "Pine-scented phenyl with strong antibacterial properties." },
  { id: 13, image: "picb13.jpeg", title: "Sukh Bathroom Cleaner Plus", category: "Bathroom Cleaner", price: "Negotiable", desc: "Extra-strong bathroom cleaner for stubborn stains and germs." },
  { id: 14, image: "picb14.jpeg", title: "Sukh Glass Cleaner Plus", category: "Glass Cleaner", price: "Negotiable", desc: "Advanced glass cleaner for mirrors and windows." },
  { id: 15, image: "picb15.jpeg", title: "Sukh Dish Wash Lemon", category: "Dish Wash", price: "Negotiable", desc: "Lemon dishwash liquid with powerful grease-cutting formula." },

  { id: 16, image: "picb16.jpeg", title: "Sukh Multipurpose Cleaner", category: "Multipurpose Cleaner", price: "Negotiable", desc: "All-in-one cleaner for kitchen, floor, and surfaces." },
  { id: 17, image: "picb17.jpeg", title: "Sukh Toilet Cleaner Strong", category: "Toilet Cleaner", price: "Negotiable", desc: "Extra-strong toilet cleaner for deep stain removal." },
  { id: 18, image: "picb18.jpeg", title: "Sukh Floor Cleaner Floral", category: "Floor Cleaner", price: "Negotiable", desc: "Floral floor cleaner with long-lasting fragrance." },
  { id: 19, image: "picb19.jpeg", title: "Sukh Phenyl Lavender", category: "Phenyl", price: "Negotiable", desc: "Lavender phenyl for germ-free and fresh floors." },
  { id: 20, image: "picb20.jpeg", title: "Sukh Bathroom Cleaner Mint", category: "Bathroom Cleaner", price: "Negotiable", desc: "Mint bathroom cleaner for freshness and hygiene." },

  { id: 21, image: "picb21.jpeg", title: "Sukh Dish Wash Orange", category: "Dish Wash", price: "Negotiable", desc: "Orange-scented dishwash for sparkling utensils." },
  { id: 22, image: "picb22.jpeg", title: "Sukh Glass Cleaner Pro", category: "Glass Cleaner", price: "Negotiable", desc: "Professional glass cleaner with streak-free finish." },
  { id: 23, image: "picb23.jpeg", title: "Sukh Multipurpose Cleaner Plus", category: "Multipurpose Cleaner", price: "Negotiable", desc: "Enhanced multipurpose cleaner for daily cleaning." },
  { id: 24, image: "picb24.jpeg", title: "Sukh Phenyl Jasmine", category: "Phenyl", price: "Negotiable", desc: "Jasmine phenyl for deep cleaning and pleasant fragrance." },
  { id: 25, image: "picb25.jpeg", title: "Sukh Toilet Cleaner Max", category: "Toilet Cleaner", price: "Negotiable", desc: "Maximum power toilet cleaner for tough stains." },

  { id: 26, image: "picb26.jpeg", title: "Sukh Floor Cleaner Herbal", category: "Floor Cleaner", price: "Negotiable", desc: "Herbal floor cleaner safe for daily use." },
  { id: 27, image: "picb27.jpeg", title: "Sukh Bathroom Cleaner Herbal", category: "Bathroom Cleaner", price: "Negotiable", desc: "Herbal bathroom cleaner with antibacterial protection." },
  { id: 28, image: "picb28.jpeg", title: "Sukh Dish Wash Power", category: "Dish Wash", price: "Negotiable", desc: "Power dishwash liquid for heavy grease removal." },
  { id: 29, image: "picb29.jpeg", title: "Sukh Glass Cleaner Herbal", category: "Glass Cleaner", price: "Negotiable", desc: "Herbal glass cleaner for clear and shiny surfaces." },
  { id: 30, image: "picb30.jpeg", title: "Sukh Multipurpose Herbal", category: "Multipurpose Cleaner", price: "Negotiable", desc: "Herbal multipurpose cleaner for eco-friendly cleaning." },

  { id: 31, image: "picb31.jpeg", title: "Sukh Phenyl Strong", category: "Phenyl", price: "Negotiable", desc: "Strong phenyl for industrial-level cleaning." },
  { id: 32, image: "picb32.jpeg", title: "Sukh Floor Cleaner Max", category: "Floor Cleaner", price: "Negotiable", desc: "Maximum strength floor cleaner for tough dirt." },
  { id: 33, image: "picb33.jpeg", title: "Sukh Bathroom Cleaner Max", category: "Bathroom Cleaner", price: "Negotiable", desc: "Heavy-duty bathroom cleaner for deep hygiene." },
  { id: 34, image: "picb34.jpeg", title: "Sukh Dish Wash Herbal", category: "Dish Wash", price: "Negotiable", desc: "Herbal dishwash gentle on hands." },
  { id: 35, image: "picb35.jpeg", title: "Sukh Glass Cleaner Max", category: "Glass Cleaner", price: "Negotiable", desc: "High-performance glass cleaner for perfect shine." },

  { id: 36, image: "picb36.jpeg", title: "Sukh Multipurpose Max", category: "Multipurpose Cleaner", price: "Negotiable", desc: "Maximum strength multipurpose cleaner." },
  { id: 37, image: "picb37.jpeg", title: "Sukh Phenyl Lemon", category: "Phenyl", price: "Negotiable", desc: "Lemon phenyl for freshness and hygiene." },
  { id: 38, image: "picb38.jpeg", title: "Sukh Toilet Cleaner Herbal", category: "Toilet Cleaner", price: "Negotiable", desc: "Herbal toilet cleaner safe and effective." },
  { id: 39, image: "picb39.jpeg", title: "Sukh Floor Cleaner Plus", category: "Floor Cleaner", price: "Negotiable", desc: "Plus formula floor cleaner for extra shine." },
  { id: 40, image: "picb40.jpeg", title: "Sukh Bathroom Cleaner Plus", category: "Bathroom Cleaner", price: "Negotiable", desc: "Plus bathroom cleaner for enhanced cleaning." },

  { id: 41, image: "picb41.jpeg", title: "Sukh Dish Wash Plus", category: "Dish Wash", price: "Negotiable", desc: "Plus dishwash for superior grease cutting." },
  { id: 42, image: "picb42.jpeg", title: "Sukh Glass Cleaner Ultra", category: "Glass Cleaner", price: "Negotiable", desc: "Ultra glass cleaner for professional use." },
  { id: 43, image: "picb43.jpeg", title: "Sukh Multipurpose Ultra", category: "Multipurpose Cleaner", price: "Negotiable", desc: "Ultra multipurpose cleaner for all surfaces." },
  { id: 44, image: "picb44.jpeg", title: "Sukh Phenyl Ultra", category: "Phenyl", price: "Negotiable", desc: "Ultra phenyl with high disinfecting power." },
  { id: 45, image: "picb45.jpeg", title: "Sukh Toilet Cleaner Ultra", category: "Toilet Cleaner", price: "Negotiable", desc: "Ultra toilet cleaner for toughest stains." }
];

  
  
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
              {/* <p className="text-green-600 font-bold text-lg mt-2">{p.price}</p> */}
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
