#include <iostream>
#include <cassert>
#include "matrix/matrix2.hpp"

void testEqual()
{
  std::vector<double> matrix1_1 = {10, 20, 30, 40};
  std::vector<double> matrix2_1 = {50, 60, 70, 80};
  // test
  auto equal1 = math::mat2::Matrix2(matrix1_1);
  auto ans1 = equal1.equal(matrix2_1);
  assert(ans1 == false);

  std::vector<double> matrix1_2 = {10, 20, 30, 40};
  std::vector<double> matrix2_2 = {10, 20, 30, 40};
  // test
  auto equal2 = math::mat2::Matrix2(matrix1_2);
  auto ans2 = equal2.equal(matrix2_2);
  assert(ans2 == true);
}

void testZeroMatrix()
{
  auto matrix = math::mat2::Matrix2();
  auto zero = matrix.zero();
  // test
  std::vector<double> answer = {0, 0, 0, 0};
  auto test_matrix = math::mat2::Matrix2(zero);
  auto equal = test_matrix.equal(answer);
  assert(equal == true);
}

void testAddMatrix()
{
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};

  auto matrix = math::mat2::Matrix2(matrix1);
  auto add = matrix.add(matrix2);

  // test
  std::vector<double> answer = {60, 80, 100, 120};
  auto test_matrix = math::mat2::Matrix2(add);
  auto equal = test_matrix.equal(answer);
  assert(equal == true);
}

void testSubMatrix()
{
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};

  auto matrix = math::mat2::Matrix2(matrix1);
  auto sub = matrix.sub(matrix2);

  // test
  std::vector<double> answer = {-40, -40, -40, -40};
  auto test_matrix = math::mat2::Matrix2(sub);
  auto equal = test_matrix.equal(answer);
  assert(equal == true);
}

void testScalarMulti()
{
  std::vector<double> matrix1 = {10, 20, 30, 40};
  double scalar = 5.0;

  auto matrix = math::mat2::Matrix2(matrix1);
  auto s_multi = matrix.scalar_multi(scalar);

  // test
  std::vector<double> answer = {50, 100, 150, 200};
  auto test_matrix = math::mat2::Matrix2(s_multi);
  auto equal = test_matrix.equal(answer);
  assert(equal == true);
}

void testMulti()
{
  std::vector<double> matrix1 = {1, 2, 3, 4};
  std::vector<double> matrix2 = {5, 6, 7, 8};
  std::vector<double> answer = {19, 22, 43, 50};

  auto matrix = math::mat2::Matrix2(matrix1);
  auto multi = matrix.multi(matrix2);
  // test
  auto test_matrix = math::mat2::Matrix2(multi);
  auto equal = test_matrix.equal(answer);
  assert(equal == true);
}

int main()
{
  testEqual();
  testZeroMatrix();
  testAddMatrix();
  testSubMatrix();
  testScalarMulti();
  testMulti();

  return 0;
}