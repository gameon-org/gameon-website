"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/use-disclosure";
import Image from "next/image";
import { Poster } from "@/assets";
import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";

export default function Popup() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>See More Details</Button>
      <Modal size={`5xl`} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Box Cricket
              </ModalHeader>
              <ModalBody className="flex flex-row">
                <div>
                  <Image src={Poster} width={750} />
                </div>
                <div>
                  <p className="font-bold text-sm">Tournament Details:</p>
                  <ScrollShadow className="w-full h-fit text-xs">
                    <ul className="list-disc list-inside">
                      <li>
                        Entry Fees: Register your team for a nominal entry fee
                        of Rs. 1,600
                      </li>
                      <li>
                        Prizes: The rewards are substantial. The first prize is
                        a grand Rs. 10,000 with a trophy and the runner-up team
                        will walk away with Rs. 5,000 with a trophy.
                      </li>
                      <li>
                        32 Teams: Join 31 other teams in this thrilling knockout
                        tournament. Compete with the best and show your cricket
                        prowess.
                      </li>
                      <li>
                        Team Size: Each team can have a maximum of 8 players, so
                        assemble your dream team and strategize your way to
                        victory.
                      </li>
                      <li>
                        Knockout Matches: The tournament structure is simple yet
                        intense. It's a knockout format, meaning every match is
                        a do-or-die situation. Win to advance, or face
                        elimination.
                      </li>
                      Trophy and Awards: The champion team not only claims the
                      title but also receives a magnificent trophy. Individual
                      brilliance is celebrated with awards like Man of the Match
                      and Man of the Series.
                      <li>
                        Equipment Provided: No need to worry about bringing your
                        own equipment. We supply the bats and balls, so all you
                        need to focus on is playing your best.
                      </li>
                    </ul>
                  </ScrollShadow>
                  <p className="font-bold text-sm">Tournament Details:</p>
                  <ScrollShadow className="w-full h-fit text-xs">
                    <ul className="list-disc list-inside">
                      <li>
                        Team Composition: Each team can consist of a maximum of
                        8 players. Players should be ready for substitution
                        during the matches.
                      </li>
                      <li>
                        Match Format: All matches are played in a knockout
                        format. Win to proceed to the next round, and a loss
                        means elimination.
                      </li>
                      <li>
                        Umpire Decisions: Umpire decisions are final. Respect
                        the spirit of the game and maintain fair play.
                      </li>
                      <li>
                        Man of the Match: One player from each match will be
                        awarded the Man of the Match title for their outstanding
                        performance.
                      </li>
                      <li>
                        Man of the Series: The player with the most consistent
                        and exceptional performances throughout the tournament
                        will be recognized as the Man of the Series.
                      </li>
                      <li>
                        Equipment: We provide bats and balls, so there's no need
                        to bring your own.
                      </li>
                      Code of Conduct: Maintain a high standard of sportsmanship
                      and fair play. Any misconduct may result in
                      disqualification.
                    </ul>
                    <li>
                      Registration: Make sure your team is registered before the
                      deadline to secure your spot in the tournament.
                    </li>
                    <li>
                      Final Decision: The organizers reserve the right to make
                      the final decisions regarding any disputes or unforeseen
                      circumstances.
                    </li>
                  </ScrollShadow>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  isExternal={true}
                  as={Link}
                  color="primary"
                  href="https://forms.gle/u2bXXCB3sR17aE357"
                  variant="flat"
                >
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
