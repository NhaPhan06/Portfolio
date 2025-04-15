import preview from "../../assets/gallerynew.svg";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "./linear-dialog";
import GradientText from "../../lib/GradientText/GradientText";

import { Plus } from "lucide-react";
const items = [
  {
    id: 1,
    url: "../../assets/gallerynew.svg",
    title: "Accordion",
    description:
      "Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ",
    tags: ["Sunrise", "Mountains", "Golden", "Scenic", "Inspiring"],
  },
  {
    id: 2,
    url: preview,
    title: "Globe Section",
    description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
    tags: ["Misty", "Path", "Mysterious", "Serene", "Rugged"],
  },
  {
    id: 3,
    url: preview,
    title: "Image Mouse Trail",
    description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
    tags: ["Pathway", "Adventure", "Peaks", "Challenging", "Breathtaking"],
  },
];

export default function Project() {
  return (
    <section id="project" className="min-h-screen w-full flex flex-col py-10 md:py-[20vh] px-4">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        className="custom-class text-4xl md:text-6xl mb-8 md:mb-0 text-center"
      >
        Project
      </GradientText>
      
      <div className="flex-grow flex justify-center items-center w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-center items-center w-full md:w-[90%] lg:w-[80%] max-w-6xl">
          {items.map((item, i) => (
            <Dialog
              key={item.id}
              transition={{
                type: "spring",
                bounce: 0.05,
                duration: 0.5,
              }}
            >
              <DialogTrigger
                style={{
                  borderRadius: "12px",
                }}
                className="flex w-full flex-col overflow-hidden border dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950 shadow-md"
              >
                <DialogImage
                  src={item.url?.src}
                  alt=""
                  className="h-48 md:h-64 w-full object-cover"
                />
                <div className="flex flex-grow flex-row items-end justify-between p-3">
                  <div>
                    <DialogTitle className="text-zinc-950 text-lg md:text-xl dark:text-zinc-50">
                      {item.title}
                    </DialogTitle>
                  </div>
                  <button className="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800">
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </DialogTrigger>
              
              <DialogContainer className="pt-8 md:pt-20">
                <DialogContent
                  style={{
                    borderRadius: "24px",
                  }}
                  className="relative flex h-full mx-auto flex-col overflow-y-auto border dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[900px]"
                >
                  <DialogImage
                    src={item.url.src}
                    alt=""
                    className="h-full object-contain w-full sm:w-[80%] md:w-[60%] mx-auto pt-4"
                  />
                  <div className="p-4 md:p-6">
                    <DialogTitle className="text-3xl md:text-5xl text-zinc-950 dark:text-zinc-50">
                      {item.title}
                    </DialogTitle>

                    <DialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: -40 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: -50 },
                      }}
                    >
                      <p className="mt-2 text-sm md:text-base text-zinc-500 dark:text-zinc-500">
                        {item.description}
                      </p>
                    </DialogDescription>
                  </div>
                  <DialogClose className="absolute top-2 right-2 text-zinc-50 dark:bg-gray-900 bg-gray-400 p-3 md:p-4 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800" />
                </DialogContent>
              </DialogContainer>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}