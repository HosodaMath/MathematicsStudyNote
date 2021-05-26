import * as BaseMatrices from "../matrix2";

export class TestBaseMatrix2 {
  static test_equal = () => {
    const matrix1 = new Float32Array([1.0, 0.0, 0.0, 1.0]);
    const matrix2 = new Float32Array([1.0, 0.0, 0.0, 1.0]);
    console.log(matrix1.length === matrix2.length);
    console.log(BaseMatrices.equal(matrix1, matrix2));
  };

  static test_create = () => {
    const matrix1 = BaseMatrices.create(1.0, 0.0, 0.0, 1.0);
    const testMatrix = new Float32Array([1.0, 0.0, 0.0, 1.0]);
    console.log(matrix1.length === 4);
    console.log(BaseMatrices.equal(matrix1, testMatrix));
  };

  static test_init = () => {
    const matrix = BaseMatrices.init();
    const testMatrix = BaseMatrices.create(0, 0, 0, 0);
    console.log(matrix.length === 4);
    console.log(BaseMatrices.equal(matrix, testMatrix) === true);
  }

  static test_zero = () => {
    const matrix1 = BaseMatrices.zero();
    const matrix2 = new Float32Array([0.0, 0.0, 0.0, 0.0]);
    console.log(matrix1.length === 4 && matrix2.length === 4);
    console.log(BaseMatrices.equal(matrix1, matrix2));
  };

  static test_add = () => {
    const matrix1 = BaseMatrices.create(10, 20, 30, 40);
    const matrix2 = BaseMatrices.create(10, 20, 30, 40);
    console.log(matrix1.length === 4 && matrix2.length === 4);
    const test_matrix1 = BaseMatrices.add(matrix1, matrix2);
    const test_matrix2 = BaseMatrices.create(20, 40, 60, 80);
    console.log(BaseMatrices.equal(test_matrix1, test_matrix2) === true);
  };

  static test_sub = () => {
    const matrix1 = BaseMatrices.create(10, 20, 30, 40);
    const matrix2 = BaseMatrices.create(10, 20, 30, 40);
    console.log(matrix1.length === 4 && matrix2.length === 4);
    const test_matrix1 = BaseMatrices.sub(matrix1, matrix2);
    const test_matrix2 = BaseMatrices.create(0, 0, 0, 0);
    console.log(BaseMatrices.equal(test_matrix1, test_matrix2) === true);
  };

  static test_identity = () => {
    const matrix = BaseMatrices.identity();
    console.log(matrix.length === 4);
    const test_matrix = BaseMatrices.create(1, 0, 0, 1);
    console.log(BaseMatrices.equal(matrix, test_matrix));
  };

  static test_scalar_multiply = () => {
    const s = 2;
    const matrixA = BaseMatrices.create(10, 20, 30, 40);
    console.log(matrixA.length === 4);
    const matrix = BaseMatrices.scalarMultiply(s, matrixA);
    const test_matrix = BaseMatrices.create(20, 40, 60, 80);
    console.log(BaseMatrices.equal(matrix, test_matrix));
  };

  static test_matrix_multiply = () => {
    const matrixA = BaseMatrices.create(1, 2, 3, 4);
    const matrixB = BaseMatrices.create(5, 6, 7, 8);
    console.log(matrixA.length === 4 && matrixB.length === 4);
    const matrix1 = BaseMatrices.multiply(matrixA, matrixB);
    const test_matrix1 = BaseMatrices.create(19, 22, 43, 50);
    console.log(BaseMatrices.equal(matrix1, test_matrix1) === true);
  };
}
