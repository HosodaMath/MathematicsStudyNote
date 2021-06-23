import * as Test from "./test/testVector";
import "sanitize.css";
const testVector2 = () => {
  // zero vector
  Test.test_zero();

  // one vector
  Test.test_one();

  // Adding vectors
  Test.test_add();
  Test.test_static_add();

  // Subtraction of a vectors
  Test.test_sub();
  Test.test_static_sub();
};

const main = () => {
  testVector2();
};

main();
