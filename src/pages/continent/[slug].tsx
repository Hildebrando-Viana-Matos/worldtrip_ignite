import { useRouter } from "next/dist/client/router";

import { Flex } from "@chakra-ui/react";

import ContinentBanner from "../../components/ContinentBanner";
import Content from "../../components/Content";
import Cities from "../../components/Cities";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      city: string;
      country: string;
      thumbnail: string;
      flag: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  return (
    <Flex direction="column">
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}
