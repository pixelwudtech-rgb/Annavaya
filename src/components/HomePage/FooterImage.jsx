import React from "react";
import GlobalButton from "../Menu/GlobalButton.jsx";

export default function FooterImage() {
  return (
    <section className="absolute inset-0 w-full h-full z-0 pointer-events-none">


      
      <div className="">
        
        {/* BANNER */}
        <div className="relative w-full h-[780px] sm:h-[340px] lg:h-[480px] flex items-center justify-center z-0">
          
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/Home/Mountain.png')",
            }}
          />

       
        </div>
      </div>

      
    </section>
  );
}

