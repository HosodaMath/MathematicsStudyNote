/// 2x2行列ライブラリーテスト
use matrices::matrix2f::*;

fn test_equal() {
  let matrix1 = create(1.0, 0.0, 0.0, 1.0);
  let matrix2 = create(1.0, 0.0, 0.0, 1.0);

  assert_eq!(equal(matrix1, matrix2), true);
}

fn test_zero() {
  let matrix1 = create(0.0, 0.0, 0.0, 0.0);
  let matrix2 = zero();
  assert_eq!(equal(matrix1, matrix2), true);
}

fn test_identity() {
  let matrix1 = create(1.0, 0.0, 0.0, 1.0);
  let matrix2 = identity();
  assert_eq!(equal(matrix1, matrix2), true);
}

fn test_add() {
  let matrix1 = create(10.0, 20.0, 30.0, 40.0);
  let matrix2 = create(50.0, 60.0, 70.0, 80.0);
  let matrix = add(matrix1, matrix2);
  let answer = create(60.0, 80.0, 100.0, 120.0);
  assert_eq!(equal(matrix, answer), true);
}

fn test_sub() {
  let matrix1 = create(10.0, 20.0, 30.0, 40.0);
  let matrix2 = create(50.0, 60.0, 70.0, 80.0);
  let matrix = sub(matrix1, matrix2);
  let answer = create(-40.0, -40.0, -40.0, -40.0);
  assert_eq!(equal(matrix, answer), true);
}

fn test_scalar_multi() {
  let matrix1 = create(10.0, 20.0, 30.0, 40.0);
  let s = 2.0;
  let matrix = scalar_multi(s, matrix1);
  let answer = create(20.0, 40.0, 60.0, 80.0);
  assert_eq!(equal(matrix, answer), true);
}

fn test_multi(){
  let matrix1 = create(1.0, 2.0, 3.0, 4.0);
  let matrix2 = create(5.0, 6.0, 7.0, 8.0);
  let matrix = multi(matrix1, matrix2);
  let answer = create(19.0, 22.0, 43.0, 50.0);
  assert_eq!(equal(matrix, answer), true);
}

fn main() {
  test_equal();
  test_zero();
  test_identity();
  test_add();
  test_sub();
  test_scalar_multi();
  test_multi();
}
