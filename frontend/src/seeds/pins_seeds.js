const Pin = require("../../../models/Pin");
const mongoose = require("mongoose");
const db = require("../../../config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const pins = [
  // ***EXAMPLE***
  // new Pin({
  //   title: "",
  //   tripType: ["roadTrip", "adventure", "relaxation", "camping"],
  //   region: "",
  //   location: "",
  //   imageURL:
  //     "",
  //   description:
  //     "",
  //   extLink: "",
  // }),


  new Pin({
    title: "Pacific Coast Highway Road Trip",
    tripType: ["roadTrip"],
    region: "northAmerica",
    location: "California, USA",
    imageURL:
      "https://www.travelandleisure.com/thmb/zChIPwFln0Eczkyy6C3wtUSJm-c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PCH0815-brixy-bridge-d738137d42ed44aa835292cf33d6c7a5.jpg",
    description:
      "The traditional definition of the Pacific Coast Highway is to drive California Highway 1 from San Diego, CA, to Leggett, CA (or vice versa); you can extend by adding on U.S. Highway 101 through Northern California to drive up the Oregon and Washington coasts. (Or in reverse if you're headed southbound as I recommend).",
    extLink: "https://www.valisemag.com/pacific-coast-highway-guide/#:~:text=The%20traditional%20definition%20of%20the,headed%20southbound%20as%20I%20recommend).",
  }),

  new Pin({
    title: "The Ultimate Spanish RoadTrip",
    tripType: ["roadTrip", "adventure"],
    region: "europe",
    location: "Spain",
    imageURL:
      "https://www.wanderlustchloe.com/wp-content/uploads/2022/06/best-spain-road-trip.jpg",
    description:
      "From San Sebastian’s world-famous food scene and the attractions of Barcelona, to the incredible museums of Madrid, history of Granada and beaches on the Costa del Sol, this Spain road trip has it all!",
    extLink: "https://www.wanderlustchloe.com/spain-road-trip-itinerary/",
  }),

  new Pin({
    title: "Switzerland Road Trip",
    tripType: ["roadTrip"],
    region: "europe",
    location: "Switzerland",
    imageURL:
      "https://arzotravels.com/wp-content/uploads/2017/06/DSC_0124.jpg",
    description:
      "Switzerland — a destination you voted one of the most beautiful countries in the world — offers travellers a rewarding range of experiences. And there’s no better way to experience that range than on a Grand Tour of Switzerland. This unforgettable road trip route covers everything from glaciers and palm-backed lakeshores, to charming villages and buzzy cities.",
    extLink: "https://www.roughguides.com/articles/grand-tour-road-trip-guide-switzerland/",
  }),

  new Pin({
    title: "Bangkok to Krabi by motorbike",
    tripType: ["roadTrip"],
    region: "asia",
    location: "Thailand",
    imageURL:
      "https://i0.wp.com/remoteandafloat.com/wp-content/uploads/2018/10/southern-thailand-road-trip.jpg?fit=2000%2C1200&ssl=1",
    description:
      "The route is relatively straightforward. The roads were enjoyable and notably in great condition. Overall the driving was not challenging, except on motorways where the traffic moves fast so you have to have your wits about you. None of this compares to Bangkok – which is not for the faint hearted! Making the decision to explore Southern Thailand by motorbike has easily been one of the best and most rewarding experiences in all our travels. This journey gave us a wonderful overview of Thailand, as we were able to soak up many different aspects of this unique culture and diverse country.",
    extLink: "https://remoteandafloat.com/southern-thailand-road-trip/",
  }),

  new Pin({
    title: "Personalized Surf Lesson in the el Médano",
    tripType: [ "adventure"],
    region: "europe",
    location: "Granadilla, Spain",
    imageURL:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1229988-media_library/original/6f864aa8-d346-4fb1-8bf5-71552b880980.jpg?im_w=1440",
    description:
      "We will enjoy a totally private surf lesson on Playa Santa Maria del Mar one of the most attractive beginner waves in Cadiz. We will learn the theory, practical stretchin exercises. Once in the water we will slide into the waves and practice the technique to enjoy our session to the fullest. Being a private class we will learn and enjoy ourselves to the fullest.",
    extLink: "https://www.airbnb.com/experiences/1229988?location=Spain&currentTab=experience_tab&federatedSearchId=18820d7b-5a60-44f7-a876-436ca064dc10&searchId=badbd081-9ac6-43ef-b71a-60a61f537687&sectionId=0fdbe2d2-095c-466c-9cdd-9988f9d7b483",
  }),

  new Pin({
    title: "",
    tripType: ["roadTrip", "adventure", "relaxation", "camping"],
    region: "",
    location: "",
    imageURL:
      "",
    description:
      "",
    extLink: "",
  }),

  new Pin({
    title: "Private Tour to Giza Pyramids",
    tripType: ["adventure"],
    region: "europe",
    location: "Nazlet El-Semman, Egypt",
    imageURL:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1493395-media_library/original/1d1a2a35-9a0d-4c49-aed5-e29f37da1032.jpeg?im_w=1440",
    description:
      "Visit Egypt's finest historical attractions with a private guide. Visit the Saqqara Step Pyramid complex of Djoser and The Pyramid of Unas.",
    extLink: "https://www.airbnb.com/experiences/1493395?checkin=2024-02-08&checkout=2024-02-29&location=Egypt&currentTab=experience_tab&federatedSearchId=553634f8-3e72-464e-a963-d0bd05ebbbdd&searchId=797d60fe-47eb-413b-b418-9c6b1893fe4e&sectionId=2bfff154-e597-4687-ac56-130d962fb2bd",
  }),

  new Pin({
    title: "Six Senses Laamu",
    tripType: ["relaxation"],
    region: "asia",
    location: "Maldives",
    imageURL:
      "https://www.sixsenses.com/media/1760/laamu-maldives-swimming-pool.jpg?anchor=center&mode=crop&width=648&height=405&rnd=132266538870000000",
    description:
      "Amid lush tropical forest on a coral atoll, this remote luxury resort is reached by plane, then boat, from Malé Island. Lavish, palm-thatched villas are set in jungle on the main atoll, while overwater villas built on stilts are reached by wooden boardwalks. Featuring outdoor bathrooms with rainfall showers, all offer free Wi-Fi, satellite TV and minibars, as well as Bose sound systems, iPod docks, and tea and coffeemaking facilities. Some add private outdoor pools. Butler service is offered.",
    extLink: "https://www.sixsenses.com/en/resorts/laamu",
  }),

  new Pin({
    title: "COMO Shambhala Estate",
    tripType: [ "relaxation"],
    region: "asia",
    location: "Bali, Indonesia",
    imageURL:
      "https://media.cntraveler.com/photos/5a38046fb9876e5ce8bf3887/16:9/w_2240,c_limit/Hi_064562_44165214_Relaxation_area_at_Ojas.jpg",
    description:
      "Set in tropical rainforest, this polished spa resort on a 9-hectare estate lies on the banks of the Ayung River 10 km from the town of Ubud. Plush, traditionally furnished rooms and suites with verandas are housed in adjacent thatched properties and have Internet access, satellite TV and DVD players, along with 4-poster beds, minifridges and coffeemakers. Suites add whirlpool tubs. Villas include private outdoor pools. Room service is offered 24/7.",
    extLink: "https://www.comohotels.com/bali/como-shambhala-estate",
  }),

  new Pin({
    title: "Six Senses Douro Valley",
    tripType: ["relaxation"],
    region: "europe",
    location: "Douro Valley, Portugal",
    imageURL:
      "https://assets.vogue.com/photos/64ef7308225c2ffec8a70cde/master/w_1600,c_limit/ed2508_original.7jpg.png",
    description:
      "Portugal has become a hotbed of wellness activity in recent years, and with the arrival of Six Senses, it has made it onto the spa map. The group’s first European spa is set in a restored farmhouse in the hills of the Douro Valley, a Unesco World Heritage Site, with therapies offering a holistic focus. Integrated wellness checks can measure physiological biomarkers, and the Alchemy Bar workshop teaches how to make natural remedies. Beyond the spa are woods where you will find hiking trails and tree-hung meditation pods, and an added bonus is the wine library that takes full advantage of being in Portugal's wine region.",
    extLink: "https://www.sixsenses.com/en/resorts/douro-valley",
  }),

  new Pin({
    title: "Aqua Dome, Austria: Thermal Baths, Sauna World, Spa 3000 & Hotel",
    tripType: ["relaxation"],
    region: "europe",
    location: "Tirol, Austria",
    imageURL:
      "https://www.moonhoneytravel.com/wp-content/uploads/2021/12/moonhoneytravel_Aqua-Dome_Tirol_Austria-1.jpg",
    description:
      "Aqua Dome is arguably the most iconic thermal spa (“Therme” in German) in Austria, if not the entire European Alps.  With its floating basins and cone-shaped covered stairway, the whimsically-designed Therme is both futuristic and fantastical. Day and night, it looks like a beacon, beckoning you to bathe in its thermal waters amidst the mighty peaks of the Austrian Alps. Located in Längenfeld in Ötztal Valley, Aqua Dome welcomes day visitors as well as hotel guests throughout the entire year. ",
    extLink: "https://www.aqua-dome.at/en/",
  }),
];

var done = 0;
for (let i = 0; i < pins.length; i++) {
  pins[i].save(() => {
    done++;
    if (done === pins.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
  console.log("Database seed successful");
}
