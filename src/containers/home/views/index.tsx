import Link from "next/link";
import { Album } from "../components/album";

export const Home: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="container">
        <div className="flex max-[1200px]:flex-col max-[1200px]:items-center">
          <div className="w-1/2 max-[1200px]:w-3/4 max-[1200px]:text-center">
            <h1 className="text-accent text-8xl max-[1200px]:text-6xl max-[768px]:text-3xl min-[1200px]:max-w-[600px] font-serif font-medium">
              Hand-hooked goods make with love.
            </h1>
            <p className="mt-3 mb-3 max-[768px]:text-sm">
              Explore the shop for more gift ideas.
            </p>
            <button className="bg-primary py-[10px] px-4 text-white rounded-[3px] cursor-pointer uppercase text-xs font-semibold hover:bg-secondary transition-all duration-300">
              Shop now
            </button>
          </div>
          <div className="w-1/2 aspect-square relative max-[1200px]:hidden">
            <img
              src="/hero-image.jpg"
              alt="hero-image"
              className="absolute w-full h-[500px] rounded-[10%] rounded-tr-md rounded-bl-md"
            ></img>
            <img
              src="/brand.jpg"
              alt="brand-image"
              className="w-[25%] rounded-[50%] absolute bottom-0 left-0 translate-x-[-50%] translate-y-[-50%] rotate-[-30deg]"
            />
          </div>
        </div>
        <div className="py-6">
          <h3 className="mb-6 text-3xl pl-2 border-l-[3px] border-accent">
            Featured Patterns
          </h3>
          <Album />
          <div className="flex justify-center mt-6">
            <Link
              href={"/products"}
              className="no-underline px-[25px] py-[5px] rounded-[25px] text-white bg-secondary hover:brightness-[85%] transition-all duration-300"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
