import { Flex, Heading } from "@chakra-ui/react";
import BoxDifferentials from "../components/BoxDifferentials";
import Banner from "../components/Banner";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Banner />
      <BoxDifferentials />

      <Flex w={["60px", "90px"]} h="4px" bg="gray.800" m="5rem auto"></Flex>

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Slider />
    </>
  );
}
