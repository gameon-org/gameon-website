import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { Hockey, Football, Skates } from "@/assets";
import Image from "next/image";
import { Popup } from "@/components";

const Events = () => {
  return (
    <div id="Events" className="sm:p-36">
      <h2 className="text-3xl sm:text-5xl font-bold p-6 sm:pb-14 sm:pl-20">Events</h2>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-center gap-10">
        <Card className="ml-10 mr-10 sm:py-4 ">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={Skates}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
            {/* <small className="text-default-500">12 Tracks</small> */}
            <h4 className="font-bold text-large">Past Events</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 justify-between">
            <div>
              <p className="text-tiny uppercase font-bold">
                Total events organized: 3
              </p>
              <small className="text-default-500">
                Sports:- Cricket(2), Badminton(1)
              </small>
            </div>
            <a
              href="#Gallery"
              className="flex items-center justify-center align-bottom pt-5"
            >
              <small className=" text-blue-600">See More Details</small>
            </a>
          </CardBody>
        </Card>{" "}
        <Card className="ml-10 mr-10 sm:py-4">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={Hockey}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
            {/* <small className="text-default-500">12 Tracks</small> */}
            <h4 className="font-bold text-large">Current Events</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            {/* <p className="text-tiny uppercase font-bold">
              
            </p> */}
            <small className="text-default-500">Sports:- N/A</small>
            <small className="text-default-500">Sports:- N/A</small>
          </CardBody>
        </Card>{" "}
        <Card className="ml-10 mr-10 sm:py-4">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={Football}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            {/* <p className="text-tiny uppercase font-bold"></p> */}
            {/* <small className="text-default-500">12 Tracks</small> */}
            <h4 className="font-bold text-large">Upcoming Events</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 justify-between">
            <p className="text-tiny uppercase font-bold">
              Sports:- Box Cricket
            </p>
            <small className="text-default-500">Date - 21/11/2023</small>
            <small className="text-default-500">
              Location - Verka Milk Plant Road , Jalandhar
            </small>
            <small className="text-default-500">Date - 21/11/2023</small>
            <a className="flex items-center justify-center align-bottom pt-5">
              <small className=" text-blue-600">
                <Popup />
              </small>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Events;
