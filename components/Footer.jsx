import React from "react";
import { FOOTER } from "@/constants";
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto ">
        <div className="flex flex-wrap border-b border-neutral-700 ">
          <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
            <h2 className="">RealEl</h2>
            <p className="lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
            <div className="flex flex-wrap gap-4 my-10">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <GithubIcon />
            </div>
          </div>
          {FOOTER.categories.map((category, index) => (
            <div key={index} className="w-full sm:w=1/2 lg:w-2/12 p-4">
              <h3 className="font-semibold uppercase pb-4">{category.name}</h3>
              <ul>
                {" "}
                {category.links.map((link, index) => (
                  <li className="my-4" key={index}>
                    <Link
                      href={link.url}
                      className="text-sm hover:text-neutral-500"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
