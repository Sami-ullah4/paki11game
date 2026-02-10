import Image from "next/image";

const Hero = () => {
  return (
    <section className=" text-black bg-gray-100">
      <div className=" mx-auto px-4 md:px-10 py-9 md:py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center tracking-wide bg-gradient-to-r from-[#24b75f] via-[#16a34a] to-[#0B6C39] bg-clip-text text-transparent">
            PAKi11 Game
          </h1>
          <hr className="text-[#ccbe1c]" />
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Online games are growing in popularity in Pakistan, providing a new
            earning opportunity for users. PAKi11 Game is one of them, offering
            new and advanced features such as colourful layouts, a simple UI,
            advanced graphics, and local payment methods. PAKi11 App is an
            online casino-style platform that offers a wide range of games, and
            these games are highly profitable and easier to play.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#24b75f] to-[#0B6C39] text-white font-bold text-lg  py-2 rounded-lg  w-full">
              Download PAKi11
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <figure className="relative z-10">
            <Image
              src="/image.png"
              alt="PAKi11 Game Interface"
              width={600}
              height={600}
              className="w-full h-auto drop-shadow-2xl bg-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
