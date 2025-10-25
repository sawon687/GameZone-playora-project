import React, { useContext } from "react";
import { Authcontext } from "../PrivateRoutes/Context";
import { Link } from "react-router";
import { FaUserCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const MyProfil = () => {
  const { user } = useContext(Authcontext);

  return (
    <section className="min-h-screen flex justify-center items-center bg-[#0f172a] py-16 px-4">
      <title>My Profile</title>

      <div className="w-full max-w-md bg-[#1e293b] text-white rounded-2xl shadow-2xl p-8 border border-[#334155] transition-all duration-300 hover:shadow-purple-500/20">
        {/* Profile Picture */}
        <div className="flex flex-col items-center space-y-4">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-28 h-28 rounded-full object-cover ring-4 ring-purple-600/40"
            />
          ) : (
            <FaUserCircle className="w-28 h-28 text-gray-400" />
          )}

          {/* Name & Email */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              {user?.displayName || "Guest User"}
            </h1>
            <p className="text-gray-400 text-sm mt-1">{user?.email || "No email provided"}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Info Section */}
        <div className="space-y-2 text-gray-300 text-sm">
          <p>
            <span className="font-semibold text-white">Account Type:</span>{" "}
            {user ? "Registered" : "Guest"}
          </p>
          <div className="flex items-center mr-54 justify-center gap-2">
            <span className="font-semibold text-left text-white">Email Verified:</span>{" "}
            {user?.emailVerified ? (
              <span className="text-green-400 flex items-center gap-1">
                Verified <FaCheckCircle />
              </span>
            ) : (
              <span className="text-red-500 flex items-center gap-1">
                Not Verified <FaTimesCircle />
              </span>
            )}
          </div>
          <p>
            <span className="font-semibold text-white">Status:</span>{" "}
            <span className="text-green-400">Active</span>
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/updateProfile"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:opacity-90 transition duration-300"
          >
            Edit Profile
          </Link>
        
        </div>
      </div>
    </section>
  );
};

export default MyProfil;
