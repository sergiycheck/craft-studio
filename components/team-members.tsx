import Image from "next/image";
import { LinkedInSvg, WrappedSvgLink } from "./common/svgs";
import Link from "next/link";

const teamMembers = [
  {
    image: "https://loremflickr.com/640/480/people",
    name: "Anastasia Dan",
    title: "Frontend Developer",
  },
  {
    image: "https://loremflickr.com/640/480/people",
    name: "Anastasia Dan",
    title: "Backend Developer",
  },
  {
    image: "https://loremflickr.com/640/480/people",
    name: "Anastasia Dan",
    title: "UX Designer",
  },
];

export default function TeamMembers() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Team</h2>

            <p className="text-xl text-gray-400">
              Meet Craft Studio team members. We are a small team of designers and developers working together to create
              beautiful, easy to use solutions for the world.
            </p>
          </div>

          <div
            data-aos-team-member-blocks
            className="max-w-sm mx-auto grid gap-8 
              lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none"
          >
            {teamMembers.map((item, index) => (
              <TeamMember key={index} {...item} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type TeamMemberProps = {
  image: string;
  name: string;
  title: string;
  delay: number;
};

function TeamMember({ image, name, title, delay }: TeamMemberProps) {
  return (
    <div
      className="flex flex-col h-full 
      border border-gray-700"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-team-member-blocks]"
      data-aos-delay={delay}
    >
      <div className="flex justify-center p-6">
        <div className="w-[200px] h-[200px] relative">
          <Image className="rounded-full w-full h-full" fill objectFit="cover" src={image} alt={name} />
        </div>
      </div>
      <div className="flex flex-col text-center justify-center p-6 mt-6  font-medium">
        <p className="text-lg text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{name}</p>
        <p className="text-md text-gray-400">{title}</p>
      </div>

      <div className="flex flex-col items-center p-6 mt-6 border-t border-gray-700 font-medium">
        <Link
          className="w-fit text-white border border-gray-700 hover:scale-110 transition duration-150 ease-in-out  "
          href="#"
          aria-label="LinkedIn"
        >
          <LinkedInSvg />
        </Link>
      </div>
    </div>
  );
}
