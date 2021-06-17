const object = {
    message: 'Hello, World!',
  
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    }
  };
  
  console.log(object.getMessage()); // What is logged?