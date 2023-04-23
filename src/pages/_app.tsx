import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Inter, DM_Sans } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const theme = extendTheme({
  fonts: {
    inter: inter.style.fontFamily,
    dmSans: dmSans.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
