#include <iostream>
#include <cassert>
#include "matrix/matrix2f.hpp"

void testEqual()
{
  std::vector<double> matrix1_1 = {10, 20, 30, 40};
  std::vector<double> matrix2_1 = {50, 60, 70, 80};
  auto ans1 = math::mat2::equal(matrix1_1, matrix2_1);
  assert(ans1 == false);

  std::vector<double> matrix1_2 = {10, 20, 30, 40};
  std::vector<double> matrix2_2 = {10, 20, 30, 40};
  auto ans2 = math::mat2::equal(matrix1_2, matrix2_2);
  assert(ans2 == true);
}

void testCreateMatrix2(){
  auto matrix = math::mat2::create(100, 200, 300, 400);
  std::vector<double> answer = {100, 200, 300, 400}; 
  assert(matrix.size() == 4);
  assert(math::mat2::equal(matrix, answer) == true);
}

void testZeroMatrix2()
{
  auto zeroMatrix = math::mat2::zero();
  std::vector<double> answer = {0, 0, 0, 0};
  assert(zeroMatrix.size() == 4);
  assert(math::mat2::equal(zeroMatrix, answer) == true);
}

void testIdentityMatrix2()
{
  auto identityMatrix = math::mat2::identity();
  std::vector<double> answer = {1, 0, 0, 1};
  assert(identityMatrix.size() == 4);
  assert(math::mat2::equal(identityMatrix, answer) == true);
}

void testAddMatrix2()
{
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};
  std::vector<double> answer = {60, 80, 100, 120};
  auto matrix = math::mat2::add(matrix1, matrix2);
  assert(matrix.size() == 4);
  assert(math::mat2::equal(matrix, answer) == true);
}

void testSubMatrix2()
{
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};
  std::vector<double> answer = {-40, -40, -40, -40};
  auto matrix = math::mat2::sub(matrix1, matrix2);
  assert(matrix.size() == 4);
  assert(math::mat2::equal(matrix, answer) == true);
}

void testScalarMultiMatrix2(){
  std::vector<double> matrix1 = {10, 20, 30, 40};
  double s = 2;
  std::vector<double> answer = {20, 40, 60, 80};
  auto matrix = math::mat2::scalar_multi(s, matrix1);
  assert(matrix.size() == 4);
  assert(math::mat2::equal(matrix, answer) == true);
}

void testMultiMatrix2(){
  std::vector<double> matrix1 = {1, 2, 3, 4};
  std::vector<double> matrix2 = {5, 6, 7, 8};
  std::vector<double> answer = {19, 22, 43, 50};
  auto matrix = math::mat2::multi(matrix1, matrix2);
  assert(matrix.size() == 4);
  assert(math::mat2::equal(matrix, answer) == true);
}

int main()
{
  testEqual();
  testCreateMatrix2();
  testZeroMatrix2();
  testIdentityMatrix2();
  testAddMatrix2();
  testSubMatrix2();
  testScalarMultiMatrix2();
  testMultiMatrix2(); 
}