import React, { useState, useMemo } from "react";

// import { loadContent } from '../data'; // Agar data file se aa raha hai to uncomment karein

// TypeScript interface for Product
interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  desc: string;
}

export default function Trading() {
  // const content = loadContent(); // Agar external data use karna ho

  const products: Product[] = [
    { id: 1, image: "picb1.jpeg", title: "Antibacterial White Phenyl", category: "Phenyl", price: "Rs. XXX", desc: "High-quality antibacterial white phenyl for powerful cleaning and hygiene." },
    { id: 2, image: "picb2.jpeg", title: "Sukh Toilet Cleaner", category: "Toilet Cleaner", price: "Rs. XXX", desc: "Strong toilet cleaning formula for removing stains and ensuring freshness." },
    { id: 3, image: "picb3.jpeg", title: "Antibacterial Black Phenyl", category: "Phenyl", price: "Rs. XXX", desc: "Premium antibacterial black phenyl ideal for deep cleaning and disinfecting." },
    { id: 4, image: "picb4.jpeg", title: "Sukh Floor Cleaner", category: "Floor Cleaner", price: "Rs. XXX", desc: "Effective floor cleaner that removes dirt and leaves a refreshing fragrance." },
    { id: 5, image: "picb5.jpeg", title: "Sukh Toilet Cleaner", category: "Toilet Cleaner", price: "Rs. XXX", desc: "Powerful toilet cleaner designed for tough stains and long-lasting shine." },
    { id: 6, image: "picb6.jpeg", title: "Sukh Bathroom Cleaner", category: "Bathroom Cleaner", price: "Rs. XXX", desc: "Advanced bathroom cleaner for removing soap scum, stains, and germs." },
    { id: 7, image: "picb7.jpeg", title: "Sukh Dish Wash", category: "Dish Wash", price: "Rs. XXX", desc: "High-foam dishwashing liquid that cuts grease and leaves utensils sparkling clean." },
    { id: 8, image: "picb8.jpeg", title: "Multisurface Glass Cleaner", category: "Glass Cleaner", price: "Rs. XXX", desc: "Streak-free glass and surface cleaner for crystal clear shine." },
    { id: 9, image: "picb9.jpeg", title: "Multipurpose Liquid Cleaner", category: "Multipurpose Cleaner", price: "Rs. XXX", desc: "Versatile multipurpose cleaner suitable for all household cleaning needs." },
    { id: 10, image: "picb10.jpeg", title: "SS Scrubber Patta", category: "Scrubber", price: "Rs. XXX", desc: "Stainless steel scrubber pack for heavy-duty kitchen cleaning." },
    { id: 11, image: "picb11.jpeg", title: "SS Scrubber 10gm", category: "Scrubber", price: "Rs. XXX", desc: "Individual 10-gram stainless steel scrubbers for removing tough stains." },
    { id: 12, image: "picb12.jpeg", title: "Table Top Napkin Dispenser", category: "Dispenser", price: "Rs. XXX", desc: "Compact white table-top dispenser for easy napkin access." },
    { id: 13, image: "picb13.jpeg", title: "Push Tall Broom 18 Inch", category: "Broom", price: "Rs. XXX", desc: "18-inch heavy-duty push broom with blue bristles for wide-area sweeping." },
    { id: 14, image: "picb14.jpeg", title: "Heavy Woolen Dry Mop Set 24 Inch", category: "Mop", price: "Rs. XXX", desc: "Professional 24-inch dry mop with heavy woolen fibers for dust collection." },
    { id: 15, image: "picb15.jpeg", title: "Push Tall Broom 24 Inch", category: "Broom", price: "Rs. XXX", desc: "Extra-wide 24-inch industrial push broom for efficient floor cleaning." },
    { id: 16, image: "picb16.jpeg", title: "Vacuum Cleaner, Wet-Dry, 15 Litre", category: "Cleaning Equipment", price: "Rs. XXX", desc: "High-capacity 15L wet and dry industrial vacuum cleaner on wheels." },
    { id: 17, image: "picb17.jpeg", title: "Hand Dryer", category: "Bathroom Accessory", price: "Rs. XXX", desc: "Automatic high-speed hand dryer for hygienic restroom use." },
    { id: 18, image: "picb18.jpeg", title: "Plastic Scrubber", category: "Scrubber", price: "Rs. XXX", desc: "Multi-colored plastic mesh scrubbers for non-scratch cleaning." },
    { id: 19, image: "picb19.jpeg", title: "Wheel Dustbin 120LTR", category: "Waste Management", price: "Rs. XXX", desc: "Large 120-liter industrial dustbin with wheels, available in red and yellow." },
    { id: 20, image: "picb20.jpeg", title: "Wringer Trolley 3 Bucket 60 LTR", category: "Mop Trolley", price: "Rs. XXX", desc: "Triple bucket wringer trolley with a 60-liter capacity for large-scale floor cleaning." },
    { id: 21, image: "picb21.jpeg", title: "Glass Wiper", category: "Glass Cleaner", price: "Rs. XXX", desc: "Handheld glass wipers available in multiple colors for windows and mirrors." },
    { id: 22, image: "picb22.jpeg", title: "Microfiber Duster 40x40cm", category: "Duster", price: "Rs. XXX", desc: "Standard 40x40cm microfiber cleaning cloths for dusting and polishing." },
    { id: 23, image: "picb23.jpeg", title: "Alfa 21 Inch Wiper", category: "Floor Wiper", price: "Rs. XXX", desc: "21-inch heavy-duty Alfa floor wiper for efficient water removal." },
    { id: 24, image: "picb24.jpeg", title: "Microfiber Duster 500GSM", category: "Duster", price: "Rs. XXX", desc: "High-density 500GSM microfiber towels for superior absorption." },
    { id: 25, image: "picb25.jpeg", title: "Venus 18 Inch Wiper", category: "Floor Wiper", price: "Rs. XXX", desc: "18-inch Venus brand floor wiper for domestic and commercial use." },
    { id: 26, image: "picb26.jpeg", title: "Toilet Roll 6 In 1", category: "Paper Product", price: "Rs. XXX", desc: "Value pack of six soft white toilet paper rolls." },
    { id: 27, image: "picb27.jpeg", title: "Tissue Napkin", category: "Paper Product", price: "Rs. XXX", desc: "Bulk pack of white soft tissue napkins for daily use." },
    { id: 28, image: "picb28.jpeg", title: "Maximo Double Hockey Toilet Brush", category: "Toilet Cleaner", price: "Rs. XXX", desc: "Ergonomically designed double-sided hockey-style toilet cleaning brush." },
    { id: 29, image: "picb29.jpeg", title: "Household Gloves", category: "Safety Wear", price: "Rs. XXX", desc: "Durable blue rubber gloves for protecting hands during household chores." },
    { id: 30, image: "picb30.jpeg", title: "Tyle Tile Brush", category: "Brush", price: "Rs. XXX", desc: "Handheld tile and grout brush with a sturdy handle and blue abrasive pad." },
    { id: 31, image: "picb31.jpeg", title: "Green Pad 4x6 10pcs Set", category: "Scrubber", price: "Rs. XXX", desc: "Pack of 10 heavy-duty green scouring pads for kitchen and household cleaning." },
    { id: 32, image: "picb32.jpeg", title: "Diamond Jala Ceiling Brush", category: "Broom", price: "Rs. XXX", desc: "Fan-shaped ceiling duster with a long pole for removing cobwebs and dust." },
    { id: 33, image: "picb33.jpeg", title: "Aqua Double Hockey Toilet Brush", category: "Toilet Cleaner", price: "Rs. XXX", desc: "Double-sided blue toilet brush designed for reaching under the rim." },
    { id: 34, image: "picb34.jpeg", title: "Urinal Screen Mat", category: "Bathroom Accessory", price: "Rs. XXX", desc: "Anti-splash scented urinal screens available in various colors to maintain restroom hygiene." },
    { id: 35, image: "picb35.jpeg", title: "Gobhi Jala Ceiling Brush", category: "Broom", price: "Rs. XXX", desc: "Round 'Gobhi' style ceiling duster with extendable poles for high-reach cleaning." },
    { id: 36, image: "picb36.jpeg", title: "Floor Duster 24x24", category: "Duster", price: "Rs. XXX", desc: "Large 24x24 inch heavy-duty cotton floor cloths with a red stripe." },
    { id: 37, image: "picb37.jpeg", title: "Floor Duster 18x18", category: "Duster", price: "Rs. XXX", desc: "Standard 18x18 inch durable cotton floor cleaning cloth." },
    { id: 38, image: "picb38.jpeg", title: "Glass Duster 18x18", category: "Duster", price: "Rs. XXX", desc: "Soft 18x18 inch cotton glass cleaning cloths for streak-free surfaces." },
    { id: 39, image: "picb39.jpeg", title: "Check Duster 18x18", category: "Duster", price: "Rs. XXX", desc: "Checked pattern 18x18 inch multi-purpose cotton duster for kitchen or table cleaning." },
    { id: 40, image: "picb40.jpeg", title: "Check Duster 20x20", category: "Duster", price: "Rs. XXX", desc: "Large 20x20 inch multi-colored checked cotton duster for kitchen and general cleaning." },
    { id: 41, image: "picb41.jpeg", title: "Floor Duster 33x33", category: "Duster", price: "Rs. XXX", desc: "Extra-large 33x33 inch industrial-grade cotton floor duster with green and red border stripes." },
    { id: 42, image: "picb42.jpeg", title: "Big Dust Pan", category: "Cleaning Accessory", price: "Rs. XXX", desc: "Durable, large-capacity plastic dustpan in a vibrant purple color with an ergonomic handle." },
    { id: 43, image: "picb43.jpeg", title: "Ironman Floor Wiper 20 Inch", category: "Floor Wiper", price: "Rs. XXX", desc: "Heavy-duty 20-inch Ironman brand floor wiper with a sturdy yellow metal frame and handle." },
    { id: 44, image: "picb44.jpeg", title: "Bathroom Caption 12 Inch Wiper", category: "Bathroom Accessory", price: "Rs. XXX", desc: "Compact 12-inch bathroom wiper featuring a teal body and a decorative multi-colored blade base." },
    { id: 45, image: "picb45.jpeg", title: "Microfiber Dry Mop Set 24 Inch", category: "Mop", price: "Rs. XXX", desc: "Professional 24-inch dry mop set with high-density microfiber fringe for efficient dust trapping." }
  ];

  // --- STATE MANAGEMENT ---
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // 1. Extract Unique Categories for the Dropdown
  const categories = useMemo(() => {
    const uniqueCats = new Set(products.map(p => p.category));
    return ["All", ...Array.from(uniqueCats).sort()];
  }, [products]);

  // 2. Filter Products based on Category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory, products]);

  // 3. Pagination Logic on Filtered Products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Handle Category Change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  // Handle Page Scroll (Optional: Scroll to top when page changes)
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="p-4 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/sukhLogoWatermark1.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 text-center md:text-left">
          <h2
            className="text-4xl py-1 font-bold mb-3 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #001F3F, #003F7F, #005FBF, #007FFF, #3399FF)",
            }}
          >
            Trading Products
          </h2>

          <p
            className="text-lg font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #000000, #1a1a1a, #333333, #4d4d4d, #666666)",
            }}
          >
            We deal in trading of these products.
          </p>
        </div>

        {/* --- FILTER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white/80 p-4 rounded-lg shadow-sm backdrop-blur-sm">
          <label className="text-gray-700 font-semibold mb-2 md:mb-0 md:mr-4">
            Filter by Category:
          </label>
          <select 
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full md:w-64 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="mt-2 md:mt-0 ml-4 text-sm text-gray-500">
            Showing {filteredProducts.length} Results
          </div>
        </div>

        {/* --- PRODUCTS GRID --- */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((p) => (
              <div
                key={p.id}
                className="border rounded-xl shadow-md p-4 bg-white hover:shadow-xl transition flex flex-col"
              >
                <div className="relative">
                   <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-80 object-contain bg-gray-50 rounded-md mb-3"
                  />
                  <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {p.category}
                  </span>
                </div>
               
                <h4 className="text-xl font-semibold mt-auto">{p.title}</h4>
                <p className="text-gray-600 mt-2 text-sm line-clamp-2">{p.desc}</p>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <span className="font-bold text-gray-700">{p.price}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-xl">
            No products found in this category.
          </div>
        )}

        {/* --- PAGINATION CONTROLS --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12 mb-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md font-medium transition ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              }`}
            >
              Previous
            </button>
            
            <span className="text-gray-700 font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md font-medium transition ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}