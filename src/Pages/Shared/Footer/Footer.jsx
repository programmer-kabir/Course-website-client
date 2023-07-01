import React from "react";
import { Link } from "react-router-dom";
import { MdCall, MdEmail, MdFacebook, MdOutlineFacebook } from "react-icons/md";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Container from "../../../Component/Container/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="mt-16 bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Tailwind Elements section */}
            <div className="">
              <Link className="flex items-center">
                <img
                  className="h-10 mb-2"
                  src="https://i.ibb.co/BLmQ1Jc/Logo.jpg"
                  alt=""
                />
                <h2 className="text-2xl font-bold">Programming</h2>
              </Link>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            {/* Useful links section */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                CUSTOMER SERVICE
              </h6>
              <Link>
                <p className="mb-4 text-neutral-600 dark:text-neutral-200">
                  Order Status
                </p>
              </Link>
              <Link>
                <p className="mb-4 text-neutral-600 dark:text-neutral-200">
                  Help Desk
                </p>
              </Link>
              <Link>
                <p className="mb-4 text-neutral-600 dark:text-neutral-200">
                  Return Center
                </p>
              </Link>
            </div>

            {/* Information Link */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                INFORMATION
              </h6>
              <Link>
                <p className="mb-4 text-neutral-600 dark:text-neutral-200">
                  Terms of Use
                </p>
              </Link>
              <Link>
                <p className="mb-4 text-neutral-600 dark:text-neutral-200">
                  Privacy Policy
                </p>
              </Link>
            </div>

            {/* Contact section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <MdEmail className="mr-3 h-5 w-5" />
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <MdCall className="mr-3 h-5 w-5" />+ 01 234 567 88
              </p>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="flex items-center justify-between">
          <div className=" p-6 text-center dark:bg-neutral-700">
            <span>© 2023 Copyright:</span>
            <a
              className="font-semibold text-neutral-600 dark:text-neutral-400"
              href="https://tailwind-elements.com/"
            >
              Programming 
            </a>
          </div>
          <div className="flex gap-4">
            <Link>
              <MdFacebook className="h-5 w-5 mr-2 hover:text-neutral-800" />
            </Link>
            <Link>
              <AiOutlineGithub className="h-5 w-5 mr-2 hover:text-neutral-800" />
            </Link>
            <Link>
              <AiFillLinkedin className="h-5 w-5 mr-2 hover:text-neutral-800" />
            </Link>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
