import home from "../../assets/home.png";
import poll from "../../assets/poll.png";
import aspirant from "../../assets/aspirant.png";
import result from "../../assets/result.png";

export const sideBarLinks = [
  {
    path: "/user/",
    icon: <img src={home} alt="home" />,
    text: "Home",
    alt: "home",
  },
  {
    path: "/user/poll",
    icon:<img src={poll} alt="poll" />,
    text: "Poll",
    alt: "poll",
  },
  {
    path: "/user/presidential-poll",
    icon:<img src={poll} alt="poll" />,
    text: "Presidential Poll",
    alt: "poll",
  },
  {
    path: "/user/aspirant",
    icon: <img src={aspirant} alt="aspirant" />,
    text: "Aspirant",
    alt: "aspirant",
  },
  {
    path: "/user/result",
    icon: <img src={result} alt="result" />,
    text: "Result",
    alt: "result",
  },
 
];