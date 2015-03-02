function Calculator(){
  return {
    add: function(a,b){
      return a+b;
    },
    sub: function(a,b){
      return a-b;
    },
    div: function(a,b){
      return a/b;
    },
    mul: function(a,b){
      return a*b;
    }
  }
};

describe("Calculator", function(){
  var calculator = new Calculator();
  console.log(calculator)

  describe("add", function() {
    it("is defined", function() {
      expect(calculator.add).toBeDefined();
    });
    it("returns the right total for 1 and 2", function(){
      expect(calculator.add(2,4)).toBe(6)
    });
    it("returns the right total for 10 and 20", function(){
      expect(calculator.add(10, 20)).toBe(30)
    });

  });

  describe("substract", function(){
    it('is defined', function(){
      expect(calculator.sub).toBeDefined();
    });
    it('substracts 8 to 10', function(){
      expect(calculator.sub(10,8)).toBe(2);
    });
    it('substracts 10 to 8', function(){
      expect(calculator.sub(8,10)).toBe(-2);
    });

  })

  describe("divide", function(){

    it('is defined', function(){
      expect(calculator.div).toBeDefined();
    });

    it('divides two numbers (4 and 2)',function(){
      expect(calculator.div(4,2)).toBe(2);
    });

    it('divides big numbers, also', function(){
      expect(calculator.div(4000,2000)).toBe(2);
    });
    it('is infinity if divided by 0', function(){
      expect(calculator.div(2,0)).toBe(Infinity)
    })
  })

  describe("multiply", function(){
    it('is defined', function(){
      expect(calculator.mul).toBeDefined();
    });
    it('multiplies two numbers', function(){
      expect(calculator.mul(2,4)).toBe(8);
    });
  });
});