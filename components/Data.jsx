import React, { useState } from "react";

function Data() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-red-500 data flex justify-center items-center">
      <div className="mt-32 w-9/12">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
          <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b  last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 0 ? "active" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              <div className="flex justify-between w-full">
                <span className="">Holdback</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 0 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 1 ? "active" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              <div className="flex justify-between w-full">
                <span className="">Financial Assurance</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 1 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 2 ? "active" : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              <div className="flex justify-between w-full">
                <span className="">Liability ring fencing</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 2 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 3 ? "active" : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              <div className="flex justify-between w-full">
                <span className="">Aro Creditor rights</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 3 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-32 w-9/12">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
          <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b  last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 4 ? "active" : ""
              }`}
              onClick={() => handleItemClick(4)}
            >
              <div className="flex justify-between w-full">
                <span className="">Joint and several Liability</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 4 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 5 ? "active" : ""
              }`}
              onClick={() => handleItemClick(5)}
            >
              <div className="flex justify-between w-full">
                <span className="">Colorado</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 5 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 6 ? "active" : ""
              }`}
              onClick={() => handleItemClick(6)}
            >
              <div className="flex justify-between w-full">
                <span className="">Aro Moral hazard</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 6 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
            <li
              className={`px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out ${
                activeIndex === 7 ? "active" : ""
              }`}
              onClick={() => handleItemClick(7)}
            >
              <div className="flex justify-between w-full">
                <span className="">HR</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === 7 && (
                <div>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe officia nihil dolores neque ab sequi earum quo
                    aspernatur totam. Explicabo nobis molestias rerum culpa sit
                    fugiat, iste debitis sunt minima!
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Data;
