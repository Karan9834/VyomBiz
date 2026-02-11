// AppDownload.jsx
import React from "react";

const AppDownload = () => {
  return (
    <section className="bg-[#0b4f7c] py-20 mt-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-[#0b4f7c] rounded-3xl flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 text-white space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              VyomBiz – Legal Advisory <br /> Services
            </h2>

            <p className="text-lg text-white/90 max-w-xl">
              VyomBiz is a technology driven platform which provides legal &
              financial services through its team of professionals.
            </p>

            <h4 className="text-lg font-semibold mt-6">
              Get the App
            </h4>

            {/* APP DOWNLOAD + QR */}
            <div className="flex flex-wrap items-center gap-10 mt-4">

              {/* ANDROID */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-3">
                  <img
                    src="https://VyomBiz.io/img/google-play-store.png"
                    alt="Google Play"
                    className="h-14"
                  />
                  <img
                    src="https://VyomBiz.io/img/app-store.png"
                    alt="App Store"
                    className="h-14"
                  />
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="https://VyomBiz.io/img/qr-code.png"
                    alt="Android QR"
                    className="h-24 w-24 border-4 border-white rounded-md"
                  />
                  <span className="mt-2 text-center">
                    Scan this QR Code <br /> to download the App
                  </span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="https://VyomBiz.io/img/ios_qrcode.png"
                    alt="iOS QR"
                    className="h-24 w-24 border-4 border-white rounded-md"
                  />
                  <span className="mt-2 text-center">
                    Scan this QR Code <br /> to download IOS App
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:w-1/2 flex justify-end">
            <img
              src="https://VyomBiz.io/img/our-app.png"
              alt="App Preview"
              className="max-w-md w-full drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
