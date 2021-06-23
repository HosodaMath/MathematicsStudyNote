#include <iostream>
#include <cassert>
#include "vector2.hpp"

void constructorTesting()
{
  auto v = math::Vector2(0.0, 0.0);
  assert(v.vx() == 0.0);
  assert(v.vy() == 0.0);
}

void outputTesting()
{
  auto v = math::Vector2(0.0, 0.0);
  std::cout << v << std::endl;
}

void inverseVectorTesting()
{
  auto v = math::Vector2(1.0, 2.0);
  assert(-v.vx() == -1.0);
  assert(-v.vy() == -2.0);
  // std::cout << -v << std::endl;
}

void vectorAdditionTesting()
{
  auto v = math::Vector2(1.0, 2.0);
  auto w = math::Vector2(9.0, 8.0);
  auto result = v + w;
  assert(result.vx() == 10.0);
  assert(result.vy() == 10.0);
  // std::cout << result << std::endl;
}

void vectorSubtractionTesting()
{
  auto v = math::Vector2(1.0, 2.0);
  auto w = math::Vector2(11.0, 12.0);
  auto result = v - w;
  assert(result.vx() == -10.0);
  assert(result.vy() == -10.0);
  // std::cout << result << std::endl;
}

void vectorScalarMultiplicationTesting()
{
  auto v = math::Vector2(10.0, 20.0);
  double s = 10.0;
  auto result = v * s;
  assert(result.vx() == 100.0);
  assert(result.vy() == 200.0);
  // std::cout << result << std::endl;
}

void vectorEqualityTesting()
{
  auto v = math::Vector2(1.0, 2.0);
  auto w = math::Vector2(1.0, 2.0);
  auto result = v == w;
  assert(result == true);
  // std::cout << result << std::endl;
}

void vectorInequalityTesting()
{
  auto v = math::Vector2(1.0, 2.0);
  auto w = math::Vector2(1.5, 2.5);
  auto result = v != w;
  assert(result == true);
  // std::cout << result << std::endl;
}

void zeroVectorTesting(){
  auto v = math::Vector2().Zero();
  auto result = v;
  assert(result.vx() == 0.0 && result.vy() == 0.0);
  // std::cout << result << std::endl;
}

void oneVectorTesting(){
  auto v = math::Vector2().One();
  auto result = v;
  assert(result.vx() == 1.0 && result.vy() == 1.0);
  // std::cout << result << std::endl;
}

int main()
{
  // コンストラクタのテスト
  constructorTesting();

  // 出力テスト
  // outputTesting();

  // 逆ベクトル
  inverseVectorTesting();

  // ベクトルの加算
  vectorAdditionTesting();

  // ベクトルの減算
  vectorSubtractionTesting();

  // ベクトルのスカラー倍
  vectorScalarMultiplicationTesting();

  // ベクトルの相等
  vectorEqualityTesting();

  // ベクトルの非相等
  vectorInequalityTesting();

  // ゼロベクトル
  zeroVectorTesting();

  // 1ベクトル
  oneVectorTesting();

  return 0;
}