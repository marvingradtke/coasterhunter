export function sortByName(array) {
  const sortedArray = [...array].sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  );
  return sortedArray;
}

export function sortByRanking(array) {
  const sortedArray = [...array].sort((a, b) => b.ranking - a.ranking);
  return sortedArray;
}

export function sortByDuration(array) {
  const sortedArray = [...array].sort((a, b) => b.duration - a.duration);
  return sortedArray;
}

export function sortBySpeed(array) {
  const sortedArray = [...array].sort((a, b) => b.speed - a.speed);
  return sortedArray;
}
