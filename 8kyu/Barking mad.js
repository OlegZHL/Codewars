// Научите Снупи и Скуби-Ду лаять с помощью объектных методов.
// В настоящее время лаять может только Снупи, а не Скуби-Ду.
//
// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Используйте прототипы методов, чтобы все собаки могли лаять.


function Dog (breed){
    this.breed = breed;
}

Dog.prototype.bark = function(){
    return "Woof";
};


  let snoopy =new Dog("Beagle");
  let scoobydoo = new Dog("Great Dane");

  console.log(scoobydoo.bark());
  console.log(snoopy.bark());



