function Home() {
  return (
    <div className="relative h-screen bg-[url('/src/assets/hero-img.jpg')] bg-cover bg-center">
      {/* dark navy overlay */}
      <div className="absolute inset-0 bg-[#1A1A2E]/70" />

      {/* dither texture */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,248,240,0.8) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#FFF8F0] text-center px-6">
        <h1
          className="text-6xl md:text-7xl font-bold leading-tight max-w-3xl"
          style={{ fontFamily: "Clash Display" }}
        >
          What's in your fridge?
        </h1>
        <p className="text-base text-[#FFF8F0]/90 mt-5 max-w-md">
          Turn ingredients into delicious recipes in seconds
        </p>
        <div className="flex gap-3 mt-8">
          <button className="cursor-pointer px-6 py-3 rounded-full bg-[#FF8C69] text-[#1A1A2E] font-medium hover:bg-[#ff7a52] transition-colors">
            Explore Recipes
          </button>
          <button className="cursor-pointer px-6 py-3 rounded-full bg-[#FFF8F0] text-[#1A1A2E] font-medium hover:bg-white transition-colors">
            By ingredients
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
