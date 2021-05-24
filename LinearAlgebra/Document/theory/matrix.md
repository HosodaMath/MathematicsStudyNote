# 線形代数（書きかけ）

## 正方行列

行と列の成分の個数がすべて等しい行列を正方行列と言う。

### 正方行列の例

$$
A = 
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
, 
B = 
\begin{bmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23} \\
b_{31} & b_{32} & b_{33} \\
\end{bmatrix}
,
C = 
\begin{bmatrix}
c_{11} & c_{12} & c_{13} & c_{14} \\
c_{21} & c_{22} & c_{23} & c_{24} \\
c_{31} & c_{32} & c_{33} & c_{34} \\
c_{41} & c_{42} & c_{43} & c_{44} \\
\end{bmatrix}
$$

Aは2x2の正方行列、Bは3x3の正方行列、Cは4x4の正方行列

## 行列の相等

同じ大きさの行列Aと行列Bの対応する成分がすべて等しい場合、行列の相等といいます。
$$
A = B
$$

### 行列の相等の例

#### 例1

$$
A = 
\begin{bmatrix}
10 & 20 \\
20 & 40 \\
\end{bmatrix}
 ,
B = 
\begin{bmatrix}
10 & 20 \\
20 & 40 \\
\end{bmatrix}
$$

AとBは成分が等しいので行列の相等になる。

#### 例2

$$
C = 
\begin{bmatrix}
10 & 20 \\
20 & 40 \\
\end{bmatrix}
 ,
D = 
\begin{bmatrix}
50 & 60 \\
70 & 80 \\
\end{bmatrix}
$$

CとDは成分がすべて異なるので行列の相等にならない。

#### 実装例

2x2の正方行列同士の場合

```typescript
/**
 * @description Equality Matrix4
 * @method
 * @param {Float32Array} a Matrix A
 * @param {Float32Array} b Matrix B
 * @returns flag
 */
export const equal = (a: Float32Array, b: Float32Array) => {
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

2x2の正方行列の場合は**4個**、3x3の正方行列の場合は**9個**、4x4の正方行列の場合は**16個*の成分が等しければ良い。

## ゼロ行列

行列の成分がすべて0の行列をゼロ行列と言う。ゼロ行列は大文字の**O**で表す。
$$
O = 
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$



### 実装例

```c++
/**
 * @description Zero Matrix
 * @method
 * @returns matrix
 */
export const zero = () => {
  const matrix = new Float32Array(4);
  matrix[0] = 0;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;

  return matrix;
};
```

成分をすべて0で満たせれば良い。

## 行列の加法

同じ大きさの行列同士を足すことができます。
$$
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
 + 
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22} \\
\end{bmatrix}
=
\begin{bmatrix}
a_{11} + b_{11} & a_{12} + b_{12} \\
a_{21} + b_{21} & a_{22} + b_{22} \\
\end{bmatrix}
$$

### 例

$$
\begin{bmatrix}
10 & 20 \\
30 & 40 \\
\end{bmatrix}
 + 
\begin{bmatrix}
50 & 60 \\
70 & 80 \\
\end{bmatrix}
=
\begin{bmatrix}
60 & 80 \\
100 & 120 \\
\end{bmatrix}
$$

### 実装例

```typescript
/**
 * @description matrix addition
 * @param {Float32Array} a Matrix A
 * @param {Float32Array} b Matrix B
 * @returns matrix
 */
export const add = (a: Float32Array, b: Float32Array) => {
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



## 行列の減法

加法と同じ大きさの行列を引くことができます。
$$
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
 - 
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22} \\
\end{bmatrix}
=
\begin{bmatrix}
a_{11} - b_{11} & a_{12} - b_{12} \\
a_{21} - b_{21} & a_{22} - b_{22} \\
\end{bmatrix}
$$

### 例

$$
\begin{bmatrix}
10 & 20 \\
30 & 40 \\
\end{bmatrix}
 - 
\begin{bmatrix}
10 & 20 \\
30 & 40 \\
\end{bmatrix}
=
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$

### 実装例

```typescript
/**
 * @description matrix matrix subtraction
 * @param {Float32Array} a Matrix A
 * @param {Float32Array} b Matrix B
 * @returns matrix
 */
export const sub = (a: Float32Array, b: Float32Array) => {
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





## 単位行列

行列の対角成分が1の行列それ以外の成分が0の行列を単位行列と言う。単位行列は大文字の**I**で表す。
$$
I = 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix}
$$

### 実装例

```c++
std::vector<double> identity()
{
  matrix1[0] = 1;
  matrix1[1] = 0;
  matrix1[2] = 0;
  matrix1[3] = 1;

  return matrix1;
}
```

## スカラー倍

スカラー値sと行列Aの掛け算
$$
s *
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
=
\begin{bmatrix}
s * a_{11} & s * a_{12} \\
s * a_{21} & s * a_{22} \\
\end{bmatrix}
$$

### スカラー倍の例

$$
2 *
\begin{bmatrix}
10 & 20 \\
30 & 40 \\
\end{bmatrix}
=
\begin{bmatrix}
2 * 10 & 2 * 20 \\
2 * 30 & 2 * 40 \\
\end{bmatrix}
=
\begin{bmatrix}
20 & 40 \\
60 & 80 \\
\end{bmatrix}
$$

### 実装例

```typescript
/**
 * @description scalar multiple
 * @param s scalar value
 * @param a matrix A
 * @returns matrix
 */
export const scalarMultiply = (s: number, a: Float32Array) => {
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

