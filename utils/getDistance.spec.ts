import getDistance from "./getDistance";

describe("getDistance", () => {
  it("두 좌표 간의 거리를 올바르게 계산해야 한다", () => {
    const currentLocation = { latitude: 37.5665, longitude: 126.978 }; // 서울
    const targetLocation = { latitude: 35.6895, longitude: 139.6917 }; // 도쿄

    const distance = getDistance(currentLocation, targetLocation);

    // 서울과 도쿄 간의 예상 거리는 약 1156 km입니다
    expect(distance).toBeCloseTo(1156000, -4); //
  });

  it("좌표가 동일할 경우 0을 반환해야 한다", () => {
    const location = { latitude: 37.5665, longitude: 126.978 }; // 서울

    const distance = getDistance(location, location);

    expect(distance).toBe(0);
  });
});
