function Pet(name) {
    this.name = name;
  
    this.getName = () => this.name;
  }
  
  const cat = new Pet('Fluffy');
  
  console.log(cat.getName()); // What is logged?
  
  const { getName } = cat;
  console.log(getName());     // What is logged?