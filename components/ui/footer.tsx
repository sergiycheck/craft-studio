import Link from "next/link";
import { GithubSvg, InstagramSvg, LinkedInSvg, MetaSvg, WrappedSvgLink, XTwitterSvg } from "../common/svgs";
import { projects } from "../../api/projects";
import { ContainerWrapper } from "../common/container-wrapper";

export default function Footer() {
  return (
    <footer>
      <ContainerWrapper className="py-12 md:py-16">
        {/* Top area: Blocks */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
          {/* 1st block */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex gap-2">
              {/* Logo */}
              <Link href="/" aria-label="Craft studio">
                <svg
                  className="w-8 h-8 fill-current text-purple-600"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                </svg>
              </Link>

              <p className="text-lg font-gradient-indigo-purple-pink w-fit ">Craft Studio</p>
            </div>
          </div>

          {/* 2nd, 3rd and 4th blocks */}
          <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {/*  block */}
            <div className="flex sm:justify-end">
              <div className="text-sm w-fit">
                <h6 className="text-gray-200 font-medium mb-1">Case studies</h6>
                <ul>
                  {projects.map((project) => (
                    <li className="mb-1" key={project.id}>
                      <Link
                        href={`/projects/${project.id}`}
                        scroll={false}
                        className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {project.project}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/*  block */}
            <div className="flex sm:justify-end">
              <div className="text-sm w-fit">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/terms-of-service"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="sm:flex sm:items-center sm:justify-between ">
          {/* Social links */}
          <ul className="flex justify-center items-center sm:order-1 gap-2 mb-4">
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <XTwitterSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <GithubSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <MetaSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <InstagramSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <LinkedInSvg />
              </WrappedSvgLink>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-gray-400 text-sm mr-4">
            &copy; {new Date().getFullYear()} CraftStudio.com. All rights reserved.
          </div>
        </div>
      </ContainerWrapper>
    </footer>
  );
}
