import React from "react";
import { Link, useParams } from "react-router";
import UseLoadData from "../Hook/UseLoaddata";
import { FaStar } from "react-icons/fa";

const GameDetails = () => {
  const { data } = UseLoadData();
  const { id } = useParams();

  const singlegame = data.find((game) => game.id == id) || {};
  const {
    title,
    coverPhoto,
    description,
    developer,
    ratings,
    category,
    downloadLink,
  } = singlegame;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center py-20 px-6">
        <title>Game Details</title>
      <div className="max-w-4xl w-full glassmorphism rounded-3xl shadow-2xl border border-white/10 p-10 text-white backdrop-blur-lg bg-white/10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <figure className="relative group">
            <img
              src={coverPhoto}
              alt={title}
              className="w-64 h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <p className="text-lg font-semibold">Preview</p>
            </div>
          </figure>

          <div className="space-y-4 flex-1">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              {title}
            </h1>

            <p className="text-lg">
              Developed by:
              <span className="text-green-400 ml-2 font-semibold">
                {developer}
              </span>
            </p>

            <div className="flex items-center gap-2 text-yellow-400 text-lg">
              <FaStar /> {ratings}
            </div>

            <p className="text-gray-300">
              Category:
              <span className="ml-2 font-semibold text-white">{category}</span>
            </p>

            <Link
              to={downloadLink}
              className="inline-block mt-3 bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download Now
            </Link>
          </div>
        </div>

        <div className="mt-10 text-gray-200 leading-relaxed">
          <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Description
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
