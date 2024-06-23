import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ProfilePic from "../../assets/Images/photo-profile.avif";
import { MdLocationPin } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";

export const CardDetails = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full md:w-[85%] lg:w-[70%] p-4 rounded-sm ${
        theme == "light" ? "bg-white" : "bg-yankees-blue"
      } mt-5 flex flex-col`}
    >
      <div className="flex items-center justify-center gap-10 w-full ">
        <div
          className={`border-slate-gray w-20 h-20  rounded-[50%] flex items-center justify-center border-none overflow-hidden relative ${
            theme === "light" ? "bg-ghost-white" : "bg-white"
          }`}
        >
          <img
            src={ProfilePic}
            alt="profile avatar"
            className=" object-cover z-10 relative"
          />
        </div>
        <div className="flex flex-col md:items-start flex-1 md:flex-row md:justify-between">
          <div className="flex flex-col items-start mb-2">
            <span
              className={`text-base  md:text-lg font-bold ${
                theme === "light" ? "text-gun-metal" : "text-white"
              }`}
            >
              The Octacat
            </span>
            <span className="text-sm text-azure">@octocat</span>
          </div>
          <div>
            <span
              className={`text-base md:text-lg pt-4 ${
                theme === "light" ? "text-queen-blue" : "text-white"
              }`}
            >
              Joined 25 Jan, 2011
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 self-end mt-12 md:w-[85%] lg:w-[70%]">
        <div
          className={`${theme === "light" ? " text-queen-blue" : "text-white"}`}
        >
          <p className=" text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div
          className={` ${
            theme === "light" ? "bg-ghost-white" : "bg-dark-gun-metal"
          }  flex justify-between items-start px-10 py-10 rounded-md mt-8 mb-12`}
        >
          <div className="flex flex-col justify-center gap-4 items-center">
            <span
              className={`${
                theme === "light" ? " text-queen-blue" : "text-white"
              } text-sm`}
            >
              Respos
            </span>
            <span
              className={`font-bold ${
                theme === "light" ? " text-gun-metal" : "text-white"
              } text-base`}
            >
              {27273}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center">
            <span
              className={`${
                theme === "light" ? " text-queen-blue" : "text-white"
              } text-sm`}
            >
              Followers
            </span>
            <span
              className={`font-bold ${
                theme === "light" ? " text-gun-metal" : "text-white"
              } text-base`}
            >
              {27273}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center">
            <span
              className={`${
                theme === "light" ? " text-queen-blue" : "text-white"
              } text-sm`}
            >
              Following
            </span>
            <span
              className={`font-bold ${
                theme === "light" ? " text-gun-metal" : "text-white"
              } text-base`}
            >
              {27273}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className={` flex gap-6 items-center ${
              theme === "light" ? " text-queen-blue" : "text-white"
            }`}
          >
            <MdLocationPin className=" text-md" />
            <p className=" text-md">location</p>
          </div>
          <div
            className={` flex gap-6 items-center ${
              theme === "light" ? " text-queen-blue" : "text-white"
            }`}
          >
            <FaLink className=" text-sm" />
            <p className=" text-md hover:underline-offset-2">
              <a href="#" className="hover:underline">
                Blog url
              </a>
            </p>
          </div>
          <div
            className={` flex gap-6 items-center ${
              theme === "light" ? " text-queen-blue" : "text-white"
            }`}
          >
            <FaXTwitter className=" text-sm" />
            <p className=" text-md">twitter</p>
          </div>
          <div
            className={` flex gap-6 items-center ${
              theme === "light" ? " text-queen-blue" : "text-white"
            }`}
          >
            <BsFillBuildingsFill />
            <p className=" text-md">@github</p>
          </div>
        </div>
      </div>
    </div>
  );
};
