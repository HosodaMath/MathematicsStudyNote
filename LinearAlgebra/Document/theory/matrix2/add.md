# Matrix2

## 2. 行列の加法

2つの行列の和を求める。

### 2.0.0   和を求める

行列Aと行列Bを足して行列Cを求める。
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
a_{11} + b_{11} & a_{12} + b_{12} \\
a_{21} + b_{21} & a_{22} +  b_{22} \\
\end{bmatrix}
=
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22} \\
\end{bmatrix}
$$

### 2.1.0 計算例

#### 2.1.1 例 2つの行列AとBの和を求める。

$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
, 
B = 
\begin{bmatrix}
5 & 6 \\
7 & 8 \\
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
1 + 5 & 2 + 6 \\
3 + 7 & 4 + 8 \\
\end{bmatrix}
=
\begin{bmatrix}
6 & 8 \\
10 & 12 \\
\end{bmatrix}
$$

#### 2.1.2 例 片方の行列の成分が全てゼロの2つの行列AとBの和を求める。

Bの行列の成分は**全てゼロ**
$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
, 
B = 
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
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
1 + 0 & 2 + 0 \\
3 + 0 & 4 + 0 \\
\end{bmatrix}
=
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
$$

**行列成分のすべてが0の行列を[ゼロ行列](zero.md)と言う。**

### 2.2.0 演算の法則

行列の加法は交換法則が成り立つ。
$$
\begin{bmatrix}
a_{11} + b_{11} & a_{12} + b_{12} \\
a_{21} + b_{21} & a_{22} +  b_{22} \\
\end{bmatrix}
=
\begin{bmatrix}
b_{11} + a_{11} & b_{12} + a_{12} \\
b_{21} + a_{21} & b_{22} + a_{22} \\
\end{bmatrix}
$$
例えば....
$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
, 
B = 
\begin{bmatrix}
5 & 6 \\
7 & 8 \\
\end{bmatrix}
$$

$$
A + B = 
\begin{bmatrix}
1 + 5 & 2 + 6 \\
3 + 7 & 4 + 8 \\
\end{bmatrix}
=
\begin{bmatrix}
6 & 8 \\
10 & 12 \\
\end{bmatrix}
$$
AとBを逆にしても
$$
B + A = 
\begin{bmatrix}
5 + 1 & 6 + 2 \\
7 + 3 & 8 + 4 \\
\end{bmatrix}
=
\begin{bmatrix}
6 & 8 \\
10 & 12 \\
\end{bmatrix}
$$

$$
A + B = B + A
$$

が成り立つ。



### 2.3.0 TypeScriptでの実装例

```typescript
const add = (a: Float32Array, b: Float32Array) => {
  const matrix = new Float32Array(4);
  if (a.length === b.length) {
    [...Array(a.length).keys()].forEach((count) => {
      matrix[count] = a[count] + b[count];
    });
  } else {
    throw new Error("Error Matrix A and B do not have the same size");
  }

  return matrix;
};
```

[matrix2のインデックスページに戻る](matrix2.md)