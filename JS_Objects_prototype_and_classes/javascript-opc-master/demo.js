'use strict'; 
(function() {

  display('Hello World!!! ??');

  //class

  class Person{
    constructor(firstName, lastName , age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    isAdult(){
      return this.age > 18;
    }

    get fullName(){
      return this.firstName + ' ' + this.lastName;
    }
    set fullName(name){
      var nameParts = name.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];      
    }

  }
  Object.defineProperty(Person.prototype,'fullName' , {enumerable : true});
  let shail = new Person("Shailendra" , "Rajput" , 37);

  class Student extends Person{
    constructor(firstName, lastName, age){
      super(firstName,lastName,age);
      this.courses = [];
    }
    enrollIn(courseID){
      this.courses.push(courseID);
    }
    EnrolledCourse(){
      return this.fullName + ' has enrolled this courses : ' + this.courses.join(", ");
    }
  }

  let aaradhya = new Student("aaradhya" , "rajput" , 6);
  aaradhya.enrollIn("english");
  aaradhya.enrollIn("maths");
  display(aaradhya.EnrolledCourse());

  
  display(aaradhya);
  display(aaradhya.prototype);
  display(aaradhya.__proto__);
  display(aaradhya.fullName);
  display(Object.keys(aaradhya));


  display(shail);
  display(shail.prototype);
  display(shail.__proto__);
  display(shail.fullName);
  display(Object.keys(shail));

  display(Person);
  display(Person.prototype);
  display(Person.__proto__);
  
  
  /*
  //Inheritance and prototype object

  function Person(firstName , lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.reverseName = function(){
      return this.lastName + ' ' + this.firstName;
    };
    Object.defineProperty(this, "fullName" , {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      }
      ,
      enumerable : true
    } );
    this.printName = this.firstName+' '+this.lastName;
  };

  function Student(firstName, lastName, age){
    Person.call(this, firstName,lastName,age);
    this.courses = [];
    this.enroll = function(courseID){
      this.courses.push(courseID);
    };
    Object.defineProperty(this , "EnrolledCourses" , {
        get : function(){
          return this.fullName + ' has enrolled for following courses = ' + this.courses.join(',  ');
        },
        enumerable : true
    } );

  };
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  let shail1 = new Student('shailendra', 'Rajput' , 37);
  shail1.enroll("ABC");
  shail1.enroll("AtoZ");
  display(shail1.EnrolledCourses);
  display(shail1);
  display(Student);





  display (Person);
  var shail = new Person("shailendra" , "Rajput" , 37);
  display(shail);
  display(shail.reverseName());

  display(Object.keys(shail));   
  /*
//constructor function ==classes
function person(fname, lname, age)
{
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.isAdult = function(){     return this.age>18;  }
};

display(Object.keys(person));
let shail = new person("Shailendra" , "Rajput" , 19);
display(Object.keys(shail));
display(shail);
display("values are : ");


Object.defineProperty(shail , 'fullName', {
  get : function(){
      return this.firstName + ' ' + this.lastName;
  },
  set : function(value){
      var nameParts = value.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
  } 
});

shail.fullName = "Aaradhya Rajput";
display (shail.fullName);











/*
  let person = {
    firstName : "shailendra",
    lastName : "Rajput",
    fullName(){
      return this.firstName + " "+ this.lastName;
    }
  };


  let healthData ={
    height: 185,
    weight:90
  };

  display(person);
  let per = Object.assign({} , person, healthData);
  display(person);
  display(per);

/*
  let per2 = Object.assign(person, healthData);
  display(person);
  display(per2);




  /*
  display( "42"==42);
  display( "42"===42);
 

  display( NaN == NaN); //False
  display( NaN === NaN); //False
  display( Object.is(NaN, NaN));//true


  display( +0 == -0); //False
  display( NaN === NaN); //False
  display( Object.is(NaN, NaN));//true  

  let person = {
    firstName : "shailendra",
    lastName : "Rajput",
    fullName(){
      return this.firstName + " "+ this.lastName;
    }
  };

  let person2 = person;
  //Object.assign(person2 ,person );
  person2.firstName = "Aaradhya";
  //person2 = 100;
  display(person);




/*
  let person = {
    firstName : "shailendra",
    lastName : "Rajput",
    fullName(){
      return this.firstName + " "+ this.lastName;
    }

  };
  display(person);
  display () ;
person.age = 37;

person.isAdult = function(){
  if(this.age >= 18 )
    display( `${this.fullName()} is Adult`);
  else
    display( `${this.fullName()} is Not Adult`);
};


person.isAdult();

//display (Object.keys(person));
 
//for (let propertyName in person)
  //display(propertyName);


  for (let name in Object){
    display(propertyName);
  }

  display (Object.keys(Object));


*/


})();

