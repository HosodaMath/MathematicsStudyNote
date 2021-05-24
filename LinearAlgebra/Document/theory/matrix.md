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

```c++
bool equal(std::vector<double> matrix2)
{
    bool flag = false;
    auto n = (long long)matrix1.size();
    auto m = (long long)matrix2.size();
    auto sum = 0;
    if (n == m){
     for (long long count = 0; count < n; count++){
       if (matrix1[count] == matrix2[count]){
           sum += 1;
       }
     }
    }
    if (sum == 4){
        flag = true;
        return flag;
    }
    return flag;
}
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

### ゼロ行列の例

$$
AO = 
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
, 
BO = 
\begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{bmatrix}
,
CO = 
\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{bmatrix}
$$

### 実装例

```c++
std::vector<double> zero()
{
  matrix1[0] = 0;
  matrix1[1] = 0;
  matrix1[2] = 0;
  matrix1[3] = 0;

  return matrix1;
}
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

