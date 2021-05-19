#include <iostream>
#include "matrix/matrix2.hpp"

void testEqual()
{
  std::vector<double> matrix1_1 = {10, 20, 30, 40};
  std::vector<double> matrix2_1 = {50, 60, 70, 80};
  auto equal1 = math::mat2::Matrix2(matrix1_1);
  auto ans1 = equal1.equal(matrix2_1);
  std::cout << ans1 << std::endl;

  std::vector<double> matrix1_2 = {10, 20, 30, 40};
  std::vector<double> matrix2_2 = {10, 20, 30, 40};
  auto equal2 = math::mat2::Matrix2(matrix1_2);
  auto ans2 = equal2.equal(matrix2_2);
  std::cout << ans2 << std::endl;
}

void testZeroMatrix()
{
  auto matrix = math::mat2::Matrix2();
  auto zero = matrix.zero();
  for (int count = 0; count < zero.size(); count++)
  {
    std::cout << zero[count] << " ";
  }
  std::cout << std::endl;
}

void testAddMatrix()
{
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};

  auto matrix = math::mat2::Matrix2(matrix1);
  auto add = matrix.add(matrix2);
  for (int count = 0; count < add.size(); count++)
  {
    std::cout << add[count] << " ";
  }
  std::cout << std::endl;
}

void testSubMatrix()
{
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};

  auto matrix = math::mat2::Matrix2(matrix1);
  auto sub = matrix.sub(matrix2);
  for (int count = 0; count < sub.size(); count++)
  {
    std::cout << sub[count] << " ";
  }
  std::cout << std::endl;
}

int main()
{
  testEqual();
  testZeroMatrix();
  testAddMatrix();
  testSubMatrix();

  return 0;
}