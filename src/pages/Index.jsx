import { Container, VStack, Heading, Text, Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid } from "@chakra-ui/react";

const sampleMetrics = [
  { label: "Revenue", value: "$120,000", change: "+5%", direction: "increase" },
  { label: "Expenses", value: "$80,000", change: "-2%", direction: "decrease" },
  { label: "Profit", value: "$40,000", change: "+10%", direction: "increase" },
  { label: "Customer Growth", value: "15%", change: "+3%", direction: "increase" },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Financial Metrics Dashboard</Heading>
        <Text fontSize="lg">Here are some key financial metrics for your business:</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {sampleMetrics.map((metric, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Stat>
                <StatLabel>{metric.label}</StatLabel>
                <StatNumber>{metric.value}</StatNumber>
                <StatHelpText>
                  <StatArrow type={metric.direction} />
                  {metric.change}
                </StatHelpText>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;