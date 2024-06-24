import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MdLocationPin } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { UserContext } from "../../context/apiContext/UserContext";
import { RxAvatar } from "react-icons/rx";
import PropTypes from "prop-types";

const InfoItem = ({ Icon, value }) => (
  <div className="flex gap-6 items-center">
    <Icon className="text-md" />
    <p className="text-md">{value || "Not available"}</p>
  </div>
);

InfoItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  value: PropTypes.string,
};

const StatItem = ({ label, value }) => (
  <div className=" flex flex-col justify-center gap-4 items-center">
    <span className="text-sm">{label}</span>
    <span className="font-bold text-base">{value ?? "N/A"}</span>
  </div>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export const CardDetails = () => {
  const { theme } = useContext(ThemeContext);
  const { userData } = useContext(UserContext);

  const userStats = [
    { label: "Repos", value: userData?.public_repos },
    { label: "Followers", value: userData?.followers },
    { label: "Following", value: userData?.following },
  ];

  return (
    <div
      className={`w-full md:w-[85%] lg:w-[70%] p-4 rounded-sm ${
        theme === "light" ? "bg-white" : "bg-yankees-blue"
      } mt-5 flex flex-col`}
    >
      <div className="flex items-center justify-center gap-10 w-full">
        <div
          className={`border-slate-gray w-20 h-20 flex items-center justify-center border-none overflow-hidden relative ${
            theme === "light" ? "bg-transparent" : "text-gun-metal"
          }`}
        >
          {userData?.avatar_url ? (
            <img
              src={userData.avatar_url}
              alt="profile avatar"
              className="object-cover object-center z-10 relative rounded-full"
              width="70"
            />
          ) : (
            <RxAvatar
              size={70}
              className="object-cover object-center z-10 relative rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col md:items-start flex-1 md:flex-row md:justify-between">
          <div className="flex flex-col items-start mb-2">
            <span
              className={`text-base md:text-lg font-bold ${
                theme === "light" ? "text-gun-metal" : "text-white"
              }`}
            >
              {userData?.name || "The Octocat"}
            </span>
            <span className="text-sm text-azure">
              @{userData?.login || "@octocat"}
            </span>
          </div>
          <span
            className={`text-base md:text-lg pt-4 ${
              theme === "light" ? "text-queen-blue" : "text-white"
            }`}
          >
            Joined {userData?.created_at?.split("T")[0] || "Date not available"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 self-end mt-12 md:w-[85%] lg:w-[70%]">
        <p
          className={`text-base ${
            theme === "light" ? "text-queen-blue" : "text-white"
          }`}
        >
          {userData?.bio || "This profile has no bio"}
        </p>

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
              {userData?.public_repos ?? "N/A"}
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
              {userData?.followers ?? "N/A"}
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
              {userData?.following ?? "N/A"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className={` flex flex-col gap-6 items-start ${
              theme === "light" ? " text-queen-blue" : "text-white"
            }`}
          >
            <InfoItem Icon={MdLocationPin} value={userData?.location} />
            <InfoItem Icon={FaLink} value={userData?.blog} />
            <InfoItem Icon={FaXTwitter} value={userData?.twitter_username} />
            <InfoItem Icon={BsFillBuildingsFill} value={userData?.company} />
          </div>
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    created_at: PropTypes.string,
    bio: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
    company: PropTypes.string,
  }),
};
