#pragma once
#include <iostream>
#include <vector>
namespace math
{
  namespace mat2
  {
    bool equal(std::vector<double> matrix1, std::vector<double> matrix2)
    {
      bool flag = false;
      auto n = (long long)matrix1.size();
      auto m = (long long)matrix2.size();
      auto sum = 0;
      if (n == m)
      {
        for (long long count = 0; count < n; count++)
        {
          if (matrix1[count] == matrix2[count])
          {
            sum += 1;
          }
        }
      }

      if (sum == 4)
      {
        flag = true;
        return flag;
      }

      return flag;
    }

    std::vector<double> zero()
    {
      std::vector<double> matrix = {0, 0, 0, 0};

      return matrix;
    }

    std::vector<double> add(std::vector<double> matrix1, std::vector<double> matrix2)
    {
      if (matrix1.size() != 4 && matrix2.size() != 4)
      {
        std::cout << "Error" << std::endl;
      }

      std::vector<double> matrix;
      for (int count = 0; count < matrix1.size(); count++)
      {
        matrix.push_back(matrix1[count] + matrix2[count]);
      }

      return matrix;
    }

    std::vector<double> sub(std::vector<double> matrix1, std::vector<double> matrix2)
    {
      if (matrix1.size() != 4 && matrix2.size() != 4)
      {
        std::cout << "Error" << std::endl;
      }

      std::vector<double> matrix;
      for (int count = 0; count < matrix1.size(); count++)
      {
        matrix.push_back(matrix1[count] - matrix2[count]);
      }

      return matrix;
    }
  }
}