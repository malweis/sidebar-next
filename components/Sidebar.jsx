"use client";
import React, { useState } from "react";

function Sidebar({ isOpen, toggleSidebar, showButton, onItemClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubelement, setActiveSubelement] = useState(null); 

  const toggleDropdown = (event, element) => {
    event.stopPropagation();
    setActiveDropdown(isDropdownOpen && activeDropdown === element ? null : element);
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  const handleClick = (item, hasChildren) => {
    
    if (selectedItem === item) {
      setSelectedItem(null);
      onItemClick(null);
    } else {
      setSelectedItem(item);
      onItemClick(item);
    }

    if (hasChildren) {
      setActiveDropdown(activeDropdown === item ? null : item);
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setActiveDropdown(null);
      setIsDropdownOpen(false);
    }
  };

  const handleshowButton = () => {
    toggleSidebar();
    showButton();
  };
  
  const handleSubelementClick = (event, index, item) => {
    event.stopPropagation(); // Prevent event bubbling
    if (selectedItem === item) {
    
      onItemClick(null);
    } else {

      onItemClick(item);
    }
    if (activeSubelement === index) {
      setActiveSubelement(null);
    } else {
      setActiveSubelement(index);
    }
  };
  
  

  const isItemSelected = (item) => {
    return selectedItem === item;
  };
  return (
    <aside
      className={`dark:bg-gray-900 dark:border-gray-700 sidebar text-white duration-150 transition-transform flex flex-col  ${
        isOpen ? "" : "hidden"
      }`}
    >
        <div className="flex items-center justify-center rounded-md  p-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 cursor-pointer" onClick={handleshowButton}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    </div>
      <label
        className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400 "
        
      >
        analytics
      </label>

      <nav className="flex-grow">
        <ul className="p-4">
          <li
            className={`py-2 cursor-pointer ${
              isItemSelected("Data") ? "clicked" : ""
            }`}
            onClick={() => handleClick("Data")}
          >
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Lista</span>
            </a>
          </li>
          <li
            className={`py-2 cursor-pointer ${
              isItemSelected("Card") ? "clicked" : ""
            }`}
            onClick={() => handleClick("Card")}
          >
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Card</span>
            </a>
          </li>
          <li>
  <a
    className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
      activeDropdown === "Element3" ? "clicked" : ""
    }`}
    href="#"
    onClick={(e) => handleClick("Element3", true)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
      />
    </svg>
    <span
      className={`mx-2 text-sm font-medium flex py-1 ${activeDropdown === "Element3" ? "text-blue-600" : ""}`}
    >
      Elementos
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-4 h-4 mt-0.5 transition-transform duration-200 transform ${
        activeDropdown === "Element3" ? "rotate-180" : ""
      }`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
  <ul className={`pl-4 mt-2 text-white ${isDropdownOpen && activeDropdown === "Element3" ? "block" : "hidden"}`}>
  <li className={`py-2 cursor-pointer ${isItemSelected("Acordeon") ? "clicked" : ""}`} onClick={() => handleClick("Acordeon", true)}>
    <a
      className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${activeSubelement === 1 ? "clicked" : ""}`}
      href="#"
      onClick={(e) => handleSubelementClick(e, 1, "Acordeon")}
    >
      <span className="mx-2 text-sm font-medium">Acordeon</span>
    </a>
  </li>



  <li className={`py-2 cursor-pointer ${isItemSelected("Footer") ? "clicked" : ""}`} onClick={() => handleClick("Acordeon", true)}>
    <a
      className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${activeSubelement === 2 ? "clicked" : ""}`}
      href="#"
      onClick={(e) => handleSubelementClick(e, 2, "Footer")}
    >
    <span className="mx-2 text-sm font-medium">Footer</span>
  </a>
</li>
<li className={`py-2 cursor-pointer ${isItemSelected("Mapa") ? "clicked" : ""}`} onClick={() => handleClick("Mapa", true)}>
    <a
      className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${activeSubelement === 3 ? "clicked" : ""}`}
      href="#"
      onClick={(e) => handleSubelementClick(e, 3, "Mapa")}
    >
    <span className="mx-2 text-sm font-medium">Mapa</span>
  </a>
</li>

</ul>

</li>

          <li
            className={`py-2 cursor-pointer ${
              isItemSelected("Info") ? "clicked" : ""
            }`}
            onClick={() => handleClick("Info")}
          >
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Header</span>
            </a>
          </li>
          <li
            className={`py-2 cursor-pointer ${
              isItemSelected("CallToAction") ? "clicked" : ""
            }`}
            onClick={() => handleClick("CallToAction")}
          >
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Call to action</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
