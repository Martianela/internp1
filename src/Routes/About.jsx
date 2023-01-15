import React from "react";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  const websiteData = {
    title: "React Application",
    description:
      "Our website is a cutting-edge web application that has been expertly crafted using the latest technologies and best practices in web development. Built using React, a popular JavaScript library for building user interfaces, the website offers a smooth and seamless user experience. The user-friendly design and easy navigation make it a pleasure to use. The home page features an image slider that displays beautiful images and grabs the user's attention. The items displayed on the home page are arranged in a grid format, which makes it easy for users to browse and find what they are looking for. Each item is displayed with a title, and when clicked, the user is taken to a full description of the item.The about page provides valuable information about the website and its key features. This page is designed to give users a better understanding of what the website is all about and what they can expect from it.The profile page is dedicated to the person who created the website, it shows details of the person and their role in the website creation.The website has been designed using Tailwind CSS, a utility-first CSS framework that can help you quickly build custom designs. This framework allows for flexibility and ease of customization, making it easy to create a unique and visually appealing design. The website is also fully responsive, meaning it is optimized for all devices and screen sizes. Navigation between the different pages of the website is made simple and straightforward thanks to React Router, a powerful library for handling client-side routing. This ensures that the application's state is maintained, even as the user navigates through the website.Overall, our website is built to provide a fantastic user experience and is designed to be fast, responsive, and easy to use. We are confident that users will find it to be a valuable resource and will enjoy using it",
  };
  return (
    <div>
      <Navbar />
      <Feed data={websiteData} />
      <Footer />
    </div>
  );
};

export default About;
