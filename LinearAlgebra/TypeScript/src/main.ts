import * as Matrices from "./matrices/matrix";

const testBaseMatrix2 = () => {
  console.log("TestEqual");
  Matrices.TestBaseMatrix2.test_equal();
  console.log("TestCreate");
  Matrices.TestBaseMatrix2.test_create();
  console.log("TestZero");
  Matrices.TestBaseMatrix2.test_zero();
  console.log("TestAdd");
  Matrices.TestBaseMatrix2.test_add();
  console.log("TestSub");
  Matrices.TestBaseMatrix2.test_sub();
  console.log("TestIdentity");
  Matrices.TestBaseMatrix2.test_identity();
  console.log("TestScalarMulti");
  Matrices.TestBaseMatrix2.test_scalar_multiply();
  console.log("TestMatrixMulti");
  Matrices.TestBaseMatrix2.test_matrix_multiply();
};

const main = () => {
  testBaseMatrix2();
};

window.onload = main;
