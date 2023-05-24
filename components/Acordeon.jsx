
import React, { useState } from 'react';

function Acordeon() {
  
    const [activeIndices, setActiveIndices] = useState([]);

    const handleClick = (index) => {
      if (activeIndices.includes(index)) {
        setActiveIndices(activeIndices.filter((i) => i !== index));
      } else {
        setActiveIndices([...activeIndices, index]);
      }
    };
  

  return (
    <div className='bg-sky-500 acordeon flex justify-center items-center'>
     
    <div className='w-9/12'>
            
            <ul className="accordion w-full   flex flex-col gap-5">

                {/* <!-- Duplicate this <li> as often as you want --> */}
                <li
            className={`cursor-pointer my-1 bg-gray-50 rounded-lg shadow-lg p-2 `}
            onClick={() => handleClick(0)}
          >
            
                    <span className="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center">
                        <p>Heading 1</p>
                        <svg className="text-gray-500 mr-1 bi bi-arrow-down-short"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </span>
                    <div
              className={`text-gray-500 text-md p-2 ${
                activeIndices.includes(0) ? 'mostrar' : 'esconder'
              }`}
            >
                    <div
                              aria-label="card-item-v3"
                              className="flex flex-row-reverse  gap-3 w-full rounded-xl bg-white border border-gray-100 p-2"
                            >
                              <div className="relative flex-shrink-0 mb-5 h-[250px]">
                                <img
                                  src="https://bit.ly/3zzCTUT"
                                  alt=""
                                  className="object-cover w-full h-full rounded-lg"
                                />
                              </div>
                              <div className="flex flex-col flex-1">
                                <h3 className="mb-3 text-lg font-bold">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo recusandae, tempora ab, voluptate est quo possimus veniam cum cumque tempore. Facilis voluptas, quisquam cum similique sapiente dignissimos ducimus odio?
                                </h3>
                              </div>
                            </div>
                    </div>
                </li>

                <li
            className={`cursor-pointer my-1 bg-gray-50 rounded-lg shadow-lg p-2 `}
            onClick={() => handleClick(1)}
          >
            
                    <span className="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center">
                        <p>Heading 2</p>
                        <svg className="text-gray-500 mr-1 bi bi-arrow-down-short"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </span>
                    <div
              className={`text-gray-500 text-md p-2 ${
                activeIndices.includes(1) ? 'mostrar' : 'esconder'
              }`}
            >
                    <div
                              aria-label="card-item-v3"
                              className="flex flex-row-reverse  gap-3 w-full rounded-xl bg-white border border-gray-100 p-2"
                            >
                              <div className="relative flex-shrink-0 mb-5 h-[250px]">
                                <img
                                  src="https://bit.ly/3zzCTUT"
                                  alt=""
                                  className="object-cover w-full h-full rounded-lg"
                                />
                              </div>
                              <div className="flex flex-col flex-1">
                                <h3 className="mb-3 text-lg font-bold">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo recusandae, tempora ab, voluptate est quo possimus veniam cum cumque tempore. Facilis voluptas, quisquam cum similique sapiente dignissimos ducimus odio?
                                </h3>
                              </div>
                            </div>                    </div>
                </li>

            </ul>

    </div>



    </div>
  )
}

export default Acordeon