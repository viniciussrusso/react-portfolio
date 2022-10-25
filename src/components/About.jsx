import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white
      "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  hover:text-cyan-500">
            About
          </p>
        </div>

        <p className="text-xl mt-3">Hey, there!</p>

        <p className="text-xl text-justify mt-3">
          I am a graduate with a BSc in Computing from the National College of
          Ireland. I have been passionate about programming since my teenage
          hood. I have always enjoyed watching tutorials and learning about web
          development. Then, in 2019 I enrolled myself for a computing degree.
        </p>

        <p className="text-xl text-justify mt-3">
          Since 2019, I have learnt several Programming Concepts, most of them
          through Java, and Python. I have also built numerous databases using
          MongoDB, and MySQL. During these years I started to learn HTML, CSS,
          JavaScript, Bootstrap, and React.js, and I enjoyed it so much that I
          decided to become a Full Stack Web Developer.
        </p>

        <p className="text-xl text-justify mt-3">
          During my leisure activities, I enjoy being surrounded by nature,
          family, and friends. I also enjoy discussing politics, reading books,
          and exercising.
        </p>
      </div>
    </div>
  );
};
