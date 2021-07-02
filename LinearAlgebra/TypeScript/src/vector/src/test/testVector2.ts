import * as Vector from "../vector/vector";

export const test_add = () => {
  const v = new Vector.Vector2(0, 0);
  const w = new Vector.Vector2(20.0, 40.0);
  console.log(v.add(w), v.x === 20.0, v.y === 40.0);
};

export const test_sub = () => {
  const v = new Vector.Vector2(0, 0);
  const w = new Vector.Vector2(20.0, 40.0);
  console.log(v.sub(w), v.x === -20.0, v.y === -40.0);
};

// ここから静的メソッドの実装

export const test_zero = () => {
  const v = Vector.Vector2.zero();
  console.log(v.x === 0, v.y === 0);
};

export const test_static_add = () => {
  const v = new Vector.Vector2(0, 0);
  const w = new Vector.Vector2(20.0, 40.0);
  console.log(Vector.Vector2.add(v, w), v.x !== 20.0, v.y !== 40.0);
};

export const test_static_sub = () => {
  const v = new Vector.Vector2(0, 0);
  const w = new Vector.Vector2(20.0, 40.0);
  console.log(Vector.Vector2.sub(v, w), v.x !== -20.0, v.y !== -40.0);
};
