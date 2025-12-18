import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, image: 'pict1.jpeg' },
    { id: 3, image: 'pict3.jpeg' },
    { id: 4, image: 'pict4.jpeg' },
    { id: 5, image: 'pict5.jpeg' },
    { id: 7, image: 'pict7.jpeg' },
    { id: 9, image: 'pict9.jpeg' },
    { id: 10, image: 'pict10.jpeg' },
  ];

  const dealProducts = [
  'picab1.jpeg',
  'picab2.jpeg',
  'picab3.jpeg',
  'picab4.jpeg',
];


  const galleryImages = [
    'pict1.jpeg',
    'pict3.jpeg',
    'pict4.jpeg',
    'pict5.jpeg',
    'pict7.jpeg',
    'pict9.jpeg',
    'pict10.jpeg',
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % products.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <>
      {/* 🔥 CSS INSIDE JSX */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div
  className="min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage: "url('/sukhwatermark3.png')",
    margin: 0,
    padding: 0,
        overflowX: "hidden",
      }}
    >
      {/* Webkit scrollbar killer */}
      <style>
        {`
          /* Chrome, Safari, Edge */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Firefox */
          html {
            scrollbar-width: none;
          }

          body {
            margin: 0;
            overflow-x: hidden;
      }
    `}
      </style>
        <div className="p-6 space-y-16 h-screen overflow-auto no-scrollbar">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8B6C1F, #C8A951, #FFD700, #D4AF37, #B8860B)",
            }}>
            Sukhkarta Enterprises
          </h2>

          {/* Product Carousel */}
          <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Products</h3>

            <div className="flex items-center justify-between gap-2">

              <button
                onClick={prevSlide}
                className="p-2 bg-gray-800 text-white rounded-full shrink-0"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Images */}
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-center gap-4">

                  {/* Mobile - single image */}
                  <img
                    src={products[currentIndex].image}
                    className="block sm:hidden w-52 h-52 object-contain rounded-lg shadow-md"
                    alt="product"
                  />

                  {/* Tablet & Desktop */}
                  {[-1, 0, 1].map((offset) => {
                    const index =
                      (currentIndex + offset + products.length) % products.length;

                    return (
                      <img
                        key={index}
                        src={products[index].image}
                        className={`hidden sm:block rounded-lg object-cover transition-all duration-500 ${
                          offset === 0
                            ? 'w-60 h-60 opacity-100'
                            : 'w-40 h-40 opacity-60'
                        }`}
                        alt="product"
                      />
                    );
                  })}
                </div>
            </div>

    <button
      onClick={nextSlide}
      className="p-2 bg-gray-800 text-white rounded-full shrink-0"
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>


          {/* About */}
          <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p>
              Sukhkarta Enterprises is engaged in the trading of household and daily-use products, along with artificial jewellery and essential support services such as housekeeping and stationery supplies. We focus on providing quality products at the right value, ensuring reliable supply and customer satisfaction. Our aim is to support homes and businesses with dependable products and timely service, helping day-to-day operations run smoothly. With an honest approach, consistent quality, and a customer-first mindset, we work towards building long-term relationships based on trust and reliability.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>High quality trading solutions</li>
              <li>Premium hygienic products</li>
              <li>Stationery & office supplies</li>
              <li>Safety equipment</li>
              <li>Artificial jewellery</li>
            </ul>
          </div>

            {/* We Deal In These Products */}
          <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
            <h3 className="text-2xl font-bold mb-6 text-center">
              We Deal In These Products ....
            </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {dealProducts.map((img, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-3 flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt="product"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Company Details */}
          <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
            <h3 className="text-2xl font-bold mb-4">Company Details</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div><b>Welcome to:</b> Sukhkarta Enterprises</div>
              <div><b>Nature of Business:</b> Trading, Retail</div>
              <div><b>Total Employees:</b> --</div>
              <div><b>GST Registration Date:</b> 25-08-2025</div>
              <div><b>Legal Status:</b> Proprietorship</div>
              <div><b>Annual Turnover:</b> --</div>
              <div className="sm:col-span-2"><b>GST No:</b> ---</div>
            </div>
          </div>

          {/* Showcase Gallery */}
          <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 text-center">Product Showcase</h3>

            <div className="flex gap-4 animate-scroll whitespace-nowrap">
              {[...galleryImages, ...galleryImages].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className="h-40 w-64 rounded-lg object-cover shadow-md"
                  alt="gallery"
                />
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="border-t pt-8"></div>

          <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p><b>Company:</b> SUKHKARTA ENTERPRISES</p>
                <p><b>Business:</b> Trading & Retail</p>
                <p><b>Address:</b> Koot Mohalla, Near Girls School, Tigaon, Faridabad, Haryana, 121101</p>
              </div>

              <div>
                <p><b>Contact Person ( Owner ):</b> Puja Jha & Sourav Nagar</p>
                <p><b>Email:</b> sukhkartaaenterprises@gmail.com</p>
                <p><b>Phone:</b> +91 9999368077</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
