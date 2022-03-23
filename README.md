<p align="center"><img src="/frontend/public/images/Trippy-logos_black.png" width="300">  </p>

# Background and Overview
[Trippy](https://trippy-100.herokuapp.com/#/) is "Pinterest for Travel", where users can view, like and save various pictures that relate to different travel experiences, destinations, and lodging locations. Users are able to filter by trip type (relaxation, adventure, camping, etc.) and location. For example, if the user filters for a "relaxing vacation" in the "North America" region, the app will show images of experiences and resorts like "Spa day at Bora Bora St. Regis" or "Mimosas on South Beach". 

Users can also create custom lists. They can add images to their custom list by liking an image on the homepage. This allows users to 1) plan a future trip or 2) create a "bucket list" of things to do / places to visit for future reference. 

# Features
1. User Auth / Splash Page
<p align="center"><img src="/frontend/public/images/README_screenshots/splash_page.png" width="1000">  </p>

2. Home page populated with images of various destinations which can be filtered by region and type of trip (i.e. relaxation, adventure, camping, etc.)
<p align="center"><img src="/frontend/public/images/README_screenshots/home_page.png" width="1000">  </p>

3. Modal for each destination / image - When a user clicks on an image, it will open up a modal that contains details including the destination location, description, and maybe an external link to book or learn more. 
<p align="center"><img src="/frontend/public/images/README_screenshots/show_page.png" width="1000">  </p>

4. Users can create custom lists by liking images. For example, a user can create a custom list for an upcoming trip to India.
<p align="center"><img src="/frontend/public/images/README_screenshots/likes_page.png" width="1000">  </p>


# Technologies and Technical Challenges
MERN Stack
* Frontend: React, Redux, and Node.js
* Backend: MongoDB / Express, AWS S3 for media storage

Technical challenges:
* Reading data from MongoDB database and organizing for display
* Fetching data to build a popup modal for each pinned image
* Implementing the custom liked images list for each user


# Group Members
* Aagam Vakil, Shawn Fries, Yaakov Z

