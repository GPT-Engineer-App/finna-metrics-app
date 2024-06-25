import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" padding="1.5rem" bg="blue.500" color="white">
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        Financial Metrics
      </Heading>
      <Spacer />
      <Button leftIcon={<FaUserCircle />} colorScheme="teal" variant="solid">
        Profile
      </Button>
    </Flex>
  );
};

export default Navbar;