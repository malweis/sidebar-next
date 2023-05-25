import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className=" footer w-full h-full bg-red-500 ">
      <div className=" w-full h-full row-start-3 row-end-4 col-start-1 col-end-4 p-8 flex  flex-col justify-center items-center   text-white realFooter">
        <div className="flex justify-between w-6/12  border-b-2 border-gray-400 pb-4 ">
          <div className="flex flex-col items-start gap-2">
            <span> Products</span>
            <a href="">IDM</a>
            <a href="">CMS</a>
            <a href="">Cloud</a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span> Resources</span>
            <a href="">Case Study</a>
            <a href="">Faq</a>
            <a href="">Hometree</a>
            <a href="">Release Form</a>
            <a href=""> Developer Guide</a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span> Company</span>
            <a href="">About</a>
            <a href="">Lorem ipsum</a>
            <a href="">Terra proyect</a>
            <a href="">Schedule Demo</a>
            <a href="">Finance</a>
          </div>
          <div className="flex flex-col items-start gap-20">
            <span> Contact in</span>
            <div>
                <a href=""> <FacebookIcon/></a>
                <a href=""><LinkedInIcon/> </a>
                <a href=""><TwitterIcon/> </a>
            </div>
          </div>
        </div>
        <div className="self-end mr-5">
          <span>Copyright</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
