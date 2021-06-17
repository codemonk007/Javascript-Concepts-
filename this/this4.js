const object = {
    message: 'Hello, World!'
  };
  
  function logMessage() {
    console.log(this.message); // "Hello, World!"
  }
  
  // How can you call logMessage function so that it logs "Hello, World!"?
