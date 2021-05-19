#include <iostream>
#include "matrix/matrix2f.hpp"

void testZeroMatrix2(){
  auto zeroMatrix = math::mat2::zero();
  for(int count = 0; count < zeroMatrix.size(); count++){
    std::cout << zeroMatrix[count] << " ";
  }
  std::cout << std::endl;
}

void testAddMatrix2(){
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};
  auto matrix = math::mat2::add(matrix1, matrix2);
  for(int count = 0; count < matrix.size(); count++){
    std::cout << matrix[count] << " ";
  }
  std::cout << std::endl;
}

void testSubMatrix2(){
  std::vector<double> matrix1 = {10, 20, 30, 40};
  std::vector<double> matrix2 = {50, 60, 70, 80};
  auto matrix = math::mat2::sub(matrix1, matrix2);
  for(int count = 0; count < matrix.size(); count++){
    std::cout << matrix[count] << " ";
  }
  std::cout << std::endl;
}

void testEqual(){
  std::vector<double> matrix1_1 = {10, 20, 30, 40};
  std::vector<double> matrix2_1 = {50, 60, 70, 80};
  auto ans1 = math::mat2::equal(matrix1_1, matrix2_1);
  std::cout << ans1 << std::endl;

  std::vector<double> matrix1_2 = {10, 20, 30, 40};
  std::vector<double> matrix2_2 = {10, 20, 30, 40};
  auto ans2 = math::mat2::equal(matrix1_2, matrix2_2);
  std::cout << ans2 << std::endl;
}

int main(){
  testZeroMatrix2();
  testAddMatrix2();
  testSubMatrix2();
  testEqual();
}