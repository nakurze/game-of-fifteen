export default (tiles: Array<number>) => tiles.every(
  (val, idx, arr) => idx === 0 || val >= arr[idx - 1]!
)
