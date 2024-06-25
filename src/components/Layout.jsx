import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Box flex="1" ml={{ base: 0, md: 60 }}>
        <Navbar />
        <Box p="4">{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;