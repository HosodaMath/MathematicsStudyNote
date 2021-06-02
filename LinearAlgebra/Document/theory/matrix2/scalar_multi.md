# Matrix2

## 4. 行列のスカラー倍（行列の定数倍）

行列の定数倍

### 4.0.0 積を求める

スカラーSと行列Aを掛け行列Cを求める。
$$
S = n
,
A = 
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
$$

$$
S * 
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
 = 
 \begin{bmatrix}
 s * a_{11} & s * a_{12} \\
 s * a_{21} & s * a_{22} \\
 \end{bmatrix}
 =
 \begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22} \\
 \end{bmatrix}
$$

### 4.1.0 計算例

#### 4.1.1 例 定数倍

$$
S = 2,
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
$$

$$
2 * 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
 = 
 \begin{bmatrix}
 2 * 1 & 2 * 2 \\
 2 * 3 & 2 * 4 \\
 \end{bmatrix}
 =
 \begin{bmatrix}
2 & 4 \\
6 & 8 \\
 \end{bmatrix}
$$

### 4.2.0 演算の法則

**定数倍は交換法則が成り立つ**
$$
S * 
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
 = 
 \begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
* S
$$

$$
2 * 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
 = 
 \begin{bmatrix}
 2 * 1 & 2 * 2 \\
 2 * 3 & 2 * 4 \\
 \end{bmatrix}
 =
\begin{bmatrix}
2 & 4 \\
6 & 8 \\
\end{bmatrix}
\\
 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
* 2
 = 
 \begin{bmatrix}
 1 * 2 & 2 * 2 \\
 3 * 2 & 4 * 2 \\
 \end{bmatrix}
 =
\begin{bmatrix}
2 & 4 \\
6 & 8 \\
\end{bmatrix}
$$

### 4.3.0 TypeScriptでの実装例

```typescript
const scalarMultiply = (s: number, a: Float32Array) => {
  const matrix = new Float32Array(4);
  if (a.length === 4) {
    [...Array(a.length).keys()].forEach((count) => {
      matrix[count] = s * a[count];
    });
  } else {
    throw new Error("Error The number of matrix components is four.");
  }

  return matrix;
};
```

[matrix2のインデックスページに戻る](matrix2.md)