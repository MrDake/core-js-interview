function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
   
  Person.prototype.getFullName = function() {
    return this.name + " " + this.lastName;
  };
   
  function Developer(skills, name, lastName) {
    this._super.call(this, name, lastName);
    this.skills = skills;
  }
   
  Developer.prototype = Object.create(Person.prototype);
  Developer.prototype.constructor = Developer;
  Developer.prototype._super = Person;
   
  Developer.prototype.getDeveloperInfo = function() {
    return this.name + " " + this.lastName + ", skills: " + this.skills;
  };
   
  var developer = new Developer("JavaScript, React, Redux", "John", "Doe");
  console.log(developer.getFullName());
  console.log(developer.getDeveloperInfo());
  
  console.log('------------------------------------------');
  // use classes
  
  
  class PersonClass {
      constructor(name, lastName) {
          this.name = name;
          this.lastName = lastName;
      }
  
      getFullName() {
          return `${this.name} ${this.lastName}`;
      }
  }
  
  class DeveloperClass extends PersonClass {
      constructor(skills, name, lastName) {
          super(name, lastName);
          this.skills = skills;
      }
  
      getDeveloperInfo() {
          return `${this.name} ${this.lastName}, ${this.skills}`;
      }
  }
  
  let dev = new Developer("JavaScript, React, Redux", "John", "Doe");
  console.log(dev.getFullName());
  console.log(dev.getDeveloperInfo());
  