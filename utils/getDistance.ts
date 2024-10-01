type Coordinate = {
  latitude: number;
  longitude: number;
};

const getDistance = (
  currentLocation: Coordinate,
  targetLocation: Coordinate
) => {
  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }
  const R = 6371; // 지구 반지름 (단위: km)
  const dLat = deg2rad(targetLocation.latitude - currentLocation.latitude);
  const dLon = deg2rad(targetLocation.longitude - currentLocation.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(currentLocation.latitude)) *
      Math.cos(deg2rad(targetLocation.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c * 1000; // 두 지점 간의 거리 (단위: m)
  return distance;
};

export default getDistance;
