import ImgGame from "./assets/images/image-gaming-growth.jpg";
import ImgRetros from "./assets/images/image-retro-pcs.jpg";
import ImgTop from "./assets/images/image-top-laptops.jpg";

const Info = {
  new: {
    title: "New",
    data: [
      {
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?",
      },
      {
        title: "The Downsides of AI Artistry",
        description:
          "What are the possible adverse effects of on-demand AI image generation?",
      },
      {
        title: "Is VC Funding Drying Up?",
        description:
          "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      },
    ],
  },
  highlight: {
    title: "Highlight",
    data: [
      {
        id: "01",
        img: { ImgRetros },
        title: "Reviving Retro PCs",
        description: "What happens when old PCs are given modern upgrades?",
      },
      {
        id: "02",
        img: { ImgTop },
        title: "Top 10 Laptops of 2022",
        description: "Our best picks for various needs and budgets.",
      },
      {
        id: "03",
        img: { ImgGame },
        title: "The Growth of Gaming",
        description: "How the pandemic has sparked fresh opportunities.",
      },
    ],
  },
  main: {
    title: "The Bright Future of Web 3.0?",
    description:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  },

  menu: ["Home", "New", "Popular", "Trending", "Categories"],
};

export default Info;
