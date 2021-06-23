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
    explicit Vector2(double initX = 0.0, double initY = 0.0) : x(initX), y(initY) {}
    double vx() const { return x; }
    double vy() const { return y; }

    Vector2 operator+() const { return *this; }
    Vector2 operator-() const { return Vector2(-x, -y); }

    Vector2 &operator+=(const Vector2 &w)
    {
      x += w.x;
      y += w.y;

      return *this;
    }

    Vector2 &operator-=(const Vector2 &w)
    {
      x -= w.x;
      y -= w.y;

      return *this;
    }

    Vector2 &operator*=(const double &m)
    {
      x *= m;
      y *= m;

      return *this;
    }

    Vector2 &operator/=(const double &d)
    {
      if (d == 0)
      {
        std::cout << "Error" << std::endl;
      }
      x /= d;
      y /= d;

      return *this;
    }

    /*
      ベクトルの大きさ
    */
    double length()
    {
      return sqrt(pow(x, 2) + pow(y, 2));
    }

    friend Vector2 operator+(const Vector2 &v, const Vector2 &w)
    {
      return Vector2(v.x + w.x, v.y + w.y);
    }

    friend Vector2 operator-(const Vector2 &v, const Vector2 &w)
    {
      return Vector2(v.x - w.x, v.y - w.y);
    }

    friend Vector2 operator*(const Vector2 &v, const double &s)
    {
      return Vector2(v.x * s, v.y * s);
    }

    friend Vector2 operator/(const Vector2 &v, const double &d)
    {
      if (d == 0)
      {
        std::cout << "Error" << std::endl;
      }
      return Vector2(v.x / d, v.y / d);
    }
  };

  inline std::ostream &operator<<(std::ostream &s, const Vector2 &yx)
  {
    return s << '(' << yx.vx() << ", " << yx.vy() << ')';
  }
} // namespace math
