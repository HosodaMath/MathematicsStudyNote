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
      std::vector<double> matrix;

    public:
      Matrix2()
      {
        matrix = {1, 0, 0, 1};
      };

      /*
        2x2行列の作成
      */
      std::vector<double> create(double a11, double a12, double a21, double a22)
      {
        matrix[0] = a11;
        matrix[1] = a12;
        matrix[2] = a21;
        matrix[3] = a22;

        return matrix;
      }

      /*
        行列の相等
      */
      bool equal(std::vector<double> matrixA, std::vector<double> matrixB)
      {
        bool flag = false;
        auto n = (long long)matrixA.size();
        auto m = (long long)matrixB.size();
        auto sum = 0;
        if (n == 4 && m == 4)
        {
          for (long long count = 0; count < n; count++)
          {
            if (matrixA[count] == matrixB[count])
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

      /*
        2x2のゼロ行列を作成
      */
      std::vector<double> zero()
      {
        for (int count = 0; count < matrix.size(); count++)
        {
          matrix[count] = 0;
        }

        return matrix;
      }

      /*
        2x2の単位行列を作成
      */
      std::vector<double> identity()
      {
        matrix = create(1, 0, 0, 1);

        return matrix;
      }

      /*
        行列の加法
        例外処理を実装する
      */
      std::vector<double> add(std::vector<double> matrixA, std::vector<double> matrixB)
      {
        auto n = (long long)matrixA.size();
        auto m = (long long)matrixB.size();
        if (n == 4 && m == 4)
        {
          for (long long count = 0; count < n; count++)
          {
            matrix[count] = matrixA[count] + matrixB[count];
          }
        }
        else
        {
          std::cout << "The number of components of matrix A and matrix B is 4 each." << std::endl;
        }

        return matrix;
      }

      /*
        行列の減法
        例外処理を実装する
      */
      std::vector<double> sub(std::vector<double> matrixA, std::vector<double> matrixB)
      {
        auto n = (long long)matrixA.size();
        auto m = (long long)matrixB.size();
        if (n == 4 && m == 4)
        {
          for (long long count = 0; count < n; count++)
          {
            matrix[count] = matrixA[count] - matrixB[count];
          }
        }
        else
        {
          std::cout << "The number of components of matrix A and matrix B is 4 each." << std::endl;
        }

        return matrix;
      }
    };

  }
}