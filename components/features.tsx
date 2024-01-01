import Image, { StaticImageData } from "next/image";
import { Img } from "./common/Img";

const image_600x600 = "https://picsum.photos/seed/picsum/600/600";

const feature = {
  image: image_600x600,
  name: "Instant Features",
  title: "Lorem ipsum dolor sit amet",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Case studies</h2>
            <p className="text-xl text-gray-400">
              Explore how we help our clients grow their business and improve their customer experience.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {new Array(6)
              .fill(0)
              .map((_, index) => ({ ...feature, delay: index * 100 }))
              .map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureItemProps = {
  image: string;
  name: string;
  title: string;
  children: React.ReactNode;
  delay: number;
};
function FeatureItem({ image, name, title, children, delay }: FeatureItemProps) {
  return (
    <div
      className="flex flex-col h-full bg-gray-800 gap-2"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
      data-aos-delay={delay}
    >
      <div className="flex flex-col gap-2">
        <div className="h-[300px] w-auto overflow-hidden flex-1">
          <img sizes="100%" src={image} className="rounded-tl-lg rounded-tr-lg object-cover" alt="" loading="lazy" />
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h5 className="h5 mb-1">{name}</h5>
        <p className="flex-grow text-gray-400">{children}</p>
      </div>
    </div>
  );
}
