import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { ContainerWrapper } from "../common/container-wrapper";

export default function Header() {
  return (
    <>
      <header className="fixed w-full z-10 backdrop-blur-md">
        <ContainerWrapper>
          <div className="flex items-center justify-between h-20">
            <div className="shrink-0 mr-4">
              <Link href="/" className="block" aria-label="Craft studio">
                <h3 className="h4 font-gradient-indigo-purple-pink " data-aos="fade-up">
                  Craft Studio
                </h3>
              </Link>
            </div>

            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    href="/signin"
                    className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </ContainerWrapper>
      </header>
      <MobileMenu />
    </>
  );
}
