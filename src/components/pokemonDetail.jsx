import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  VStack,
  HStack,
  List,
  ListItem,
  Spinner,
  Center,
  SimpleGrid,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { getPokemon } from "../api/pokeAPI";

// 포켓몬 타입별 색상 정의
const typeColors = {
  // 영어 타입
  normal: "gray",
  fire: "red",
  water: "blue",
  electric: "yellow",
  grass: "green",
  ice: "cyan",
  fighting: "red",
  poison: "purple",
  ground: "orange",
  flying: "blue",
  psychic: "pink",
  bug: "green",
  rock: "yellow",
  ghost: "purple",
  dragon: "purple",
  dark: "gray",
  steel: "gray",
  fairy: "pink",
  // 한글 타입
  노말: "gray",
  불꽃: "red",
  물: "blue",
  전기: "yellow",
  풀: "green",
  얼음: "cyan",
  격투: "red",
  독: "purple",
  땅: "orange",
  비행: "blue",
  에스퍼: "pink",
  벌레: "green",
  바위: "yellow",
  고스트: "purple",
  드래곤: "purple",
  악: "gray",
  강철: "gray",
  페어리: "pink",
};

function PokemonCard({ id, onClick }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getPokemon(id);
      setPokemon(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Box
        bg="linear-gradient(145deg, #2C2C2C, #1C1C1C)"
        borderRadius="15px"
        border="3px solid #00FF41"
        p={6}
        minH="400px"
        boxShadow="0 0 20px rgba(0,255,65,0.3), inset 0 0 20px rgba(0,0,0,0.5)"
      >
        <Center h="100%">
          <VStack spacing={4}>
            <Spinner size="xl" color="#00FF41" thickness="4px" speed="0.8s" />
            <Text color="#00FF41" fontFamily="monospace" fontSize="sm">
              데이터 로딩 중...
            </Text>
          </VStack>
        </Center>
      </Box>
    );
  }

  // 특별한 포켓몬들의 스타일 정의
  const getSpecialStyle = () => {
    if (id === 1) {
      // 1번 이상해씨 - 시작의 포켓몬
      return {
        bg: "linear-gradient(145deg, #2D5016, #1A300D)",
        border: "3px solid #4CAF50",
        boxShadow:
          "0 0 30px rgba(76,175,80,0.5), inset 0 0 20px rgba(0,0,0,0.5)",
        _hover: {
          transform: "translateY(-8px) scale(1.05)",
          boxShadow:
            "0 20px 50px rgba(76,175,80,0.7), inset 0 0 30px rgba(0,0,0,0.7)",
          borderColor: "#8BC34A",
        },
      };
    } else if (id === 151) {
      // 151번 뮤 - 전설의 포켓몬
      return {
        bg: "linear-gradient(145deg, #4A148C, #2E0854)",
        border: "3px solid #9C27B0",
        boxShadow:
          "0 0 30px rgba(156,39,176,0.5), inset 0 0 20px rgba(0,0,0,0.5)",
        _hover: {
          transform: "translateY(-8px) scale(1.05) rotateY(5deg)",
          boxShadow:
            "0 20px 50px rgba(156,39,176,0.8), inset 0 0 30px rgba(0,0,0,0.7)",
          borderColor: "#E91E63",
        },
      };
    }
    return {};
  };

  const specialStyle = getSpecialStyle();

  return (
    <Box
      bg={specialStyle.bg || "linear-gradient(145deg, #2C2C2C, #1C1C1C)"}
      borderRadius="15px"
      border={specialStyle.border || "3px solid #00FF41"}
      p={6}
      minH="500px"
      position="relative"
      boxShadow={
        specialStyle.boxShadow ||
        "0 0 20px rgba(0,255,65,0.3), inset 0 0 20px rgba(0,0,0,0.5)"
      }
      transition="all 0.3s"
      cursor="pointer"
      onClick={() => onClick && onClick(id)}
      _hover={
        specialStyle._hover || {
          transform: "translateY(-5px) scale(1.02)",
          boxShadow:
            "0 15px 40px rgba(0,255,65,0.5), inset 0 0 30px rgba(0,0,0,0.7)",
          borderColor: "#FFD700",
        }
      }
    >
      {/* 도감 번호 - 특별 버전 */}
      <Box
        position="absolute"
        top="-10px"
        left="20px"
        bg={
          id === 1
            ? "linear-gradient(145deg, #4CAF50, #2E7D32)"
            : id === 151
            ? "linear-gradient(145deg, #9C27B0, #6A1B99)"
            : "linear-gradient(145deg, #FFD700, #FFA500)"
        }
        color={id === 1 || id === 151 ? "white" : "black"}
        px={3}
        py={1}
        borderRadius="full"
        fontFamily="heading"
        fontWeight="bold"
        fontSize="sm"
        border={
          id === 1
            ? "2px solid #8BC34A"
            : id === 151
            ? "2px solid #E91E63"
            : "2px solid #000"
        }
        zIndex={1}
        boxShadow={
          id === 1
            ? "0 0 15px rgba(76,175,80,0.6)"
            : id === 151
            ? "0 0 15px rgba(156,39,176,0.6)"
            : "0 4px 8px rgba(0,0,0,0.3)"
        }
      >
        #{String(id).padStart(3, "0")}
      </Box>
      <VStack spacing={4} align="stretch" mt={2}>
        {/* 포켓몬 이미지 - 특별 스크린 */}
        <Box
          bg="black"
          borderRadius="10px"
          p={6}
          border={
            id === 1
              ? "2px solid #4CAF50"
              : id === 151
              ? "2px solid #9C27B0"
              : "2px solid #00FF41"
          }
          boxShadow={
            id === 1
              ? "inset 0 0 15px rgba(76,175,80,0.3)"
              : id === 151
              ? "inset 0 0 15px rgba(156,39,176,0.3)"
              : "inset 0 0 15px rgba(0,255,65,0.2)"
          }
          minH="220px"
          position="relative"
        >
          {/* 특별 라벨 */}
          {(id === 1 || id === 151) && (
            <Box
              position="absolute"
              top="2px"
              right="2px"
              bg={id === 1 ? "rgba(76,175,80,0.9)" : "rgba(156,39,176,0.9)"}
              color="white"
              px={2}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontFamily="heading"
              fontWeight="bold"
              zIndex={2}
            >
              {id === 1 ? "★ STARTER" : "★ LEGENDARY"}
            </Box>
          )}

          <Center h="100%">
            <Image
              src={pokemon?.image}
              alt={pokemon?.name}
              w="90%"
              h="90%"
              maxW="400px"
              maxH="400px"
              objectFit="contain"
              filter={
                id === 1
                  ? "drop-shadow(0 0 20px #4CAF50)"
                  : id === 151
                  ? "drop-shadow(0 0 20px #9C27B0)"
                  : "drop-shadow(0 0 15px #00FF41)"
              }
              fallbackSrc="https://via.placeholder.com/400"
              transition="all 0.3s"
              _hover={{
                transform:
                  id === 1 || id === 151 ? "scale(1.15)" : "scale(1.1)",
                filter:
                  id === 1
                    ? "drop-shadow(0 0 30px #8BC34A)"
                    : id === 151
                    ? "drop-shadow(0 0 30px #E91E63)"
                    : "drop-shadow(0 0 25px #FFD700)",
              }}
            />
          </Center>
        </Box>

        {/* 포켓몬 정보 */}
        <Box>
          <Heading
            size="lg"
            textAlign="center"
            textTransform="uppercase"
            color={id === 1 ? "#4CAF50" : id === 151 ? "#9C27B0" : "#00FF41"}
            fontFamily="heading"
            letterSpacing="1px"
            textShadow={
              id === 1
                ? "0 0 10px #4CAF50"
                : id === 151
                ? "0 0 10px #9C27B0"
                : "0 0 5px #00FF41"
            }
            fontSize={id === 1 || id === 151 ? "xl" : "lg"}
          >
            {pokemon?.name}
            {id === 1 && " 🌱"}
            {id === 151 && " ✨"}
          </Heading>

          {/* 타입 배지들 */}
          <Flex justify="center" mt={3} gap={2} flexWrap="wrap">
            {pokemon?.types?.map((type, index) => (
              <Badge
                key={index}
                bg={`${typeColors[type] || "gray"}.600`}
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontFamily="monospace"
                textTransform="uppercase"
                border="1px solid #333"
                boxShadow="0 2px 4px rgba(0,0,0,0.5)"
              >
                {type}
              </Badge>
            ))}
          </Flex>
        </Box>

        {/* 기술 목록 - 도감 스타일 */}
        <Box>
          <Box
            bg="rgba(0,255,65,0.1)"
            borderRadius="8px"
            p={3}
            border="1px solid #00FF41"
          >
            <Text
              fontSize="sm"
              fontWeight="bold"
              mb={2}
              color="#00FF41"
              fontFamily="monospace"
              textTransform="uppercase"
            >
              &gt;&gt; 기술 데이터
            </Text>
            <Box
              maxH="80px"
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#1C1C1C",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#00FF41",
                  borderRadius: "2px",
                },
              }}
            >
              <List spacing={1}>
                {pokemon?.moves?.slice(0, 6).map((move, idx) => (
                  <ListItem
                    key={idx}
                    fontSize="xs"
                    color="#C0C0C0"
                    fontFamily="monospace"
                  >
                    &gt; {move.toUpperCase()}
                  </ListItem>
                ))}
                {pokemon?.moves?.length > 6 && (
                  <ListItem
                    fontSize="xs"
                    color="#FFD700"
                    fontStyle="italic"
                    fontFamily="monospace"
                  >
                    ... +{pokemon.moves.length - 6} MORE
                  </ListItem>
                )}
              </List>
            </Box>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

// 상세 정보 모달 컴포넌트
function PokemonDetailModal({
  pokemon,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  currentIndex,
  totalCount,
}) {
  if (!pokemon) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay bg="rgba(0,0,0,0.8)" />
      <ModalContent
        bg="linear-gradient(145deg, #2C2C2C, #1C1C1C)"
        border="3px solid #00FF41"
        borderRadius="15px"
        color="white"
      >
        <ModalHeader
          bg="linear-gradient(145deg, #FFD700, #FFA500)"
          color="black"
          fontFamily="heading"
          textAlign="center"
          borderTopRadius="12px"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          포켓몬 상세 정보 - #{String(pokemon.id || 0).padStart(3, "0")}
          <ModalCloseButton
            color="black"
            position="absolute"
            right="12px"
            top="50%"
            transform="translateY(-50%)"
          />
        </ModalHeader>

        {/* 이전 포켓몬 버튼 - 모달 안쪽 왼쪽 */}
        <Box
          as="button"
          onClick={onPrevious}
          disabled={!hasPrevious}
          position="absolute"
          left="15px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={20}
          width="40px"
          height="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="36px"
          fontWeight="bold"
          color={hasPrevious ? "#00FF41" : "gray.400"}
          cursor={hasPrevious ? "pointer" : "not-allowed"}
          transition="all 0.3s"
          _hover={
            hasPrevious
              ? {
                  color: "#00CC33",
                  transform: "translateY(-50%) scale(1.2)",
                }
              : {}
          }
        >
          ‹
        </Box>

        {/* 다음 포켓몬 버튼 - 모달 안쪽 오른쪽 */}
        <Box
          as="button"
          onClick={onNext}
          disabled={!hasNext}
          position="absolute"
          right="15px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={20}
          width="40px"
          height="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="36px"
          fontWeight="bold"
          color={hasNext ? "#00FF41" : "gray.400"}
          cursor={hasNext ? "pointer" : "not-allowed"}
          transition="all 0.3s"
          _hover={
            hasNext
              ? {
                  color: "#00CC33",
                  transform: "translateY(-50%) scale(1.2)",
                }
              : {}
          }
        >
          ›
        </Box>

        <ModalBody p={6}>
          <VStack spacing={6}>
            {/* 큰 이미지 */}
            <Box
              bg="black"
              borderRadius="15px"
              p={8}
              border="2px solid #00FF41"
              boxShadow="inset 0 0 20px rgba(0,255,65,0.3)"
            >
              <Center>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  w="95%"
                  h="95%"
                  maxW="500px"
                  maxH="500px"
                  objectFit="contain"
                  filter="drop-shadow(0 0 20px #00FF41)"
                />
              </Center>
            </Box>

            {/* 포켓몬 정보 */}
            <VStack spacing={4} w="100%">
              <Heading
                size="xl"
                textAlign="center"
                textTransform="uppercase"
                color="#00FF41"
                fontFamily="heading"
                textShadow="0 0 10px #00FF41"
              >
                {pokemon.name}
              </Heading>

              {/* 타입들 */}
              <HStack spacing={3}>
                {pokemon.types?.map((type, index) => (
                  <Badge
                    key={index}
                    bg={`${typeColors[type] || "gray"}.600`}
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontSize="md"
                    fontFamily="heading"
                    textTransform="uppercase"
                  >
                    {type}
                  </Badge>
                ))}
              </HStack>

              <Divider borderColor="#00FF41" />

              {/* 기술 리스트 */}
              <Box w="100%">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  mb={4}
                  color="#00FF41"
                  fontFamily="heading"
                  textAlign="center"
                >
                  &gt;&gt; 전체 기술 목록
                </Text>
                <Box
                  bg="rgba(0,255,65,0.1)"
                  borderRadius="10px"
                  p={4}
                  border="1px solid #00FF41"
                  maxH="200px"
                  overflowY="auto"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#1C1C1C",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#00FF41",
                      borderRadius: "3px",
                    },
                  }}
                >
                  <SimpleGrid columns={2} spacing={2}>
                    {pokemon.moves?.map((move, idx) => (
                      <Text
                        key={idx}
                        fontSize="sm"
                        color="#C0C0C0"
                        fontFamily="heading"
                        p={2}
                        bg="rgba(0,0,0,0.3)"
                        borderRadius="md"
                      >
                        &gt; {move.toUpperCase()}
                      </Text>
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default function PCards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pokemonsPerPage = 9; // 한 페이지당 9마리 고정

  const totalPokemons = 151; // 1세대 포켓몬

  // 전체 포켓몬 ID 리스트 생성
  const allPokemonIds = Array.from({ length: totalPokemons }, (_, i) => i + 1);

  // 검색 필터링
  const filteredIds = allPokemonIds.filter((id) => {
    if (!searchTerm) return true;
    return (
      id.toString().includes(searchTerm) ||
      id.toString().padStart(3, "0").includes(searchTerm)
    );
  });

  // 페이지네이션
  const startIndex = (currentPage - 1) * pokemonsPerPage;
  const currentPokemonIds = filteredIds.slice(
    startIndex,
    startIndex + pokemonsPerPage
  );
  const totalPages = Math.ceil(filteredIds.length / pokemonsPerPage);

  const handlePokemonClick = async (id) => {
    try {
      const pokemon = await getPokemon(id);
      setSelectedPokemon({
        id: pokemon.id,
        name: pokemon.name,
        englishName: pokemon.englishName,
        image: pokemon.image,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types,
        abilities: pokemon.abilities,
        baseExperience: pokemon.baseExperience,
        stats: pokemon.stats,
        moves: pokemon.moves,
      });
      onOpen();
    } catch (error) {
      console.error("포켓몬 정보를 불러오는데 실패했습니다:", error);
    }
  };

  // 모달 내에서 이전/다음 포켓몬으로 이동
  const handlePreviousPokemon = async () => {
    if (!selectedPokemon) return;
    const currentId = selectedPokemon.id;
    if (currentId > 1) {
      await handlePokemonClick(currentId - 1);
    }
  };

  const handleNextPokemon = async () => {
    if (!selectedPokemon) return;
    const currentId = selectedPokemon.id;
    if (currentId < 151) {
      await handlePokemonClick(currentId + 1);
    }
  };

  // 키보드 탐색 이벤트 핸들러
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen || !selectedPokemon) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePreviousPokemon();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNextPokemon();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedPokemon]);

  // 모바일 스와이프 제스처 핸들러
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (event) => {
      if (!isOpen || !selectedPokemon) return;
      touchStartX = event.changedTouches[0].screenX;
    };

    const handleTouchEnd = (event) => {
      if (!isOpen || !selectedPokemon) return;
      touchEndX = event.changedTouches[0].screenX;

      const difference = touchStartX - touchEndX;
      const minSwipeDistance = 50; // 최소 스와이프 거리

      if (Math.abs(difference) > minSwipeDistance) {
        if (difference > 0) {
          // 왼쪽으로 스와이프 (다음 포켓몬)
          handleNextPokemon();
        } else {
          // 오른쪽으로 스와이프 (이전 포켓몬)
          handlePreviousPokemon();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, selectedPokemon]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // 검색 시 첫 페이지로
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1); // 첫 페이지로 돌아가기
  };

  return (
    <Box position="relative">
      {/* 검색 바 */}
      <Box mb={6} px={6}>
        <Box
          bg="linear-gradient(145deg, #2C2C2C, #1C1C1C)"
          border="2px solid #00FF41"
          borderRadius="15px"
          p={4}
          boxShadow="0 0 15px rgba(0,255,65,0.3)"
        >
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#00FF41" />
            </InputLeftElement>
            <Input
              placeholder="포켓몬 번호로 검색... (예: 1, 25, 150)"
              value={searchTerm}
              onChange={handleSearch}
              bg="black"
              border="2px solid #00FF41"
              borderRadius="10px"
              color="#00FF41"
              fontFamily="heading"
              _placeholder={{ color: "#666" }}
              _focus={{
                borderColor: "#FFD700",
                boxShadow: "0 0 0 3px rgba(255,215,0,0.2)",
                outline: "none",
              }}
            />
            {searchTerm && (
              <InputRightElement>
                <IconButton
                  icon={<CloseIcon />}
                  size="sm"
                  variant="ghost"
                  color="#00FF41"
                  _hover={{
                    color: "#FFD700",
                    bg: "rgba(255,215,0,0.1)",
                  }}
                  onClick={handleClearSearch}
                  aria-label="검색 초기화"
                />
              </InputRightElement>
            )}
          </InputGroup>

          {/* 검색 결과 정보 */}
          <Box mt={3} textAlign="center">
            <Text
              color="#00FF41"
              fontSize="sm"
              fontFamily="heading"
              fontWeight="bold"
            >
              총 {filteredIds.length}마리 포켓몬 발견 | 페이지 {currentPage}/
              {totalPages}
            </Text>

            {/* 검색 중일 때 전체보기 버튼 표시 */}
            {searchTerm && (
              <Button
                size="sm"
                mt={2}
                bg="rgba(255,215,0,0.1)"
                border="1px solid #FFD700"
                color="#FFD700"
                fontFamily="heading"
                _hover={{
                  bg: "rgba(255,215,0,0.2)",
                  transform: "scale(1.05)",
                }}
                onClick={handleClearSearch}
              >
                전체보기 (151마리)
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      {/* 포켓몬 카드 그리드 */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        spacing={4}
        p={6}
        position="relative"
      >
        {currentPokemonIds.map((id) => (
          <PokemonCard key={id} id={id} onClick={handlePokemonClick} />
        ))}
      </SimpleGrid>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <Box p={6} textAlign="center">
          <HStack spacing={4} justify="center">
            <Button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              bg="linear-gradient(145deg, #2C2C2C, #1C1C1C)"
              border="2px solid #00FF41"
              color="#00FF41"
              fontFamily="heading"
              fontWeight="bold"
              _hover={{
                borderColor: "#FFD700",
                transform: "scale(1.05)",
                boxShadow: "0 0 10px rgba(255,215,0,0.3)",
              }}
              _disabled={{
                opacity: 0.3,
                cursor: "not-allowed",
                _hover: {
                  transform: "none",
                  boxShadow: "none",
                },
              }}
            >
              이전
            </Button>

            <Box
              bg="linear-gradient(145deg, #2C2C2C, #1C1C1C)"
              px={4}
              py={2}
              borderRadius="md"
              border="2px solid #00FF41"
              boxShadow="0 0 10px rgba(0,255,65,0.2)"
            >
              <Text
                color="#00FF41"
                fontFamily="heading"
                fontSize="lg"
                fontWeight="bold"
              >
                {currentPage} / {totalPages}
              </Text>
            </Box>

            <Button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              bg="linear-gradient(145deg, #2C2C2C, #1C1C1C)"
              border="2px solid #00FF41"
              color="#00FF41"
              fontFamily="heading"
              fontWeight="bold"
              _hover={{
                borderColor: "#FFD700",
                transform: "scale(1.05)",
                boxShadow: "0 0 10px rgba(255,215,0,0.3)",
              }}
              _disabled={{
                opacity: 0.3,
                cursor: "not-allowed",
                _hover: {
                  transform: "none",
                  boxShadow: "none",
                },
              }}
            >
              다음
            </Button>
          </HStack>
        </Box>
      )}

      {/* 상세 정보 모달 */}
      <PokemonDetailModal
        pokemon={selectedPokemon}
        isOpen={isOpen}
        onClose={onClose}
        onPrevious={handlePreviousPokemon}
        onNext={handleNextPokemon}
        hasPrevious={selectedPokemon?.id > 1}
        hasNext={selectedPokemon?.id < 151}
        currentIndex={selectedPokemon?.id || 0}
        totalCount={151}
      />
    </Box>
  );
}
