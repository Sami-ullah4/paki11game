import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#173A6D] text-white">
      <div className=" mx-auto px-4 md:px-10 py-9 md:py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            ZS777 Game 
          </h1>
          <hr className="text-[#0B5BD7]" />
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Online games are growing in popularity in Pakistan, providing a new
            earning opportunity for users. ZS777 Game is one of them, offering
            new and advanced features such as colourful layouts, a simple UI,
            advanced graphics, and local payment methods. ZS777 App is an online
            casino-style platform that offers a wide range of games, and these
            games are highly profitable and easier to play.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className="bg-gradient-to-r from-[#0B5BD7] to-[#133283] text-white font-bold text-lg 
            px-8 py-3 rounded-lg hover:opacity-75 border-2 border-white"
            >
              Download ZS777
            </button>

            <button className="border-2 border-white/30 backdrop-blur font-semibold text-lg px-8 py-3 rounded-lg hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <figure className="relative z-10">
            <Image
              src="/heroImage.webp"
              alt="ZS777 Game Interface"
              width={600}
              height={600}
              className="w-full h-auto drop-shadow-2xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
