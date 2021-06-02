# Matrix2

## 3. 行列の減法

2つの行列の差を求める。

### 3.0.0 差を求める

行列Aと行列Bを引いて行列Cを求める。
$$
A = 
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
, 
B = 
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22} \\
\end{bmatrix}
,
C = 
\begin{bmatrix}
C_{11} & C_{12} \\
C_{21} & C_{22} \\
\end{bmatrix}
$$

$$
\begin{bmatrix}
a_{11} - b_{11} & a_{12} - b_{12} \\
a_{21} - b_{21} & a_{22} -  b_{22} \\
\end{bmatrix}
=
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22} \\
\end{bmatrix}
$$

### 3.1.0 計算例

#### 3.1.1 例 行列Aと行列Bの差を求める。

$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
, 
B = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
,
C = 
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$

$$
\begin{bmatrix}
1 - 1 & 2 - 2 \\
3 - 3 & 4 - 4 \\
\end{bmatrix}
=
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$

### 3.2.0  演算の法則

交換法則は成り立たない。

### 3.3.0 TypeScriptでの実装例

```typescript
const sub = (a: Float32Array, b: Float32Array) => {
  const matrix = new Float32Array(4);
  if (a.length === b.length) {
    [...Array(a.length).keys()].forEach((count) => {
      matrix[count] = a[count] - b[count];
    });
  } else {
    throw new Error("Error Matrix A and B do not have the same size");
  }

  return matrix;
};
```

[matrix2のインデックスページに戻る](matrix2.md)