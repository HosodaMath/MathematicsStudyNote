/// 初期化用行列
pub fn init() -> [f64; 4] {
  let matrix: [f64; 4] = [1.0, 0.0, 0.0, 1.0];
  return matrix;
}

/// ## 行列の作成
/// 2x2行列の作成
/// ### Example
/// ```
/// let matrix = create(10.0, 20.0, 30.0, 40.0);
/// assert_eq!(matrix.len(), 4);
/// let test_matrix: [f64; 4] = [10.0, 20.0, 30.0, 40.0];
/// assert_eq!(equal(matrix, test_matrix), true);
/// ```
pub fn create(a11: f64, a12: f64, a21: f64, a22: f64) -> [f64; 4] {
  let mut matrix: [f64; 4] = [0.0, 0.0, 0.0, 0.0];
  matrix[0] = a11;
  matrix[1] = a12;
  matrix[2] = a21;
  matrix[3] = a22;

  return matrix;
}

/// ## 行列の相等
/// 行列Aと行列Bの対応する成分が等しいかどうか計算する -> 返り値はtureもしくはfalse
/// ### Example
/// ```
/// let matrix1: [f64; 4] = [1.0, 0.0, 0.0, 1.0];
/// let matrix2: [f64; 4] = [1.0, 0.0, 0.0, 1.0];
/// assert_eq!(matrix1, matrix2);
/// ```
pub fn equal(matrix1: [f64; 4], matrix2: [f64; 4]) -> bool {
  let mut flag = false;
  if matrix1[0] == matrix2[0]
    && matrix1[1] == matrix2[1]
    && matrix1[2] == matrix2[2]
    && matrix1[3] == matrix2[3]
  {
    flag = true;

    return flag;
  }

  return flag;
}

/// ## ゼロ行列
/// 2x2のゼロ行列を生成
/// ### Example
/// ```
/// let matrix = zero();
/// ```
pub fn zero() -> [f64; 4] {
  let zero_matrix: [f64; 4] = [0.0, 0.0, 0.0, 0.0];

  return zero_matrix;
}

/// ## 単位行列
/// 2x2の単位行列を生成
/// ### Example
/// ```
/// let matrix = identity();
/// ```
pub fn identity() -> [f64; 4] {
  let identity_matrix: [f64; 4] = [1.0, 0.0, 0.0, 1.0];

  return identity_matrix;
}

/// ## 行列の足し算
/// 2x2行列の足し算
/// ### Example
/// ```
/// let matrix1: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
/// let matrix2: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
/// let matrix = add(matrix1, matrix2);
/// assert_eq!(matrix.len(), 4);
/// let test_matrix: [f64; 4] = [20.0, 40.0, 60.0, 80.0];
/// assert_eq!(equal(matrix, test_matrix), true);
/// ```
pub fn add(matrix1: [f64; 4], matrix2: [f64; 4]) -> [f64; 4] {
  let mut matrix: [f64; 4] = init();
  matrix[0] = matrix1[0] + matrix2[0];
  matrix[1] = matrix1[1] + matrix2[1];
  matrix[2] = matrix1[2] + matrix2[2];
  matrix[3] = matrix1[3] + matrix2[3];

  return matrix;
}

/// ## 行列の引き算
/// 2x2行列の引き算
/// ### Example
/// ```
/// let matrix1: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
/// let matrix2: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
/// let matrix = sub(matrix1, matrix2);
/// assert_eq!(matrix.len(), 4);
/// let test_matrix: [f64; 4] = [20.0, 40.0, 60.0, 80.0];
/// assert_eq!(equal(matrix, test_matrix), true);
/// ```
pub fn sub(matrix1: [f64; 4], matrix2: [f64; 4]) -> [f64; 4] {
  let mut matrix: [f64; 4] = init();
  matrix[0] = matrix1[0] - matrix2[0];
  matrix[1] = matrix1[1] - matrix2[1];
  matrix[2] = matrix1[2] - matrix2[2];
  matrix[3] = matrix1[3] - matrix2[3];

  return matrix;
}

/// ## 行列のスカラー倍（行列の定数倍）
/// スカラー倍した2x2の行列を生成
/// ### Example
/// ```
/// let matrix1 = create(10.0, 20.0, 30.0, 40.0);
/// let s = 2.0;
/// let matrix = scalar_multi(s, matrix1);
/// ```
pub fn scalar_multi(s: f64, matrix1: [f64; 4]) -> [f64; 4] {
  let mut matrix: [f64; 4] = init();
  matrix[0] = s * matrix1[0];
  matrix[1] = s * matrix1[1];
  matrix[2] = s * matrix1[2];
  matrix[3] = s * matrix1[3];

  return matrix;
}

/// ## 行列の乗法
/// 2x2行列同士の掛け算
/// ### Example
/// ```
/// 
/// ```
pub fn multi(matrix1: [f64; 4], matrix2: [f64; 4]) -> [f64; 4] {
  let mut matrix: [f64; 4] = init();
  matrix[0] = matrix1[0] * matrix2[0] + matrix1[1] * matrix2[2];
  matrix[1] = matrix1[0] * matrix2[1] + matrix1[1] * matrix2[3];
  matrix[2] = matrix1[2] * matrix2[0] + matrix1[3] * matrix2[2];
  matrix[3] = matrix1[2] * matrix2[1] + matrix1[3] * matrix2[3];

  return matrix;
}
