import { Flex, Text, Button, Card, Grid } from "@radix-ui/themes";

export enum VoteStatus {
  Open = "Open",
  Executed = "Executed",
  Closed = "Closed",
}

type VotingCardProps = {
  votes: {
    voteId: number;
    titleText: string;
    description: string;
    expirationDate: string;
    status: string;
  }[];
  numberOfVotes: number;
};

export const VotingCard: React.FC<VotingCardProps> = ({
  votes,
  numberOfVotes,
}) => {
  const handleClick = () => {
    console.log("Voted");
  };

  return votes.map((vote) => (
    <Card key={vote.voteId} className="w-full lg:w-[900px]">
      <Flex direction="row" gap="4" m="4" justify="between">
        <Flex direction="column" gap="4" m="4" className="w-2/3">
          <Text size="8">
            <span>{vote.voteId}</span> {vote.titleText}
          </Text>
          <Text>{vote.description}</Text>
          <Text size="1" color="gray">
            {vote.expirationDate}
          </Text>
        </Flex>
        <Flex direction="column" gap="4" m="4">
          {vote.status === VoteStatus.Open ? (
            <Text>
              {numberOfVotes
                ? `Current number of votes: ${numberOfVotes}`
                : "Loading..."}
            </Text>
          ) : null}
          {vote.status === VoteStatus.Open ? (
            <Button onClick={handleClick}>Vote</Button>
          ) : (
            <Text
              className={
                vote.status === VoteStatus.Closed
                  ? "text-red-600"
                  : "text-green-600"
              }
            >
              {vote.status}
            </Text>
          )}
        </Flex>
      </Flex>
    </Card>
  ));
};
