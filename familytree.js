var familyTree = [];
class grandParent{
  constructor(hairColor, eyeColor){
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;

  }
  vertical(){
    console.log("Grandma can jump 25 yards");
  }
}

class Parent extends grandParent {
  vertical(){
    console.log("Mother can jump 30 yards");
  }
}

class Child extends Parent {
  vertical (){
      console.log("Daughter can jump 35 yards");
  }
}
let Amy = new grandParent('blue', 'brown');
let John = new Parent('brown', 'blonde');
let Caleb = new Child('bronze', 'black');
familyTree.push(Amy);
familyTree.push(John);
familyTree.push(Caleb);

for (i=0; i < familyTree.length; i++){
  familyTree[i].vertical();
}
