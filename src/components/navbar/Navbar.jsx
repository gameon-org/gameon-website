import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">GameOn</p>
      </NavbarBrand>
      {/* <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#Events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Events">
            Leaderboard
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Leaderboard
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Register for New Event
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
