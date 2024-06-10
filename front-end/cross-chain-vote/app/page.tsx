"use client";
import { Flex, Text, Button, Card, Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { GET } from "./utils/route";
import { VoteStatus, VotingCard } from "./components/VotingCard";

const arrayOfVotes = [
  {
    voteId: 1.3,
    titleText: "Burn 20% of the total token supply",
    description:
      "20% tokens will be sent to 0x0 address, and no one will be able to use them.",
    expirationDate: "Voting ends approximately June 2, 2024 at 3:10 AM GMT+3",
    status: VoteStatus.Open,
  },
  {
    voteId: 1.2,
    titleText: "Lower Onchain Proposal Threshold",
    description:
      "We will lower the onchain proposal threshold to 0.1% of the total token supply.",
    expirationDate: "Voting ended January 28, 2024 at 4:41 PM GMT+2",
    status: VoteStatus.Executed,
  },
  {
    voteId: 1.1,
    titleText: "Lower Onchain Proposal Threshold",
    description:
      "If you vote for this option, all tokens will be sent to 0x0 address, and no one will be able to use them.",
    expirationDate: "Voting ended January 28, 2024 at 4:41 PM GMT+2",
    status: VoteStatus.Closed,
  },
];

export default function Home() {
  const [numberOfVotes, setVotes] = useState(Number);

  useEffect(() => {
    async function fetchData() {
      try {
        const burnVotes = await GET();
        setVotes(burnVotes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen flex-grow items-center gap-4 ">
        <Card>
          <Flex direction="column" gap="4" m="4">
            <Text size="9">Welcome to Cross-Chain Vote</Text>
            <Text>
              A decentralized application that allows users to vote on bounties
              across multiple blockchains. :)
            </Text>
          </Flex>
        </Card>
        <VotingCard votes={arrayOfVotes} numberOfVotes={numberOfVotes} />
      </main>
      <footer className="w-full p-4 bg-gray-200">
        <Flex direction="column" align="center" gap="2">
          <Text>&copy; {new Date().getFullYear()} Cross-Chain Vote</Text>
          <Text>Built with love by the Cross-Chain Team</Text>
        </Flex>
      </footer>
    </>
  );
}
