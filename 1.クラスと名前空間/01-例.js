// クラス構造を利用して、名前空間として使うことができます
// クラスでは変数や関数を保存することができます
class Circle {
  // クラス内ではデータはメンバ変数と呼ばれます
  // メンバ変数の定義
  // クラスを名前空間として使う場合は、static をつけます
  static PI = 3.14;

  // クラス内では関数はメソッドと呼ばれます
  // メソッドの定義
  static perimeter(radius) {
    // 円周は 2πr
    // メンバ変数へのアクセスは、メンバ(.)演算子を使います
    return 2 * Circle.PI * radius;
  }

  static area(radius) {
    // 円の面積は πr^2
    return Circle.PI * radius * radius;
  }
}

class Square {
  static perimeter(side) {
    // 正方形の周囲の長さは 4 × 1 辺
    return 4 * side;
  }

  static area(side) {
    // 正方形の面積は (1 辺)^2
    return side * side;
  }
}


// メンバ変数とメソッドの例

class EquilateralTriangle {
  static perimeter(side) {
    // 正三角形の周囲の長さは 3 × 1 辺
    return 3 * side;
  }

  static area(side) {
    // 正三角形の面積は √3/4 × (1 辺)^2
    // √x は x^0.5 なので、べき乗(**)演算子を使って求めることができます
    return (3 ** 0.5 / 4) * side * side;
  }
}

// クラス（名前空間）の中にある関数にアクセスします
console.log(Circle.perimeter(4));
console.log(Circle.area(4));

console.log(Square.perimeter(4));
console.log(Square.area(4));

console.log(EquilateralTriangle.perimeter(4));
console.log(EquilateralTriangle.area(4));

// クラス（名前空間）の中にあるメンバ変数にアクセスします
console.log(Circle.PI);


// 名前空間使用例
class MathThings {
  // 数値を受け取り、加算を実行
  static add(x, y) {
    return x + y;
  }
}

// 文字列を受け取り、連結を実行
function add(s1, s2) {
  return s1 + s2;
}

// 名前空間のおかげで名前が衝突せずに済む
console.log(MathThings.add(5, 4));
console.log(add("hello", "world"));
