import { loadContent } from '../data';

export default function AboutUs() {
  const content = loadContent();

  var content1 = 'At our company, we bring together innovation, reliability, and excellence to deliver a diverse range of services designed to meet modern business needs. We operate across three major domains—Trading, Artificial jewelries, and Facility Support Services, including Housekeeping and Stationery Supplies. With a commitment to quality and customer satisfaction, we aim to be a trusted partner for individuals and organizations seeking smart, efficient, and cost-effective solutions. Our trading division delivers high-quality products with timely service. Our housekeeping and stationery services ensure smooth daily operations, enabling our clients to focus on what truly matters. Driven by strong values, expertise, and a focus on continuous improvement, we are on a mission to deliver superior service, seamless connectivity, and long-lasting partnerships.';

  return (
    <div
      className="min-h-full overflow-auto no-scrollbar bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/sukhwatermark3.png')" }}
    >
      <div className=" p-6 space-y-14 rounded-xl h-screen overflow-auto no-scrollbar shadow-xl ">

        <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #8B6C1F, #C8A951, #FFD700, #D4AF37, #B8860B)"
  }}>Sukhkarta Enterprises</h2>
        
        <div className="bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
        <h6 className="my-2 font-bold bg-clip-text text-transparent text-xl " style={{
    backgroundImage:
      "linear-gradient(90deg, #C0C0C0, #E8E8E8, #FFFFFF, #D9D9D9, #A9A9A9)"
  }}>About Us</h6>
        <p className="text-left">{content1}</p>
        </div>

        <div className="mt-6 bg-white/50 p-6 rounded-xl shadow-xl backdrop-blur-xs">
          <h6 className="font-bold my-2 text-transparent bg-clip-text text-xl" style={{
    backgroundImage:
      "linear-gradient(90deg, #C0C0C0, #E8E8E8, #FFFFFF, #D9D9D9, #A9A9A9)"
  }}>Vision</h6>
          <ul className="list-disc pl-5 space-y-2">
            <li>We specialize in trading high-quality industrial and commercial market equipment.</li>
            <li>Our portfolio includes premium hygienic cleaning solutions.</li>
            <li>We provide a complete range of stationery and office essentials.</li>
            <li>Our safety equipment division delivers industry-standard protective gear.</li>
            <li>We also trade in modern and stylish artificial jewellery.</li>
            <li>With a commitment to quality, timely delivery, and customer trust.</li>
          </ul>
        </div>

        {content.images['about'] && (
          <img
            src={content.images['about']}
            alt="About"
            className="mt-4 rounded max-w-md"
          />
        )}

      </div>
    </div>
  );
}