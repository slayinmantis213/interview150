var MinStack = function () {
    this.minStack = new Array();
  };
  
  /**
   * @param {number} val
   * @return {void}
   */
  MinStack.prototype.push = function (val) {
    
    this.minStack.push(val);
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function () {
    this.minStack.length = this.minStack.length - 1;
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function () {
    return this.minStack[this.minStack.length - 1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function () {
    return Math.min(...this.minStack);
  };
  
  /**
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(val)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */