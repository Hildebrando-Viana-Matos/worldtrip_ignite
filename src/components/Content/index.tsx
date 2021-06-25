import { Grid, Text } from "@chakra-ui/react";

import Info from "./Infos";

export default function Content() {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.800"
        textAlign="justify"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim explicabo
        quia sequi doloremque tempora consequatur, facilis rerum, dolorum
        perferendis eius obcaecati ad, dolor repellat distinctio consequuntur
        optio nisi quibusdam ratione.Enim explicabo quia sequi doloremque
        tempora consequatur, facilis rerum, dolorum perferendis eius obcaecati
        ad, dolor repellat distinctio consequuntur optio nisi quibusdam ratione.
      </Text>
      <Info />
    </Grid>
  );
}
