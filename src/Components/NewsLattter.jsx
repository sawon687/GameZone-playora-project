import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#181818] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Join the Playora Newsletter 🎮
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to get the latest game updates, new releases, and exclusive offers delivered straight to your inbox.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-3/4 px-4 py-3 rounded-lg bg-[#242424] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full sm:w-1/4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-semibold rounded-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>

        <small className="block mt-4 text-gray-500 text-sm">
          No spam. Unsubscribe anytime.
        </small>
      </div>
    </section>
  );
};

export default Newsletter;
