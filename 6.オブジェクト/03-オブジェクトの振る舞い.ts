// 振る舞いとはオブジェクトの状態の読み取り、変更、更新を行う処理のことを指す。
// オブジェクトの振る舞いは、オブジェクトのクラスのメソッド内で定義される。
// 振る舞いは、オブジェクトができることを記述する「動詞」であり、
// 状態は、オブジェクトの状態を記述する「名詞」のような役割を持つ。

class Car {
    static wheels = 4;
  
    constructor(
      public make: string,
      public model: string,
      public year: number,
      public vin: string,
      public color: string,
      public velocity: number,
      public fuelEconomy: number,
      public tankCapacity: number,
      public weightKg: number
    ) {
        this.make = make
        this.model = model
        this.year = year
        this.vin = vin
        this.color = make
        this.velocity = velocity
        this.fuelEconomy = fuelEconomy
        this.fuelEconomy = fuelEconomy
        this.weightKg = weightKg
    }
  
    getCarString() {
      return (
        this.make +
        " " +
        this.model +
        " Year: " +
        this.year +
        " Vin: " +
        this.vin +
        " Color: " +
        this.color +
        " Velocity: " +
        this.velocity +
        "mps Fuel economy: " +
        this.fuelEconomy +
        "mile/gallon Tank capacity: " +
        this.tankCapacity +
        " Weight: " +
        this.weightKg +
        "Kg. It has " +
        Car.wheels +
        " wheels."
      );
    }
  
    // 停止せずに移動できる最大マイル数を計算します
    // 燃費とタンクの大きさから算出できます
    milesWithoutStop() {
      return this.fuelEconomy * this.tankCapacity;
    }
  
    // 1 時間に進むことができる距離を計算します
    getDistance() {
      return this.velocity * 60 * 60;
    }
  
    // ガソリンが空になるのにかかる時間を計算します
    hoursToEmpty() {
      return Math.round((this.milesWithoutStop() / this.getDistance()) * 100) / 100;
    }
  
    // 車が持つ運動エネルギーを計算します
    // 運動エネルギー = 1/2 mv^2
    getEnergy() {
      return (this.velocity ** 2) * this.weightKg / 2;
    }
  }
  
  let teslaS = new Car("Tesla", "Model S", 2013, "5YJSA1CN0DFP13393", "Black", 0.04, 98, 12, 2162);
  
  console.log(teslaS.getCarString());
  console.log(teslaS.milesWithoutStop());
  console.log(teslaS.getDistance());
  console.log(teslaS.hoursToEmpty());
  console.log(teslaS.getEnergy());
  
  let porsche88 = new Car("Porsche", "928", 1988, "WP0JB0926JS861742", "Red", 0.057, 36, 12, 1390);
  
  console.log(porsche88.getCarString());
  console.log(porsche88.milesWithoutStop());
  console.log(porsche88.getDistance());
  console.log(porsche88.hoursToEmpty());
  console.log(porsche88.getEnergy());
  
  let ferrari08 = new Car("Ferrari", "F430 Spyder", 2008, "ZFFEZ59E780163510", "Orange", 0.059, 11, 18, 1570);
  
  console.log(ferrari08.getCarString());
  console.log(ferrari08.milesWithoutStop());
  console.log(ferrari08.getDistance());
  console.log(ferrari08.hoursToEmpty());
  console.log(ferrari08.getEnergy());
  