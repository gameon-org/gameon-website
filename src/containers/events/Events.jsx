import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const Events = () => {
  return (
    <div id="Events" className="p-36">
      <h2 className="text-5xl font-bold pb-14 pl-20">Events</h2>
      <div className="flex justify-center gap-10">
        <Card className="py-4 ">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
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
            <a className="flex items-center justify-center align-bottom pt-5">
              <small className=" text-blue-600">See More Details</small>
            </a>
          </CardBody>
        </Card>{" "}
        <Card className="py-4">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
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
        <Card className="py-4">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
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
              <small className=" text-blue-600">See More Details</small>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Events;
