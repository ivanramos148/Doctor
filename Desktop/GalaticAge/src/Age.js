export class Age {
  constructor(age) {
    this.age = age;
  }

  yearToSeconds(){
    const toSeconds = 31557459.167;
    let userAge = this.age;
    let galaxyAge = userAge * toSeconds;
    return galaxyAge;
  }

  venusAge(){
    
  }


}
