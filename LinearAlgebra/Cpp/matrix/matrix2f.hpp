#pragma once
#include <iostream>
#include <vector>
namespace math
{
  namespace mat2
  {
    // 行列の相等
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

    // 2x2行列の作成
    std::vector<double> create(double a11, double a12, double a21, double a22)
    {
      std::vector<double> matrix = {a11, a12, a21, a22};

      return matrix;
    }

    // ゼロ行列
    std::vector<double> zero()
    {
      std::vector<double> matrix = {0, 0, 0, 0};

      return matrix;
    }

    // 単位行列
    std::vector<double> identity()
    {
      std::vector<double> matrix = {1, 0, 0, 1};

      return matrix;
    }

    // 行列の加法
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

    // 行列の減法
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

    //行列のスカラー倍(行列の定数倍)
    std::vector<double> scalar_multi(double s, std::vector<double> matrix1)
    {
      if (matrix1.size() != 4)
      {
        std::cout << "Error" << std::endl;
      }

      std::vector<double> matrix;
      for (int count = 0; count < matrix1.size(); count++)
      {
        matrix.push_back(s * matrix1[count]);
      }

      return matrix;
    }

    // 行列の乗法
    std::vector<double> multi(std::vector<double> matrix1, std::vector<double> matrix2)
    {
      if (matrix1.size() != 4)
      {
        std::cout << "Error" << std::endl;
      }

      std::vector<double> matrix = {0, 0, 0, 0};
      matrix[0] = matrix1[0] * matrix2[0] + matrix1[1] * matrix2[2];
      matrix[1] = matrix1[0] * matrix2[1] + matrix1[1] * matrix2[3];
      matrix[2] = matrix1[2] * matrix2[0] + matrix1[3] * matrix2[2];
      matrix[3] = matrix1[2] * matrix2[1] + matrix1[3] * matrix2[3];

      return matrix;
    }
  }
}