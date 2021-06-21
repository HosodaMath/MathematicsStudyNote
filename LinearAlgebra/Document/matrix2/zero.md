# Matrix2

## ゼロ行列

すべての成分が0の行列
$$
O = 
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$

### ゼロ行列と演算

ゼロ行列に値を足してもそのまま変わりません。

#### 例1 行列Aと行列Oを足すと....


$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
O = 
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$

$$
\begin{bmatrix}
1 + 0 & 2 + 0 \\
3 + 0 & 4 +  0 \\
\end{bmatrix}
=
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
$$
つまり以下と**同じ意味**になります。
$$
A + O = A
$$
対応する成分がすべて同じ場合でそれらを引くとゼロ行列を求められる。
$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
B = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
$$

$$
\begin{bmatrix}
1 - 1 & 2 - 2 \\
3 - 3 & 4 -  4 \\
\end{bmatrix}
=
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$

### TypeScriptでの実装例

```typescript
const zero = () => {
  const matrix = new Float32Array(4);
  matrix[0] = 0;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;

  return matrix;
};
```



以下と同じ意味になります。
$$
A = B \wedge A - B = O
$$
[matrix2のインデックスページに戻る](matrix2.md)