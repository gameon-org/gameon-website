import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "@/assets/LOGO.png";
import Image from "next/image";

export default function App() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Image src={Logo} className="w-36" />
        {/* <p className="font-bold text-inherit">GameOn</p> */}
      </NavbarBrand>
      {/* <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:block">
          <Link color="foreground" href="#Events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block">
          <Link color="foreground" href="#AboutUs">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block">
          <Link color="foreground" href="#Gallery">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block">
          <Link color="foreground" href="#Footer">
            Contact Us
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Leaderboard
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            isExternal={true}
            as={Link}
            color="primary"
            href="https://forms.gle/u2bXXCB3sR17aE357"
            variant="flat"
          >
            Register for New Event
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
