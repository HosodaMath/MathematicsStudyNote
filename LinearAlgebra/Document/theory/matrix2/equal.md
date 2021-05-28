# Matrix2

## 1. 行列の相等

2つ以上の行列で互いの対応する成分が等しい行列を**行列の相等**と言う。

### 1.0.0 例

#### 1.0.1 例 行列A1とB1は相等か？


$$
A1 = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
, 
B1 = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
$$
A1とB1は対応するすべて等しいので**互いに相等**言えます。

#### 1.0.2 例 行列A2とB2は相等か？

$$
A2 = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
, 
B2 = 
\begin{bmatrix}
2 & 1 \\
4 & 3 \\
\end{bmatrix}
$$

A2とB2は対応するすべて等しくないので**互いに相等でない**言えます。

### 1.1.0 TypeScriptで実装

```typescript
const equal = (a: Float32Array, b: Float32Array) => {
  let flag = false;
  let sum = 0;
  if (a.length === b.length) {
    [...Array(a.length).keys()].forEach((count) => {
      if (a[count] === b[count]) {
        sum += 1;
      }
    });
  } else {
    throw new Error("Error Matrix A and B do not have the same size");
  }

  if (sum === 4) {
    flag = true;

    return flag;
  }

  return flag;
};
```

### 1.2.0 Example Code

```typescript
const matrix1 = create(10, 20, 30, 40);
const matrix2 = create(10, 20, 30, 40);
equal(matrix1, matrix2)
```

[matrix2のインデックスページに戻る](matrix2.md)
