/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import davao from "../../../assets/image/davao.jpg";
import samal from "../../../assets/image/Samal Island - Ghost Nudibranch.jpg";
import SanSpeciess from "../../../assets/image/sanisidrospecies.png";
import jelly from "../../../assets/image/jelly.jpg";

import panabo from "../../../assets/image/Panabo City- Hawk Sea Turtle.jpg";
import mati from "../../../assets/image/dolphin.jpg";
import lupon from "../../../assets/image/lupon.jpg";
// import lupon from "../../../assets/image/lupon.jpg";
import Logo from "../../../assets/logo.png";

// Custom BentoGrid component
const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={`grid gap-40 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ${className}`}>
      {children}
    </div>
  );
};

// Custom BentoGridItem component
const BentoGridItem = ({ title, description, image, className }) => {
  return (
    <div
      className={`p-4 border dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out ${className}`}>
      <div className="flex items-start gap-8 flex-col lg:flex-row md:flex-row sm:flex-row">
        <div className="flex-shrink-0">
          <div className="mt-2">{image}</div>
        </div>
        <div>
          <h3 className="text-[2rem] font-bold text-neutral-800 dark:text-white">
            {title}
          </h3>
          <p className="text-[1.35rem] text-neutral-500 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};




const Davao = () => (
  <h3 className="font-normal text-neutral-800 dark:text-white text-justify">
    Davao City, located in southeastern Mindanao, has a rich marine environment,
    largely influenced by its proximity to the Davao Gulf and the Coral
    Triangle. The city’s marine biodiversity supports fisheries, tourism, and
    conservation initiatives.
  </h3>
);
const Panabo = () => (
  <h3 className="font-normal text-neutral-800 dark:text-white text-justify">
    Panabo City, located in Davao del Norte along the Davao Gulf, is part of a
    biologically rich marine ecosystem within the Coral Triangle. The city’s
    coastal and nearshore environments, including mangroves, seagrass beds, and
    coral reefs, provide habitats for a variety of marine species.{" "}
  </h3>
);
/**
 * Samal
 *
 * Samal Island, officially known as the Island Garden City of Samal (IGaCoS),
 * is a biodiversity hotspot in the Davao Gulf and an important site for marine
 * ecosystems. It is known for its coral reefs, mangroves, seagrass beds, and
 * marine sanctuaries. These habitats support a rich diversity of marine life
 * and play a significant role in local ecology and livelihoods.
 */
const Samal = () => (
  <h3 className="font-normal text-neutral-800 dark:text-white text-justify">
    Samal Island, officially known as the Island Garden City of Samal (IGaCoS),
    is a biodiversity hotspot in the Davao Gulf and an important site for marine
    ecosystems. It is known for its coral reefs, mangroves, seagrass beds, and
    marine sanctuaries. These habitats support a rich diversity of marine life
    and play a significant role in local ecology and livelihoods.
  </h3>
);
const Mati = () => (
  <h3 className="font-normal text-neutral-800 dark:text-white text-justify">
    Mati City, the capital of Davao Oriental, is renowned for its stunning
    coastline and vibrant marine biodiversity, as it sits along Pujada Bay, Mayo
    Bay, and the Pacific Ocean. These waters are part of the Coral Triangle, one
    of the most biodiverse marine ecosystems in the world, making Mati a hotspot
    for marine species.
  </h3>
);
const Lupon = () => (
  <h3 className="font-normal text-neutral-800 dark:text-white text-justify">
    Lupon, a coastal municipality in Davao Oriental, shares the
    biodiversity-rich waters of the Davao Gulf and the Coral Triangle. Its
    marine environment includes coral reefs, mangroves, seagrass beds, and
    estuaries that support a wide variety of marine species. These ecosystems
    provide critical habitats for commercially important fish, invertebrates.
    
  </h3>
);
const San_Isidro = () => (
  <h3 className="font-normal text-neutral-800 dark:text-white text-justify">
    San Isidro in Davao Oriental, located on the southeastern coast of Mindanao,
    is part of the Davao Gulf area and is surrounded by rich marine
    biodiversity. The waters here are known for a variety of marine species,
    reflecting the richness of the Coral Triangle, which is globally recognized
    for its marine life.
  </h3>
);
const Tarragona = () => (
  <h3 className="font-normal text-neutral-800 dark:text-white text-justify">
    Tarragona, another coastal municipality in Davao Oriental, shares similar
    marine biodiversity to nearby areas like San Isidro due to its location
    along the Davao Gulf and the Coral Triangle. Its waters are teeming with a
    wide variety of marine species, thanks to its coral reefs, seagrass beds,
    and mangrove forests.
  </h3>
);

const DavaoCity = () => (
  <div className="flex w-full h-[230px] lg:h-[230px] lg:w-[250px] sm:w-[250px]  rounded-xl overflow-hidden ">
    <img
      src={davao} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-[250px] h-[250px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
    />
  </div>
);
const Samal_Island = () => (
  <div className="flex w-full h-[230px] rounded-xl overflow-hidden ">
    <img
      src={samal} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-[250px] h-[250px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
    />
  </div>
);
const Lupons = () => (
  <div className="flex w-full h-[230px] rounded-xl overflow-hidden ">
    <img
      src={lupon} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-[250px] h-[250px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
    />
  </div>
);
const Matis = () => (
  <div className="flex w-full h-[230px] rounded-xl overflow-hidden ">
    <img
      src={mati} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-[250px] h-[250px]  object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
    />
  </div>
);
const Panabos = () => (
  <div className="flex w-full h-[230px] rounded-xl overflow-hidden ">
    <img
      src={panabo} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-[250px] h-[250px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
    />
  </div>
);
const SanSpeciesss = () => (
  <div className="flex w-full h-[230px] rounded-xl overflow-hidden ">
    <img
      src={SanSpeciess} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-[250px] h-[250px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
    />
  </div>
);
const Jelly = () => (
  <div className="flex w-full h-[230px] rounded-xl overflow-hidden ">
    <img
      src={jelly} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-[250px] h-[250px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
    />
  </div>
);

// Items data with images
const items = [
  {
    title: "Davao City",
    description: <Davao />,
    header: <DavaoCity />,
    icon: <img src={Logo} alt="Dawn of Innovation" className="rounded-full" />,
    fullWidth: true,
  },
  {
    title: "Samal Island",
    description: <Samal />,
    header: <Samal_Island />,
    icon: <img src={Logo} alt="Digital Revolution" className="rounded-full" />,
  },
  {
    title: "Mati City",
    description: <Mati />,
    header: <Matis />,
    icon: <img src={Logo} alt="Art of Design" className="rounded-full" />,
  },
  {
    title: "Lupon",
    description: <Lupon />,
    header: <Lupons />,
    icon: (
      <img src={Logo} alt="Power of Communication" className="rounded-full" />
    ),
  },
  {
    title: "Panabo City",
    description: <Panabo />,
    header: <Panabos />,
    icon: (
      <img src={Logo} alt="Pursuit of Knowledge" className="rounded-full" />
    ),
  },
  {
    title: "San Isidro (Davao Oriental)",
    description: <San_Isidro />,
    header: <SanSpeciesss/>,
    // icon: <img src={Logo} alt="Joy of Creation" className="rounded-full" />,
  },
  {
    title: "Tarragona",
    description: <Tarragona />,
    header: <Jelly />,
    icon: <img src={Logo} alt="Spirit of Adventure" className="rounded-full" />,
  },
];

export function BentoGridDemo() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 dark:text-white font-sans">
        Coastal Area and Marine Species
      </h1>
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.header}
            icon={item.icon}
            className={item.fullWidth ? "col-span-1 md:col-span-1 lg:col-span-1" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default BentoGridDemo;
