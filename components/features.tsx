import Image, { StaticImageData } from "next/image";
import { Img } from "./common/Img";
import { projects } from "../api/projects";
import Link from "next/link";

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
            {projects
              .map((project, index) => ({ ...project, image: project.images[0], delay: index * 100 }))
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
  id: string;
  image: string;
  project: string;
  domain: string;
  delay: number;
  features: string;
};
function FeatureItem({ image, project, domain, features, delay, id }: FeatureItemProps) {
  return (
    <div
      className="flex flex-col h-full bg-gray-800 gap-2"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
      data-aos-delay={delay}
    >
      <div className="flex flex-col gap-2">
        <div className="h-[300px] w-auto overflow-hidden flex-1">
          <Link href={`/projects/${id}`}>
            <img sizes="100%" src={image} className="rounded-tl-lg rounded-tr-lg object-cover" alt="" loading="lazy" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h5 className="h5 mb-1">{project}</h5>
        <p className="p flex-grow text-gray-400">{domain}</p>
        <p className="p text-gray-400 line-clamp-2">{features}</p>
      </div>
    </div>
  );
}
