import { projects } from "@/api/projects";
import { SwiperImagesForProject } from "./swiper-images-for-project";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find((project) => project.id === id)!;

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Section images */}
        <SwiperImagesForProject images={project.images} />

        {/* Section header */}
        <div className="max-w-3xl mx-auto pb-12 md:pb-20">
          <h2 className="h2 mb-4">{project.project}</h2>
          <p className="text-xl text-gray-400">{project.domain}</p>
          <p className="flex-grow text-gray-400">{project.features}</p>
          <p className="flex-grow text-gray-400">{project.challenges_overcome}</p>
        </div>
      </div>

      {/* Footer section next random project  */}
      <div className="flex gap-2 mx-auto justify-center items-center my-8 whitespace-nowrap flex-wrap">
        <h4 className="h4">Next project</h4>
        <Link className="a" href={`/projects/${nextProject.id}`}>
          {nextProject.project}
        </Link>
      </div>
    </div>
  );
}
