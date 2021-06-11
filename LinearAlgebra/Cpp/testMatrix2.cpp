#include <iostream>
#include <cassert>
#include "matrix/matrix2.hpp"

void testConstructor()
{
  auto matrix = math::mat2::Matrix2();
}

void testEqual()
{
  // Test1 false
  std::vector<double> matrixA1 = {10, 20, 30, 40};
  std::vector<double> matrixB1 = {50, 60, 70, 80};
  auto matrix1 = math::mat2::Matrix2();
  auto equal1 = matrix1.equal(matrixA1, matrixB1);
  assert(equal1 == false);

  // Test2 true
  std::vector<double> matrixA2 = {10, 20, 30, 40};
  std::vector<double> matrixB2 = {10, 20, 30, 40};
  auto matrix2 = math::mat2::Matrix2();
  auto equal2 = matrix2.equal(matrixA2, matrixB2);
  assert(equal2 == true);
}

void testCreate()
{
  // Test Create
  auto init_matrix1 = math::mat2::Matrix2();
  // 2x2行列の作成
  auto matrix = init_matrix1.create(10, 20, 30, 40);
  // 比較行列
  std::vector<double> answer = {10, 20, 30, 40};

  // 比較
  auto init_matrix2 = math::mat2::Matrix2();
  auto equal = init_matrix2.equal(matrix, answer);
  assert(equal == true);
}

void testZero()
{
  auto matrix = math::mat2::Matrix2();
  auto zero_matrix = matrix.zero();
  // 比較行列
  std::vector<double> answer = {0, 0, 0, 0};

  // 比較
  auto init_matrix = math::mat2::Matrix2();
  auto equl = init_matrix.equal(zero_matrix, answer);
  assert(equl == true);
}

void testIdentity()
{
  auto matrix = math::mat2::Matrix2();
  auto identity_matrix = matrix.identity();
  // 比較行列
  std::vector<double> answer = {1, 0, 0, 1};

  // 比較
  auto init_matrix = math::mat2::Matrix2();
  auto equl = init_matrix.equal(identity_matrix, answer);
  assert(equl == true);
}

void testAdd()
{
  std::vector<double> matrixA = {10, 20, 30, 40};
  std::vector<double> matrixB = {50, 60, 70, 80};
  // 標本行列
  std::vector<double> sample = {60, 80, 100, 120};

  // 比較
  auto init_matrix1 = math::mat2::Matrix2();
  auto add = init_matrix1.add(matrixA, matrixB);
  auto answer = math::mat2::Matrix2();
  auto equal = answer.equal(add, sample);
  assert(equal == true);
}

void testSub()
{
  std::vector<double> matrixA = {10, 20, 30, 40};
  std::vector<double> matrixB = {50, 60, 70, 80};
  // 標本行列
  std::vector<double> sample = {-40, -40, -40, -40};

  // 比較
  auto init_matrix1 = math::mat2::Matrix2();
  auto sub = init_matrix1.sub(matrixA, matrixB);
  auto answer = math::mat2::Matrix2();
  auto equal = answer.equal(sub, sample);
  assert(equal == true);
}

int main()
{
  // Test Mateix2 Constructor
  testConstructor();

  // Test Create Matrix
  testCreate();

  // Test Equal Matrix
  testEqual();

  // Test Zero Matrix
  testZero();

  // Test Identity Matrix
  testIdentity();

  // Test Addition
  testAdd();

  // Test Subtraction
  testSub();

  return 0;
}