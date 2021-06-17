var length = 4;
function callback() {
  console.log("length",this.length);  
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    console.log(arguments[0]);    
    arguments[0]();
  }
};

object.method(callback, 1, 2);