function gooseFilter (birds){
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    for (let i = 0; i < birds.length; i++){
        for (let j = 0; j < geese.length; j++){
            if(birds[i] === geese[j]) {
                delete birds[i];
            }
        }
    }
  return birds;
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));