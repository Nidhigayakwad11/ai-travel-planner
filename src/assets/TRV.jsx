import React from "react";

const destinations = [
  {
    id: 1,
    name: "Istanbul, Turkey",
    image:
      "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
    services: ["Flights", "Hotels", "Resorts"],
  },
  {
    id: 2,
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlfGVufDB8fDB8fHww",
    services: ["Flights", "Hotels", "Tours"],
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    image:
      "https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWF8ZW58MHx8MHx8fDA%3D",
    services: ["Resorts", "Villas", "Adventures"],
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHx8MHx8fDA%3D",
    services: ["Flights", "Hotels", "Cultural Tours"],
  },
  {
    id: 5,
    name: "New York, USA",
    image:
      "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8fDA%3D",
    services: ["Flights", "Hotels", "Sightseeing"],
  },
  {
    id: 6,
    name: "Sydney, Australia",
    image:
      "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    services: ["Flights", "Hotels", "Beaches"],
  },
  {
    id: 7,
    name: "Rome, Italy",
    image:
      "https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Um9tZSUyQyUyMEl0YWx5fGVufDB8fDB8fHww",
    services: ["Flights", "Hotels", "Historical Tours"],
  },
  {
    id: 8,
    name: "Cape Town, South Africa",
    image:
      "https://images.unsplash.com/photo-1580060860978-d479ebf95a53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FwZSUyMFRvd24lMkMlMjBTb3V0aCUyMEFmcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    services: ["Flights", "Hotels", "Safaris"],
  },
  {
    id: 9,
    name: "Rio de Janeiro, Brazil",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhemlsfGVufDB8fDB8fHww",
    services: ["Flights", "Hotels", "Carnival Tours"],
  },
  {
    id: 10,
    name: "Moscow, Russia",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1287&auto=format&fit=crophttps://images.unsplash.com/photo-1495542779398-9fec7dc7986c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9zY293fGVufDB8fDB8fHww",
    services: ["Flights", "Hotels", "Cultural Tours"],
  },
  {
    id: 11,
    name: "Bangkok, Thailand",
    image:
      "https://plus.unsplash.com/premium_photo-1661963804020-e93b8d27139e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFuZ2tvayUyQyUyMFRoYWlsYW5kfGVufDB8fDB8fHww",
    services: ["Flights", "Hotels", "Street Food Tours"],
  },
  {
    id: 12,
    name: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
    services: ["Flights", "Hotels", "Shopping"],
  },
];

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback: "This trip planner made my vacation unforgettable!",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    name: "Mark Smith",
    feedback: "I loved the personalized itinerary. Highly recommend!",
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Sara Lee",
    feedback: "Fantastic service and great recommendations!",
    location: "Chicago, IL",
  },
  {
    id: 4,
    name: "John Doe",
    feedback: "A seamless experience from start to finish.",
    location: "Miami, FL",
  },
  {
    id: 5,
    name: "Emma Brown",
    feedback: "I can't wait to use this service again for my next trip!",
    location: "San Francisco, CA",
  },
];

const TRV = () => {
  return (
    <>
      <section className="relative flex h-[600px] w-full items-center justify-center bg-home-header">
        {/* Background Image */}
        <img
          alt="travel-header"
          loading="eager"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-75"
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&q=75&fit=crop&w=1920"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center text-center text-white space-y-6 px-6">
          {/* Travel Deal Badge */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-24 rounded-full border  px-3 py-1 text-sm font-medium text-gray-300 shadow-md transition-all hover:scale-105 hover:shadow-lg backdrop-blur-md"
            href="https://www.producthunt.com/"
          >
            <span className="rounded-full bg-[#72ea42] px-2 py-0.5 text-white">
              HOT DEAL!
            </span>
            <span className="ml-2">
              Exclusive 20% Off on Your Next Adventure
            </span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <h2 className="text-lg font-semibold tracking-wide md:text-3xl lg:text-4xl text-[#72ea42] ">
            Explore the World
          </h2>
          <h1 className="text-4xl font-extrabold uppercase leading-snug md:text-6xl lg:text-7xl drop-shadow-lg">
            Discover & Travel
          </h1>
          <p className="text-lg font-medium lg:text-xl text-gray-300">
            Find breathtaking destinations, curated packages, and unforgettable
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-5 ">
            <a href="/create-trip">
              <button className="rounded-full bg-[#72ea42]  px-8 py-3 text-lg font-semibold text-gray-900 transition-all duration-300 hover:bg-[#ffae42] hover:scale-105 shadow-lg">
                Explore Now
              </button>
            </a>
            <a href="/my-trips">
              <button className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-lg">
                MY Trip
              </button>
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-gray-400 text-sm">
            Hassle-free bookings. Personalized experiences. 24/7 support.
          </p>

          {/* Trusted By */}
          <div className="text-gray-300 text-sm font-medium">
            Trusted by 10,000+ travelers worldwide
          </div>
          <div className="flex -space-x-4 rtl:space-x-reverse mt-2">
            {["men/1", "women/2", "men/3", "women/4", "men/5", "women/6"].map(
              (img, index) => (
                <img
                  key={index}
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src={`https://randomuser.me/api/portraits/${img}.jpg`}
                  alt="user"
                />
              )
            )}
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600"
              href="#"
            >
              +99
            </a>
          </div>
        </div>
      </section>
      <div className="p-6">
        {/* Heading and Subheading */}
        <div className="text-center mb-6">
          <h2 className="text-5xl py-4 font-bold text-gray-800">
            Explore Top Destinations
          </h2>
          <p className="text-gray-600 mt-1 text-lg">
            Discover amazing places with exceptional services tailored just for
            you.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 px-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="flex items-center gap-4 rounded-xl border p-4 shadow-md"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="aspect-square rounded-lg w-[90px] h-[90px] object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-gray-700">
                  {destination.name}
                </p>
                <p className="text-sm text-gray-600">
                  {destination.services.map((service, index) => (
                    <span key={index}>
                      {service}
                      {index !== destination.services.length - 1 && (
                        <span className="mx-2">•</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mb-5 p-16 grid gap-[12px] md:mb-20 md:grid-cols-2 lg:gap-[24px]">
        {/* Main Heading and Subheading */}
        <div className="col-span-2 text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Explore & Book Your Perfect Trip
          </h1>
          <p className="text-lg text-gray-700 mt-3">
            Find the best flights and hotels for your next adventure at top
            destinations worldwide.
          </p>
        </div>

        {/* Flights Card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div
            className="flex text-white h-[600px] items-end rounded-[20px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1715350419863-75aec02c2e64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZsaWdodCUyMG9uJTIwYWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D')",
            }}
          >
            <div className="w-full text-center rounded-b-[20px] bg-gradient-to-t from-[#121212]/[.75] pb-[24px]">
              <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="tracking-tight font-bold text-[40px]">
                  Flights
                </h3>
                <p className="text-sm text-inherit">
                  Search and book flights to top destinations with ease.
                </p>
              </div>
              <div className="items-center flex justify-center p-0">
                <a
                  className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold 
            bg-primary text-primary-foreground hover:bg-[#9BE0C8] active:bg-[#82CBB2] focus:bg-[#A5EBD3] 
            h-[48px] px-[16px] rounded-[4px] py-[8px] gap-1 transition-colors"
                >
                  <span>Find Flights</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div
            className="flex text-white h-[600px] items-end rounded-[20px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <div className="w-full text-center rounded-b-[20px] bg-gradient-to-t from-[#121212]/[.75] pb-[24px]">
              <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="tracking-tight font-bold text-[40px]">Hotels</h3>
                <p className="text-sm text-inherit">
                  Book top-rated hotels and resorts for a comfortable stay.
                </p>
              </div>
              <div className="items-center flex justify-center p-0">
                <a
                  className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold 
            bg-primary text-primary-foreground hover:bg-[#9BE0C8] active:bg-[#82CBB2] focus:bg-[#A5EBD3] 
            h-[48px] px-[16px] rounded-[4px] py-[8px] gap-1 transition-colors"
                  href="/hotels"
                >
                  <span>Find Hotels</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16 px-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            See how we’ve helped travelers book their dream vacations!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial Card */}
          {[
            {
              name: "Sophia Williams",
              location: "New York, USA",
              review:
                "Booking was smooth, and the hotel was just perfect! Highly recommended.",
              image: "https://randomuser.me/api/portraits/women/45.jpg",
              rating: 5,
            },
            {
              name: "James Anderson",
              location: "London, UK",
              review:
                "The flight search tool helped me find the best deal! Super convenient!",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              rating: 4,
            },
            {
              name: "Emily Carter",
              location: "Sydney, Australia",
              review:
                "A seamless booking experience and fantastic customer service!",
              image: "https://randomuser.me/api/portraits/women/29.jpg",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-6 shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <img
                  className="h-14 w-14 rounded-full border-2 border-gray-300"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                  {/* Star Ratings */}
                  <div className="flex mt-1 text-yellow-400">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic">
                “{testimonial.review}”
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className=" text-black bg-gradient-to-b from-blue-100 to-white text-center py-16 px-8">
        <h2 className="text-4xl font-bold">Ready to Explore?</h2>
        <p className="text-lg mt-2">
          Book your dream destination with ease and confidence.
        </p>
        <a
          href="/book-now"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md transition hover:bg-gray-200"
        >
          Get Started
        </a>
      </section>
      <footer className="bg-gray-900 text-white py-10 px-8 mt-16">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-sm text-gray-400 mt-2">
              We help travelers find the best destinations, flights, and hotels
              with ease.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 text-sm text-gray-400 space-y-2">
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/destinations" className="hover:text-white">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/hotels" className="hover:text-white">
                  Hotels
                </a>
              </li>
              <li>
                <a href="/flights" className="hover:text-white">
                  Flights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="mt-2 text-sm text-gray-400 space-y-2">
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex gap-4 mt-3">
              <a href="#" className="hover:text-gray-400">
                🔵 Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                🔵 Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                🔵 Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Travel Booking. All rights reserved.
          <br />
          Made with ❤️ by{" "}
          <span className="text-white text-xl font-semibold">
            Nidhi Gayakwad
          </span>
        </div>
      </footer>
    </>
  );
};

export default TRV;
