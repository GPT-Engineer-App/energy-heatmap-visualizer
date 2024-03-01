import React from "react";
import { Box, Grid, GridItem, Heading, VStack, Text, useColorModeValue } from "@chakra-ui/react";

const energyData = [
  // Mock data, where each value corresponds to an energy usage level
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 1],
  [3, 4, 5, 1, 2],
  [4, 5, 1, 2, 3],
  [5, 1, 2, 3, 4],
];

const colorScale = (value) => {
  // A function to determine the color based on energy usage level
  const colors = ["green.100", "green.200", "green.300", "green.400", "green.500"];
  return colors[value - 1] || "gray.50";
};

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack p={8} bg={bgColor} minH="100vh" justify="center" spacing={10}>
      <Heading mb={6}>Energy Usage Heatmap</Heading>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          {energyData.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <GridItem w="100%" h="20" bg={colorScale(value)} key={`${rowIndex}-${colIndex}`} display="flex" alignItems="center" justifyContent="center">
                <Text fontSize="sm">{value}</Text>
              </GridItem>
            )),
          )}
        </Grid>
      </Box>
      <Text fontSize="lg" color="gray.500">
        Energy consumption levels are represented by the intensity of the color.
      </Text>
    </VStack>
  );
};

export default Index;
