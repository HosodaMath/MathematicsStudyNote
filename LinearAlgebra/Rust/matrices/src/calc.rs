/// Test用ライブラリー
/// 2値演算
pub struct Calc {
  a: f64,
  b: f64,
}

impl Calc {
  ///
  pub fn new(init_a: f64, init_b: f64) -> Calc {
    Calc {
      a: init_a,
      b: init_b,
    }
  }
}

impl Calc {
  pub fn get_a(&self) -> f64 {
    return self.a;
  }

  pub fn get_b(&self) -> f64 {
    return self.b;
  }
}

impl Calc {
  pub fn add(&self) -> f64 {
    return self.a + self.b;
  }

  pub fn sub(&self) -> f64 {
    return self.a - self.b;
  }

  pub fn multi(&self) -> f64 {
    return self.a * self.b;
  }

  pub fn div(&self) -> f64 {
    return self.a / self.b;
  }
}
