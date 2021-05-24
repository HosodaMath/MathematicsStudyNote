/**
 * @interface BaseMatrix
 * @description Implemented in a way that the author can be identified.
 *
 * Common Matrix2 Matrix3 Matrix4
 *
 */
 export interface BaseMatrix {
  matrix: Float32Array;

  // Matrix operations
  /**
   * @description Equality Matrix
   * @param a
   * @param b
   */
  equal(a: Float32Array, b: Float32Array): boolean;

  /**
   * @description Zero Matrix
   * @method
   *
   */
  zero(): Float32Array;

  /**
   * @description Identity Matrix
   * @method
   */
  identity(): Float32Array;

  /**
   * @description Addition of matrices
   * @param a Matrix A
   * @param b Matrix B
   */
  add(a: Float32Array, b: Float32Array): Float32Array;

  /**
   * @description Subtraction of matrices
   * @param a Matrix A
   * @param b Matrix B
   */
  sub(a: Float32Array, b: Float32Array): Float32Array;

  /**
   * @description scalar multiple
   * @param s scalar value
   * @param a　Matrix A
   */
  scalar_multiply(s: number, a: Float32Array): Float32Array;

  /**
   * @description Multiplication of matrices
   * @param a Matrix A
   * @param b Matrix B
   */
  multiply(a: Float32Array, b: Float32Array): Float32Array;
}
