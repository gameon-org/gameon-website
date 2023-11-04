import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import Logo from "@/assets/LOGO.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center align-middle mt-20 mb-20 drop-shadow-xl">
      <Card className=" w-4/5 bg-gray-300">
        <CardHeader className="flex gap-3">
          <Image
            alt="gameon logo"
            // height={40}
            // radius="sm"
            src={Logo}
            width={200}
          />
          <div className="flex flex-col">
            <p className="text-md">GameOn</p>
            <p className="text-small text-default-500">gameon.fit</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="grid grid-cols-2 h-36 ">
            <div className="text-5xl font-Varela font-extrabold text-orange-500">
              Unlock The Potential within You !!
            </div>
            <div className="grid grid-cols-2 ">
              <div></div>
              <div>
                <ul className="text-lg flex flex-col gap-4">
                  <Link href="#AboutUs">
                    <li>About Us</li>
                  </Link>
                  <Link href="#Events">
                    <li>Events</li>
                  </Link>
                  <Link href="#Gallery">
                    <li>Gallery</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex-col">
          <p>Contact Us:</p>
          <div>
            Phone:
            <a href="tel:+918896172818"> +91 88961-72818</a>
          </div>
          <div>
            {"\n Mail to:"}
            <Link isExternal href="mailto:kingabhishek1024@gmail.com">
              {" "}
              kingabhishek1024@gmail.com
            </Link>
          </div>
        </CardFooter>
      </Card>
    </footer>
  );
};

export default Footer;
