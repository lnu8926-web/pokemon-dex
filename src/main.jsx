import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Container, Heading, Box } from "@chakra-ui/react";
import PCards from "./components/pokemonDetail.jsx";
import "./styles/pokedex.css";

// 포켓몬 도감 테마 설정
const pokedexTheme = extendTheme({
  colors: {
    pokedex: {
      red: "#DC143C",
      darkRed: "#B22222",
      lightRed: "#FF6B6B",
      screen: "#000000",
      screenGreen: "#00FF41",
      silver: "#C0C0C0",
      darkSilver: "#A9A9A9",
      blue: "#4169E1",
      yellow: "#FFD700",
    },
  },
  fonts: {
    heading: "'Orbitron', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
    body: "'Orbitron', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
  },
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        bg: "white",
        color: "black",
        fontFamily: "monospace",
        height: "100vh",
        overflow: "auto",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={pokedexTheme}>
      <Box minH="100vh" bg="white" p={4}>
        {/* 도감 헤더 */}
        <Box
          maxW="1200px"
          mx="auto"
          bg="linear-gradient(145deg, #DC143C 0%, #B22222 100%)"
          borderRadius="20px"
          p={6}
          mb={6}
          boxShadow="0 10px 30px rgba(220,20,60,0.3)"
          border="2px solid #8B0000"
        >
          <Box
            bg="black"
            borderRadius="15px"
            p={4}
            border="3px solid #333"
            boxShadow="inset 0 0 15px rgba(0,255,65,0.3)"
          >
            <Heading
              as="h1"
              size="2xl"
              textAlign="center"
              color="pokedex.screenGreen"
              fontFamily="heading"
              letterSpacing="2px"
              className="glow-text retro-font"
            >
              POKÉDEX v2.0
            </Heading>
            <Box
              h="2px"
              bg="linear-gradient(90deg, transparent, #00FF41, transparent)"
              mt={2}
              animation="pulse 2s infinite"
            />
          </Box>

          {/* 도감 버튼들 */}
          <Box display="flex" justifyContent="center" mt={4} gap={4}>
            <Box
              w="30px"
              h="30px"
              bg="linear-gradient(145deg, #FFD700, #FFA500)"
              borderRadius="50%"
              border="2px solid #333"
              boxShadow="0 4px 8px rgba(0,0,0,0.3)"
              className="pokedex-button"
              cursor="pointer"
            />
            <Box
              w="30px"
              h="30px"
              bg="linear-gradient(145deg, #4169E1, #0000CD)"
              borderRadius="50%"
              border="2px solid #333"
              boxShadow="0 4px 8px rgba(0,0,0,0.3)"
              className="pokedex-button"
              cursor="pointer"
            />
            <Box
              w="30px"
              h="30px"
              bg="linear-gradient(145deg, #32CD32, #228B22)"
              borderRadius="50%"
              border="2px solid #333"
              boxShadow="0 4px 8px rgba(0,0,0,0.3)"
              className="pokedex-button"
              cursor="pointer"
            />
          </Box>
        </Box>

        {/* 포켓몬 카드 컨테이너 */}
        <Box
          maxW="1200px"
          mx="auto"
          bg="linear-gradient(145deg, #DC143C 0%, #B22222 100%)"
          borderRadius="20px"
          p={6}
          boxShadow="0 10px 30px rgba(220,20,60,0.3)"
          border="2px solid #8B0000"
        >
          <PCards />
        </Box>
      </Box>
    </ChakraProvider>
  </StrictMode>
);
