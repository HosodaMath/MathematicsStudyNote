/*
  2x2の正方行列の実装
  参考文献
  数学ガール秘密のノート 行列 結城浩
  線型代数学(新装版) 佐武 一郎 
  明解演習 線形代数 (明解演習シリーズ) 小寺 平治
  Introduction to Applied Linear Algebra – Vectors, Matrices, and Least Squares (http://vmls-book.stanford.edu/)
*/
#pragma once
#include <iostream>
#include <vector>
namespace math
{
  namespace mat2
  {
    class Matrix2
    {
    private:
      std::vector<double> matrix1;

    public:
      // 2x2の正方行列
      Matrix2(std::vector<double> initMatrix = {0, 0, 0, 0}) : matrix1(initMatrix) {}

      // 行列の相等
      bool equal(std::vector<double> matrix2)
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
        matrix1[0] = 0;
        matrix1[1] = 0;
        matrix1[2] = 0;
        matrix1[3] = 0;

        return matrix1;
      }

      std::vector<double> identity()
      {
        matrix1[0] = 1;
        matrix1[1] = 0;
        matrix1[2] = 0;
        matrix1[3] = 1;

        return matrix1;
      }

      std::vector<double> add(std::vector<double> matrix2)
      {
        matrix1[0] = matrix1[0] + matrix2[0];
        matrix1[1] = matrix1[1] + matrix2[1];
        matrix1[2] = matrix1[2] + matrix2[2];
        matrix1[3] = matrix1[3] + matrix2[3];

        return matrix1;
      }

      std::vector<double> sub(std::vector<double> matrix2)
      {
        matrix1[0] = matrix1[0] - matrix2[0];
        matrix1[1] = matrix1[1] - matrix2[1];
        matrix1[2] = matrix1[2] - matrix2[2];
        matrix1[3] = matrix1[3] - matrix2[3];

        return matrix1;
      }

      //行列のスカラー倍(行列の定数倍)
      std::vector<double> scalar_multi(double s)
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
      std::vector<double> multi(std::vector<double> matrix2)
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
    };
  }
}