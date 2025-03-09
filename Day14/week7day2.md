Agenda:
-------
Class
Object
classroom
Accessmodifier
Inheritance
classroom
Polymorphism
classroom

OOPs ->Object oriented Programming
  works based on object
 
   -->organize the code 
   -->build resusable methods 
   -->scalability
   -->Easy maintenance
   -->Redundancy of the code will reduced 

   combining the data and methods 

   js -->prototype based 
      -->dynamic typing 
      -->ES6 
      -->no Abstraction 

  ts -->object oriented
     -->strict typing
     -->interfaces,acessmodifiers  

     ts -->transpiled -->js  

Class-->blueprint -->common behaviour of an object
      composed of  -->properties  -->information of the obj
                   -->method -->action of the obj
            
object -->real time entity

class syntax
class classname{
    properties
    methodName(){}
}

const variablename=new Classname()

Constructor -->initialize the object porperties
        -->special method carries the similar method signature
        constructor(){}

        2 types
        default
        parametrized

AccessModifier -->assigning the scope of the property

 public   -->access it all over the project
 private  -->within the class
 protected --> classes which has relationship(inherited)
           -->within the class and associated subclasses

Encapsulation -->bidnding the class members together
getter -->permission to read the data
setter -->permission to modifiy the data

Inheritance -->acquiring the properties of the parent class
 --> extends 
childclass/subclass/derived extends parentclass/baseclass

single inheritance
 one clas extends otherclass

 Multilevel inheritance
 class2 extends class1
      class3 extends class2

Hirerachial inheritance
class2 exends class1
class3 extends class1

Muliple inherticance is not possible
 class3 extends class1, class2


Polymorphism : methods differnt forms

Method overloading  ->withtin the class -->same method argumets willbe differed

Method Overriding -->between two class which has a relatinship (inheritance)
  method impletation can be modified in the child class -should possess the same method name and argumets

POM ->page object model 
    -->designpattern 
    separate the page object/elements and testcase

Each page as class
  element as methods 
   loadUrl()
   enterUsernanme()
   enterPassword()
   clickLogin
Each extends the other class
