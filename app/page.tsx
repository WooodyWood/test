import React from "react";


const restaurantLogos = [
  { src: "/img/restaurant-logo1.png", alt: "Berry Fresh" },
  { src: "/img/restaurant-logo2.png", alt: "Code Carp" },
  { src: "/img/restaurant-logo3.png", alt: "Ramen Lab" },
  { src: "/img/restaurant-logo4.png", alt: "Papichulo" },
  { src: "/img/restaurant-logo5.png", alt: "La Masseria" },
  { src: "/img/restaurant-logo6.png", alt: "Dada" },
  { src: "/img/restaurant-logo7.png", alt: "Ravish" },
  { src: "/img/restaurant-logo8.png", alt: "KAPOW" },
  { src: "/img/restaurant-logo9.png", alt: "Storm House" },
  { src: "/img/restaurant-logo10.png", alt: "Isla & Co." },
  { src: "/img/restaurant-logo11.png", alt: "Howley's" },
];

const testimonials = [
  {
    name: "Doris & Daniel, SoFloDining",
    image: "/img/face1.png",
    text: `"Our Kind Diners membership paid for itself the first time we used it. We were able to save more than $150 in our first month, alone!"`,
  },
  {
    name: "Cory Reed, Jupiter",
    image: "/img/face2.png",
    text: `"Kind Diners Society is a Win/Win for diners, servers, and local restaurant owners. I’ll be a member for life!"`,
  },
  {
    name: "Karen Zacka, Hypoluxo",
    image: "/img/face3.png",
    text: `"In addition to giving me a chance to discover new restaurants, Kind Diners Society gives me an opportunity to make a difference in the world. It’s brilliant!"`,
  },
  {
    name: "Jim Kovalsky, WPB",
    image: "/img/face4.png",
    text: `"All it takes to make the world a better place is to be kind. If you can be kind and save money at the same time, that’s even better."`,
  },
];

const participatingRestaurants = [
  { 
    name: "MAY'S", 
    image: "/img/slice1.png", 
    description: "South Florida - Catering, Pop-Ups, Food Truck" 
  },
  { 
    name: "EL BLACK BEAN CAFE", 
    image: "/img/slice2.png", 
    description: "Palm Beach Gardens - Latin, Mexican, Tacos" 
  },
  { 
    name: "ANDY'S LATIN FOOD", 
    image: "/img/slice3.png", 
    description: "Boca Raton - Latin, Tacos, Cuban" 
  },
  { 
    name: "NICK & JOHNNY'S OSTERIA", 
    image: "/img/slice4.png", 
    description: "Juno Beach - Italian, Pizza" 
  },
];

export default function HeroSection() {



  return (
    <>
      <section
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: 'url("/img/7475ad091277dcd3f2cfad8adde9e3c9.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 pt-10 px-5">
          <header className="text-white justify-center">
            <div className="mx-auto flex items-center justify-between px-6">
              <div className="flex items-center">
                <img
                  src="/img/logo.png"
                  alt="Kind Diners Society"
                  className="h-26"
                />
              </div>
              <nav className="flex space-x-10">
                <a
                  href="#"
                  className="text-white hover:text-yellow-400"
                >
                  Search Restaurants
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:text-yellow-400"
                >
                  Surprise Tips
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:text-yellow-400"
                >
                  Join Today
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:text-yellow-400"
                >
                  Ambassador Program
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:text-yellow-400"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:text-yellow-400"
                >
                  Login/My Account
                </a>
              </nav>
            </div>
          </header>
        </div>

        <div className="relative container mx-auto px-6 py-24 z-10">
          <h1 className="text-5xl font-extrabold mb-4">
            You Save Big. <span className="text-yellow-400">We Give Back.</span>
          </h1>
          <p className="text-xl mb-8">
            Enjoy 20% off your entire check at 100+ popular South Florida
            restaurants every day!
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-orange-500 text-black px-12 py-3 rounded-[100px] text-xl font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">
              JOIN THE CLUB!
            </button>
            <button className="border-2 border-orange-500 text-white px-12 py-3 rounded-[100px] text-xl font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white">
              HOW IT WORKS
            </button>
          </div>
          <p className="absolute right-[780px] text-lg mt-8 w-1/6">
            Membership starts at only $8.99 per month for unlimited restaurant
            visits! Cancel anytime.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold mb-6">
            Imagine saving money whenever you visit these popular
            <br />
            South Florida Restaurants (and many more)!
          </h2>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
          <div className="flex flex-wrap justify-center gap-10 mb-10">
  {restaurantLogos.map((logo, index) => (
    <img
      key={index}
      src={logo.src}
      alt={logo.alt}
      className="h-16"
    />
  ))}
</div>
          </div>
          <button className="text-orange-500 text-2xl font-semibold hover:text-orange-600 focus:outline-none underline">
            View All Participating Restaurants & Venues
          </button>
        </div>
      </section>

      <section className="bg-white  py-24">
        <div className="container mx-auto flex items-center justify-center px-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-4">You Save Big</h2>
            <p className="text-xl mb-4">(It's like Happy Hour pricing 24/7!)</p>
            <p className="text-lg mb-8">
              20% off your entire check, 7 days a week
              <br />
              Unlimited restaurant visits
              <br />
              Honored at 100+ top-rated South Florida restaurants, food trucks,
              gourmet shops & even WPB Food Tours!
              <br />
              While you save big, we give back. (See below)
            </p>
            <button className="bg-orange-500 text-white px-12 py-3 rounded-[100px] text-xl font-semibold hover:bg-orange-600 focus:outline-none ml-4">
              SIGN ME UP!
            </button>
            <p className="text-sm text-gray-600 mt-4 w-1/2 text-center">
              Membership starts at only $8.99 per month. Most members save
              double that during their first restaurant visit! Cancel anytime
              (but you probably won’t want to!)
            </p>
          </div>

          <div className="relative w-full md:w-1/3 mt-12 md:mt-0">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative flex">
                <img
                  src="/img/Vector.svg"
                  alt="Receipt"
                  className="w-4/5 rounded-lg"
                />
                <img
                  src="/img/Check.png"
                  className="absolute h-[500px]  top-[-60px] right-10"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/img/fire.png"
              alt="We Give Back Logo"
              className="h-12 mr-4"
            />
            <h2 className="text-4xl font-extrabold text-gray-900">
              We Give Back
            </h2>
          </div>

          <p className="text-xl text-gray-600">
            Spreading Kindness through Surprise Tips
          </p>
        </div>

        <div className="container mx-auto px-24 flex flex-col md:flex-row items-center  w-full mb-12">
          <div className="w-3/4 md:w-1/2 mb-12 md:mb-0">
            <p className="text-sm text-gray-600 mb-4 w-3/4">
              Sept 2024 - Kind Diners & Flavor Palm Beach visit ONA Coastal
              Cuisine on Singer Island to surprise our server...
            </p>
            <img
              src="/img/Video.png"
              alt="Kind Diners Surprise"
              className="w-3/4 rounded-lg shadow-xl"
            />
          </div>

          <div className="w-full md:w-1/2 text-center my-0 md:text-left">
            <p className="text-lg text-gray-900 mb-6">
              A portion of our revenue is set aside, each month, to surprise a
              hardworking local restaurant employee with an unexpected surprise
              tip of $500 or more!
            </p>

            <p className="text-lg text-gray-900">
              Each month, a Kind Diners Society member is selected to join us to
              present the surprise, which becomes a gift on behalf of all of the
              members of Kind Diners Society.
            </p>
          </div>
        </div>
        <div className="w-1/3 container mx-auto px-6 text-center">
          <h2 className="text-lg  text-black mb-6">
            Kind Diners enjoy big savings at restaurants while knowing that
            their membership is helping to make a difference.
          </h2>

          <button className="bg-orange-500 text-white py-3 px-12 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 w-1/2">
            COUNT ME IN!
          </button>

          <p className="text-gray-400 mt-6 w-3/4 text-center mx-auto">
            Each month, we will set aside $1 of your membership and add it to
            the Kind Diners Surprise Tips Fund which will be used to make
            someone's day!
          </p>

          <div className="mt-6">
            <a href="#" className="text-lg font-semibold underline">
              View All Kind Diners Surprise Tips!
            </a>
          </div>
        </div>
      </section>

      <section
        className="py-10 relative bg-cover bg-center h-[fit] flex flex-col justify-center items-center text-center text-white bg-black"
        style={{
          backgroundImage: 'url("/img/svgFace.svg")',
        }}
      >
        <div className="container mx-auto text-center px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="p-6 text-center flex flex-col justify-between h-full">
      <div className="mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-64 h-64 rounded-full mx-auto"
        />
      </div>
      <p className="text-lg text-white mb-4">{testimonial.text}</p>
      <p className="font-semibold text-orange-500 mt-auto">{testimonial.name}</p>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <img
          src="/img/Card.png"
          className="absolute right-0 top-[50px]"
        ></img>
        <img src="/img/Phone.png" className="absolute left-[180px] top-0"></img>
        <div className="container mx-auto px-6 text-center w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Most members save double their membership fee after just one
            restaurant visit!
          </h2>

          <button className="bg-orange-500 text-white py-3 px-12 rounded-[100px] text-xl font-semibold hover:bg-orange-600 focus:outline-none mb-4">
            JOIN THE CLUB!
          </button>

          <p className="text-lg text-gray-700 mb-6 w-3/4 mx-auto">
            You’ll receive your digital membership card immediately so you can
            use it right away. Present your Kind Diners card at 100+
            participating restaurants and you’ll save 20% on your entire check
            every day! Unlimited uses throughout the month. Cancel anytime.
          </p>

          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 text-lg font-semibold"
          >
            FAQ's, Benefits & Restrictions
          </a>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
            Participating Restaurants Include...
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
  {participatingRestaurants.map((restaurant, index) => (
    <div key={index} className="rounded-lg overflow-hidden">
      <img src={restaurant.image} className="w-full h-64 object-cover" />
      <div className="py-6">
        <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
        <p className="text-gray-600">{restaurant.description}</p>
        <div className="mt-auto">
          <a
            href="#"
            className="text-blue-300 hover:text-orange-600 text-sm font-semibold"
          >
            Menu & Info
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="bg-orange-500 text-white py-3 px-12 rounded-lg text-lg font-semibold hover:bg-orange-600 focus:outline-none"
          >
            SEARCH RESTAURANTS
          </a>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: 'url("/img/d16ecf77db9c14a2656829de7433d845.png")',
        }}
      >
        <div className="container mx-auto px-6 bg-opacity-50 bg-black text-white  p-8 w-1/2 h-3/4">
          <h2 className="text-3xl font-extrabold mb-4">
            Subscribe for Weekly Updates
          </h2>
          <p className="text-lg mb-8">
            Weekly giveaways, invitations to Kind Diners Foodie Events, be the
            first to learn about new restaurants participating, and more!
          </p>
        <label>Enter your Email here</label>
          <form className="flex">
            <input
              type="email"
              className="px-4 py-2 bg-transparent text-gray-900 w-3/4 sm:w-2/3 focus:outline-none focus:ring-1 mr-2 border-b border-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black  hover:bg-orange-600 focus:outline-none sm:w-1/3"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-black text-white py-8">
        <div className="container px-6 flex justify-between">
        <div className="">
              <img
                src="/img/logo.png"
                alt="Kind Diners Society"
                className="h-18"
              />
            </div>

          <div className="flex flex-wrap justify-between mb-8 w-[50%]">
            
            <div className="w-1/2 md:w-1/4 mb-6 md:mb-0 ">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Join the Club
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Search Restaurants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Enormous Acts of Tipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Referral Program
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Join Our Mailing List
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Gift Center
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Restaurant Owner Login
                  </a>
                </li>
              </ul>
            </div>


          
          </div>
          
        </div>
        <div className="text-center text-sm">
            <p>&copy; Copyright Kind Diners Society 2023 © All Rights Reserved</p>
          </div>
      </footer>
    </>
  );
}
