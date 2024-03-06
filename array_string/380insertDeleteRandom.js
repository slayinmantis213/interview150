var RandomizedSet = function () {
    // this.map = new Map();
    // this.arr = new Array();
    this.obj = new Object();
  };
  
  /**
   * @param {number} val
   * @return {boolean}
   */
  RandomizedSet.prototype.insert = function (val) {
    if (this.obj.hasOwnProperty(val)) return false;
    this.obj[val] = val;
    // if (this.map.has(val)) return false;
    // this.map.set(val, this.arr.length);
    // this.arr.push(val);
    return true;
  };
  
  /**
   * @param {number} val
   * @return {boolean}
   */
  RandomizedSet.prototype.remove = function (val) {
    if (!this.obj.hasOwnProperty(val)) return false;
    delete this.obj[val];
    return true;
    // if (!this.map.has(val)) return false;
    // this.arr[this.map.get(val)] = "*";
    // this.map.delete(val);
    // return true;
  };
  
  /**
   * @return {number}
   */
  RandomizedSet.prototype.getRandom = function () {
    const arr = Object.keys(this.obj);
    const len = arr.length;
    const randomNum = Math.floor(Math.random() * len);
    return arr[randomNum];
  };
  
  /**
   * Your RandomizedSet object will be instantiated and called as such:
   * var obj = new RandomizedSet()
   * var param_1 = obj.insert(val)
   * var param_2 = obj.remove(val)
   * var param_3 = obj.getRandom()
   */
  
  const test = new RandomizedSet();
  test.insert(1);
  test.insert(2);
  test.insert(32);
  test.insert(42);
  test.insert(25);
  
  console.log(test.remove(25));
  console.log(test.remove(25));
  
  
  console.log(test.getRandom());