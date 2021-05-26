/**
 * @todo Create English Version
 */
// import { BaseMatrix } from "./base_matrix";
/*
class Matrix2 implements BaseMatrix {
  private matrix: Float32Array;
  constructor(matrix: Float32Array = new Float32Array(4)) {
    this.matrix = matrix;
  }
}*/

// 関数の設計
// クラス実装のメソッド


/**
 * Utility Function
 * @description Creating a 2x2 Matrix
 * @static create: (a11: number, a12: number, a21: number, a22: number)
 * @param {number} a11 a11 is a scalar value
 * @param {number} a12 a12 is a scalar value
 * @param {number} a21 a21 is a scalar value
 * @param {number} a22 a22 is a scalar value
 * @returns matrix
 * @example
 * const matrix1 = create(1.0, 0.0, 0.0, 1.0);
 * const matrix2 = create(10.0, 20.0, 30.0, 40.0);
 */
export const create = (a11: number, a12: number, a21: number, a22: number) => {
  const matrix = new Float32Array(4);
  matrix[0] = a11;
  matrix[1] = a12;
  matrix[2] = a21;
  matrix[3] = a22;

  return matrix;
};

/**
 * Utility Function
 * @description Satisfy all components with 0
 * @static init()
 * @returns matrix
 * @example
 * 
 */
export const init = () => {
  const matrix = new Float32Array(4);

  return matrix;
}


/**
 * @description Equality Matrix4
 * @method
 * @param {Float32Array} a Matrix A
 * @param {Float32Array} b Matrix B
 * @returns flag
 */
export const equal = (a: Float32Array, b: Float32Array) => {
  let flag = false;
  let sum = 0;
  if (a.length === b.length) {
    [...Array(a.length).keys()].forEach((count) => {
      if (a[count] === b[count]) {
        sum += 1;
      }
    });
  } else {
    throw new Error("Error Matrix A and B do not have the same size");
  }

  if (sum === 4) {
    flag = true;

    return flag;
  }

  return flag;
};

/**
 * @description Zero Matrix
 * @method
 * @returns matrix
 */
export const zero = () => {
  const matrix = new Float32Array(4);
  matrix[0] = 0;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;

  return matrix;
};

/**
 * @description Identity Matrix
 * @method
 * @returns matrix
 */
export const identity = () => {
  const matrix = new Float32Array(4);
  matrix[0] = 1;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 1;

  return matrix;
};

/**
 * @description matrix addition
 * @param {Float32Array} a Matrix A
 * @param {Float32Array} b Matrix B
 * @returns matrix
 */
export const add = (a: Float32Array, b: Float32Array) => {
  const matrix = new Float32Array(4);
  if (a.length === b.length) {
    [...Array(a.length).keys()].forEach((count) => {
      matrix[count] = a[count] + b[count];
    });
  } else {
    throw new Error("Error Matrix A and B do not have the same size");
  }

  return matrix;
};

/**
 * @description matrix matrix subtraction
 * @param {Float32Array} a Matrix A
 * @param {Float32Array} b Matrix B
 * @returns matrix
 */
export const sub = (a: Float32Array, b: Float32Array) => {
  const matrix = new Float32Array(4);
  if (a.length === b.length) {
    [...Array(a.length).keys()].forEach((count) => {
      matrix[count] = a[count] - b[count];
    });
  } else {
    throw new Error("Error Matrix A and B do not have the same size");
  }

  return matrix;
};

/**
 * @description scalar multiple
 * @param s scalar value
 * @param a matrix A
 * @returns matrix
 */
export const scalarMultiply = (s: number, a: Float32Array) => {
  const matrix = new Float32Array(4);
  if (a.length === 4) {
    [...Array(a.length).keys()].forEach((count) => {
      matrix[count] = s * a[count];
    });
  } else {
    throw new Error("Error The number of matrix components is four.");
  }

  return matrix;
};

/**
 * @description matrix multiply
 * @param a matrix A
 * @param b matrix B
 * @returns matrix
 */
export const multiply = (a: Float32Array, b: Float32Array) => {
  const matrix = new Float32Array(4);
  if (a.length === 4 && b.length === 4) {
    matrix[0] = a[0] * b[0] + a[1] * b[2];
    matrix[1] = a[0] * b[1] + a[1] * b[3];
    matrix[2] = a[2] * b[0] + a[3] * b[2];
    matrix[3] = a[2] * b[1] + a[3] * b[3];
  } else {
    throw new Error(
      "The number of components of matrix A and matrix B is 4 each."
    );
  }
  return matrix;
};
