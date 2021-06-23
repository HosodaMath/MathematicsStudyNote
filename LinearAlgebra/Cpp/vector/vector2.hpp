#pragma once
#include <iostream>
#include <cmath>
namespace math
{
  class Vector2
  {
  private:
    double x;
    double y;

  public:
    Vector2() noexcept = default;
    constexpr Vector2(const Vector2 &) noexcept = default;
    constexpr Vector2(double initX, double initY) noexcept : x(initX), y(initY) {}
    constexpr double vx() const { return x; }
    constexpr double vy() const { return y; }

    [[nodiscard]] constexpr Vector2 operator+() const noexcept
    {
      return *this;
    }

    // InverseVector
    [[nodiscard]] constexpr Vector2 operator-() const noexcept
    {
      return {-x, -y};
    }

    // Vector addition
    [[nodiscard]] constexpr Vector2 operator+(const Vector2 &v) const noexcept
    {
      return {x + v.vx(), y + v.vy()};
    }

    // Subtraction of vectors
    [[nodiscard]] constexpr Vector2 operator-(const Vector2 &v) const noexcept
    {
      return {x - v.vx(), y - v.vy()};
    }

    // Scalar Multiplication of a vectors
    [[nodiscard]] constexpr Vector2 operator*(const double &s) const noexcept
    {
      return {x * s, y * s};
    }

    // vector equality
    [[nodiscard]] constexpr bool operator==(const Vector2 &v) const noexcept
    {
      return x == v.vx() && y == v.vy();
    }

    // vector inequality
    [[nodiscard]] constexpr bool operator!=(const Vector2 &v) const noexcept
    {
      return x != v.vx() && y != v.vy();
    }

    // Zero Vector
    [[nodiscard]] static constexpr Vector2 Zero() noexcept
    {
      return {0.0, 0.0};
    }

    // One Vector
    [[nodiscard]] static constexpr Vector2 One() noexcept
    {
      return {1.0, 1.0};
    }
  };

  inline std::ostream &operator<<(std::ostream &s, const Vector2 &yx)
  {
    return s << '(' << yx.vx() << ", " << yx.vy() << ')';
  }
}