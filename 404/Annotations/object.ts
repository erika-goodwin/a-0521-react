const profile = {
  nickname: "John",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const {nickname, age}: {nickname: string, age: number} = profile
const {coords: {lat, lng}} = profile

console.log(`My name is ${nickname} and I'm ${age} years old`);
console.log(`${lat} : ${lng}`)

profile.setAge(60)
console.log(`My name is ${nickname} and I'm ${age} years old`);
