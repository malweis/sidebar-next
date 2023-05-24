import React from 'react'

function Card() {
  return (
    <div className='bg-sky-500 card flex justify-center items-center'>
        
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="blog"/>
                <div className="p-6 bg-red-300">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui deleniti</p>
                    <div className="flex items-center flex-wrap">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card