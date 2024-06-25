import { Box, VStack, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChartLine, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      p="5"
      w="60"
      top="0"
      h="full"
      bg="gray.800"
      color="white"
      display={{ base: "none", md: "block" }}
    >
      <VStack spacing="5" align="stretch">
        <Link as={NavLink} to="/" style={{ textDecoration: 'none' }}>
          <Text fontSize="lg" display="flex" alignItems="center">
            <FaHome style={{ marginRight: '8px' }} />
            Home
          </Text>
        </Link>
        <Link as={NavLink} to="/metrics" style={{ textDecoration: 'none' }}>
          <Text fontSize="lg" display="flex" alignItems="center">
            <FaChartLine style={{ marginRight: '8px' }} />
            Metrics
          </Text>
        </Link>
        <Link as={NavLink} to="/settings" style={{ textDecoration: 'none' }}>
          <Text fontSize="lg" display="flex" alignItems="center">
            <FaCog style={{ marginRight: '8px' }} />
            Settings
          </Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;