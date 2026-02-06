
















// AppDownload.jsx
import React from "react";

const AppDownload = () => {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">
            Vyombiz – Legal Advisory Services
          </h2>
          <p className="text-white text-lg">
            Vyombiz is a technology driven platform which provides legal & financial services through its team of professionals.
          </p>

          {/* App Buttons + QR */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Vyombiz App */}
            <div className="flex flex-col items-center gap-2">
              <a href="#" className="inline-block">
                <img
                  src="https://Vyombiz.io/img/google-play-store.png"
                  alt="Vyombiz App"
                  className="h-12"
                />
              </a>
              <img
                src="https://Vyombiz.io/img/qr-code.png"
                alt="Vyombiz App QR"
                className="h-24 w-24 mt-2"
              />
            </div>

            {/* iOS App */}
            <div className="flex flex-col items-center gap-2">
              <a href="#" className="inline-block">
                <img
                  src="https://Vyombiz.io/img/app-store.png"
                  alt="Vyombiz iOS App"
                  className="h-12"
                />
              </a>
              <img
                src="https://Vyombiz.io/img/ios_qrcode.png"
                alt="iOS App QR"
                className="h-24 w-24 mt-2"
              />
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2">
          <img
            src="right.jpeg" // replace with actual right-side illustration if you have
            alt="App Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
