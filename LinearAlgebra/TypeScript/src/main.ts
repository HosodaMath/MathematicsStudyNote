import * as Matrices from "./matrices/matrix";


const testBaseMatrix2 = () =>{
  Matrices.TestBaseMatrix2.test_equal();
  Matrices.TestBaseMatrix2.test_create();
  Matrices.TestBaseMatrix2.test_zero();
  Matrices.TestBaseMatrix2.test_add();
  Matrices.TestBaseMatrix2.test_sub();
  Matrices.TestBaseMatrix2.test_identity();
  Matrices.TestBaseMatrix2.test_scalar_multiply();
}

const main = () => {
  testBaseMatrix2();
}

window.onload = main;