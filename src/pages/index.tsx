import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Text, Heading, VStack, Box, Kbd } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Devo Deployar?</title>
        <meta
          name="description"
          content="Para você que vive um rollback de cada vez."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack as="main" w="100%" h="100vh">
        <VStack
          as="section"
          h="100%"
          w="100%"
          padding={9}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box>
            <Heading as="h1" fontFamily="dmSans" color="#555555">
              DEVO DEPLOYAR?
            </Heading>
            <Text
              fontSize={{ base: "54px", md: "80px", lg: "100px" }}
              fontWeight="700"
              fontFamily="inter"
              color="#333333"
              padding="12px"
            >
              QUE TAL SEGUNDA?
            </Text>
            <Text fontSize="20px" color="#696969">
              <Kbd>Enter</Kbd> ou Clique aqui
            </Text>
          </Box>
        </VStack>
      </VStack>
    </>
  );
}
