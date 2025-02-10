import React, { useState, useRef } from "react"; 
import { motion } from "framer-motion"; 
import { FaEnvelope, FaPhone, FaBars } from "react-icons/fa"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import emailjs from "@emailjs/browser";

const imageData = {
  heroBackground: "https://images.pexels.com/photos/4427642/pexels-photo-4427642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  aboutSection: "https://images.pexels.com/photos/4492091/pexels-photo-4492091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  customDresses: [
    "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2307303/pexels-photo-2307303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
  formalWear: [
    "https://images.pexels.com/photos/6375747/pexels-photo-6375747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4937352/pexels-photo-4937352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28576622/pexels-photo-28576622/free-photo-of-minimalist-white-shirt-hanging-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
  ethnicWear: [
    "https://images.pexels.com/photos/8217656/pexels-photo-8217656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8489776/pexels-photo-8489776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/12095442/pexels-photo-12095442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
};

function App() {
  const formRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const servicekey = "service_5ssx1dj";
  const templateId = "template_vs5o268";
  const publicKey = "CYxZ5F6QR-tw4YKsD";

  emailjs
    .sendForm(servicekey, templateId, formRef.current, {
    publicKey: publicKey,
    })
    .then(
      (result) => {
        console.log("EmailJS Response:", result);
        alert("Message sent successfully!");
        // form.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send the message. Please try again.");
      }
    );
  };

  console.log(emailjs);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white py-6 shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-extrabold">Udaan Fashion World</h1>
          <ul
            className={`flex-col md:flex-row ${menuOpen ? "flex" : "hidden md:flex"} md:items-center md:space-x-6 bg-indigo-700 md:bg-transparent absolute top-16 left-0 w-full md:w-auto p-4 md:p-0 z-40 md:static transition-all duration-300 ease-in-out`}
          >            
            <li><a href="#about" className="hover:underline text-lg block md:inline-block text-white py-2 md:py-0">About Us</a></li>
            <li><a href="#products" className="hover:underline text-lg block md:inline-block text-white py-2 md:py-0">Products</a></li>
            <li><a href="#contact" className="hover:underline text-lg block md:inline-block text-white py-2 md:py-0">Contact</a></li>
          </ul>
          <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
            <FaBars />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white px-4"
        style={{ backgroundImage: `url('${imageData.heroBackground}')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-center p-8 bg-black bg-opacity-50 rounded-xl max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Welcome to <span className="text-indigo-400">Udaan Fashion World</span></h1>
          <p className="mt-4 text-2xl font-medium">Crafting High-Quality Tailored Garments for Every Occasion</p>
          <a href="#about" className="mt-6 inline-block bg-indigo-600 px-8 py-4 text-lg rounded-lg hover:bg-indigo-700">Learn More</a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">About Our Factory</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            At Udaan Fashion World, we take pride in our craftsmanship. With a team of dedicated tailors, we create garments that are beautiful, elegant, and crafted with perfection. From custom dresses to formal wear, we cater to diverse fashion needs.
          </p>
          <div className="flex justify-center mt-8">
            <img src={imageData.aboutSection} alt="Factory Team" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.entries(imageData).filter(([category]) => category !== 'heroBackground' && category !== 'aboutSection').map(([category, images]) => (
              <div className="bg-white shadow-xl p-6 rounded-lg hover:shadow-2xl" key={category}>
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  adaptiveHeight={true}
                >
                  {images.map((image, index) => (
                    <img key={index} src={image} alt={category} className="w-full rounded-lg mb-4" />
                  ))}
                </Slider>
                <h3 className="text-2xl font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, " $1")}</h3>
                <p className="text-gray-600">Explore our stunning collection crafted with precision and love.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-12">Interested in working with us? Fill out the form below, and we'll get back to you!</p>
          <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-left text-gray-700 text-lg font-semibold">Your Name:</label>
            <input name="from_name" type="text" className="w-full px-4 py-2 rounded-lg border text-lg" placeholder="John Doe" required />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-700 text-lg font-semibold">Phone Number:</label>
            <input name="from_number" type="tel" className="w-full px-4 py-2 rounded-lg border text-lg" placeholder="123-456-7890" required />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-700 text-lg font-semibold">Email:</label>
            <input name="from_email" type="email" className="w-full px-4 py-2 rounded-lg border text-lg" placeholder="example@example.com" required />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-700 text-lg font-semibold">Message:</label>
            <textarea name="message" className="w-full px-4 py-2 rounded-lg border text-lg" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-indigo-700">Submit</button>
        </form>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2025 Udaan Fashion World. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          {/* Email Icon with Link */}
          <a href="#" className="flex items-center space-x-2">
            <FaEnvelope className="text-xl hover:text-yellow-300" />
          </a>

          {/* Phone Icon with Link */}
          <a href="#" className="flex items-center space-x-2">
            <FaPhone className="text-xl hover:text-yellow-300" />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
