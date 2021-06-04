pub struct Matrix2 {
  matrix: [f64; 4],
}

impl Matrix2 {
  /// ## コンストラクタ
  /// ```
  /// let mut init_matrix = Matrix2::new(init());
  /// ```
  pub fn new(init_matrix: [f64; 4]) -> Matrix2 {
    Matrix2 {
      matrix: init_matrix,
    }
  }
}

impl Matrix2 {
  /// ## 行列の作成
  /// 2x2行列の作成
  /// ### Example
  /// ```
  /// let mut init_matrix = Matrix2::new(init());
  /// let matrix = init_matrix.create(10.0,20.0,30.0,40.0);
  /// assert_eq!(matrix.len(), 4);
  /// let test_matrix: [f64; 4] = [10.0,20.0,30.0,40.0];
  /// assert_eq!(equal(matrix, test_matrix), true);
  /// ```
  pub fn create(&mut self, a11: f64, a12: f64, a21: f64, a22: f64) -> [f64; 4] {
    self.matrix[0] = a11;
    self.matrix[1] = a12;
    self.matrix[2] = a21;
    self.matrix[3] = a22;

    return self.matrix;
  }

  /// ## 行列の相等
  /// 行列Aと行列Bの対応する成分が等しいかどうか計算する -> 返り値はtureもしくはfalse
  /// ### Example
  /// ```
  /// let mut init_matrix = Matrix2::new(init());
  /// let matrix2: [f64; 4] = [1.0, 0.0, 0.0, 1.0];
  /// let matrix = init_matrix.equal(matrix2);
  /// assert_eq!(matrix, true);
  /// ```
  pub fn equal(&mut self, other: [f64; 4]) -> bool {
    let mut flag = false;
    if self.matrix[0] == other[0]
      && self.matrix[1] == other[1]
      && self.matrix[2] == other[2]
      && self.matrix[3] == other[3]
    {
      flag = true;
      return flag;
    }
    return flag;
  }

  /// ## ゼロ行列
  /// 成分がすべて0の行列
  /// ### Example
  /// ```
  /// let mut init_matrix = Matrix2::new(init());
  /// let matrix = init_matrix.zero();
  /// assert_eq!(matrix.len(), 4);
  /// ```
  pub fn zero(&mut self) -> [f64; 4] {
    self.matrix[0] = 0.0;
    self.matrix[1] = 0.0;
    self.matrix[2] = 0.0;
    self.matrix[3] = 0.0;
    return self.matrix;
  }

  /// ## 行列の足し算
  /// 2x2行列の足し算
  /// ### Example
  /// ```
  /// let matrix1: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
  /// let matrix2: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
  /// let mut init_matrix = Matrix2::new(matrix1);
  /// let matrix = init_matrix.add(matrix2);
  /// assert_eq!(matrix.len(), 4);
  /// let test_matrix: [f64; 4] = [20.0, 40.0, 60.0, 80.0];
  /// assert_eq!(equal(matrix, test_matrix), true);
  /// ```
  pub fn add(&mut self, matrix2: [f64; 4]) -> [f64; 4] {
    let mut matrix: [f64; 4] = init();
    matrix[0] = self.matrix[0] + matrix2[0];
    matrix[1] = self.matrix[1] + matrix2[1];
    matrix[2] = self.matrix[2] + matrix2[2];
    matrix[3] = self.matrix[3] + matrix2[3];

    return matrix;
  }

  /// ## 行列の引き算
  /// 2x2行列の引き算
  /// ### Example
  /// ```
  /// let matrix1: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
  /// let matrix2: [f64; 4] = create(10.0, 20.0, 30.0, 40.0);
  /// let mut init_matrix = Matrix2::new(matrix1);
  /// let matrix = init_matrix.sub(matrix2);
  /// assert_eq!(matrix.len(), 4);
  /// let test_matrix: [f64; 4] = [0.0, 0.0, 0.0, 0.0];
  /// assert_eq!(equal(matrix, test_matrix), true);
  /// ```
  pub fn sub(&mut self, matrix2: [f64; 4]) -> [f64; 4] {
    let mut matrix: [f64; 4] = init();
    matrix[0] = self.matrix[0] - matrix2[0];
    matrix[1] = self.matrix[1] - matrix2[1];
    matrix[2] = self.matrix[2] - matrix2[2];
    matrix[3] = self.matrix[3] - matrix2[3];

    return matrix;
  }
}

/// 初期化用行列
pub fn init() -> [f64; 4] {
  let matrix: [f64; 4] = [1.0, 0.0, 0.0, 1.0];
  return matrix;
}

