import axios from "axios";

// 포켓몬 데이터 캐시 저장소 - 한 번 조회한 포켓몬은 메모리에 저장하여 재요청 방지
const pokemonCache = new Map();

/**
 * 포켓몬 ID로 포켓몬 상세 정보를 가져오는 함수
 * @param {number} id - 포켓몬 ID (1-151)
 * @returns {Promise<Object>} 포켓몬 상세 정보 객체
 */
export async function getPokemon(id) {
  // 캐시에서 먼저 확인 - 이미 조회한 포켓몬이면 즉시 반환
  if (pokemonCache.has(id)) {
    return pokemonCache.get(id);
  }

  try {
    // PokeAPI에서 포켓몬 기본 정보 가져오기
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = res.data;

    // 포켓몬 이름 (영어 원문 사용)
    const finalName = data.name;

    // 포켓몬이 배울 수 있는 기술들 (처음 10개만 선택)
    const englishMoves = data.moves
      .slice(0, 10)
      .map((moveData) => moveData.move.name);

    // 반환할 포켓몬 데이터 객체 구성
    const result = {
      id: data.id, // 포켓몬 도감 번호
      name: finalName, // 포켓몬 이름
      englishName: data.name, // 영어 원문 이름 (호환성 유지)
      types: data.types.map((t) => t.type.name), // 포켓몬 타입들 (fire, water 등)
      image: data.sprites.front_default, // 포켓몬 이미지 URL
      height: data.height, // 키 (데시미터 단위)
      weight: data.weight, // 무게 (헥토그램 단위)
      baseExperience: data.base_experience, // 기본 경험치
      abilities: data.abilities.map((a) => a.ability.name), // 특성들
      stats: data.stats.map((s) => ({
        name: s.stat.name, // 스탯 이름 (hp, attack, defense 등)
        base_stat: s.base_stat, // 기본 스탯 수치
      })),
      moves: englishMoves, // 기술 목록 (영어)
    };

    // 결과를 캐시에 저장하여 다음 요청 시 빠른 응답
    pokemonCache.set(id, result);
    return result;
  } catch (err) {
    // API 호출 실패 시 에러 로그 출력 후 에러 재전파
    console.log(err);
    throw err;
  }
}
