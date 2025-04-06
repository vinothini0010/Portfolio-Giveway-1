const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project /}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              PetPals
          </h1>
            <p className="text-lg text-gray-700 mb-4">
              A MERN stack pet adoption platform where users can adopt pets,
              view profiles, and connect with animal shelters. Built using
              MongoDB, Express, React, Node.js, and styled with Tailwind CSS.
            </p>
            <a
              //href="https://petpalsss.netlify.app/login"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              
            </a>
          </div>

          {/* Biosta AI Project /}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Biosta AI
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              An AI-based platform //that optimizes user bio data using the Gemini
              API. Developed with React.js, this app helps users to improve
              their biological data using advanced AI algorithms.
            </p>
            <a
              //href="https://biosta.netlify.app/"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Bank customer churn and loan eligibility amount prediction using ML model
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            This project focuses on predicting bank customer churn and estimating loan eligibility amounts using machine learning models.
It analyzes customer data to identify potential churn risks and assess their loan qualification.
Tech stack includes Python, Pandas, NumPy, and scikit-learn for model building and evaluation.
The goal is to help banks make data-driven decisions and reduce financial risk.


            </p>
            <a
              href="https://www.npmjs.com/package/logzap"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              
            </a>
          </div>

         
        </div>

        {/*Project 3 and 4 in one row /}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* CoderLobby Project /}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              CoderLobby
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A learning platform where users can buy course keys and access
              full frontend courses. The platform is built using the MERN stack
              and Firebase for course storage.
            </p>
            <a
              href="https://coderlobby.tech/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Cinerate Project/}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Cinerate
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A movie platform where users can browse movies, view details, and
              ratings. Built using React.js and the TMDb API for movie data.
            </p>
            <a
              href="https://cinerates.netlify.app/"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Weather Pro Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              React Weather Pro
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A weather app that shows current weather based on the city
              searched. Built with React.js, utilizing OpenWeatherMap API to
              fetch real-time weather data.
            </p>
            <a
              href="https://weatherfixpro.netlify.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              
            </a>
          </div>

          {/*Landing Pages Bundle */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Landing Pages Bundle
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A collection of landing pages created using HTML, CSS, JavaScript,
              Bootstrap, and Tailwind CSS. Includes multiple responsive and
              engaging layouts.
            </p>
            <a
              //href="https://github.com/AMOHAMMEDIMRAN/Amazing-Landing-Page"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
