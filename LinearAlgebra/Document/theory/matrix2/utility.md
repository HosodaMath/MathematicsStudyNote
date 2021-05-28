# Matrix2

## 0. ユーティリティ

行列の作成と初期化関数の実装

行列を構成している要素を**成分**と言う。

### 0.0.1 コンピューターで行列を表すには？

**配列として扱う**

### 0.0.2 行列（配列）の型はどうするか？

**floatあるいはdouble型のみ扱う**

### 0.0.3 行列の作成

もしも以下のような行列を作成したい場合どうしたらよいか？
$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
$$
TypeScriptの場合は以下のように実装する。

```typescript
const create = (a11: number, a12: number, a21: number, a22: number) => {
  const matrix = new Float32Array(4);
  matrix[0] = a11;
  matrix[1] = a12;
  matrix[2] = a21;
  matrix[3] = a22;

  return matrix;
};
```

### 0.0.4 Example Code

```typescript
const A = create(1.0, 2.0, 3.0, 4.0);
const B = create(1.0, 0.0, 0.0, 1.0);
```

上記のコードを実行すると以下のような配列が生成される。

```typescript
A = [1.0, 2.0, 3.0, 4.0];
B = [1.0, 0.0, 0.0, 1.0];
```

配列```A = [1.0, 2.0, 3.0, 4.0]```は以下と同じ意味にります。
$$
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
\end{bmatrix}
$$
配列```B = [1.0, 0.0, 0.0, 1.0]```は以下と同じ意味にります。
$$
B = 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix}
$$



### 0.1.0 行列の初期化

2x2行列では成分の個数は必ず4つないとだめなので安全に初期化するには初期化関数を実装する必要がある。

TypeScriptでは以下のように実装する。

```typescript
const init = () => {
  const matrix = new Float32Array(4);

  return matrix;
}
```



### 0.1.1  Example Code

```typescript
const matrix = init();
```

上記のコードを実行すると以下のような配列が生成される。

```typescript
matrix = [0.0, 0.0, 0.0, 0.0];
```

この配列は以下と同じ意味になります。
$$
matrix = 
\begin{bmatrix}
0 & 0 \\
0 & 0 \\
\end{bmatrix}
$$

### 0.1.2  ```init```と```create```の違い

初期化の観点からは大きな違いはありません。どちらも2x2の行列を生成します。

[matrix2のインデックスページに戻る](matrix2.md)
