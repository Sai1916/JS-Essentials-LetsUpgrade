class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.coins = 0;
    this.courses = [];
  }

  static greet() {
    console.log("Hello Everyone");
  }

  login() {
    console.log(`${this.name} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }

  getDetails() {
    console.log(`Name is ${this.name}, email is ${this.email}`);
    return this;
  }
}

class Moderator extends User {
  addCoins() {
    this.coins++;
    console.log(`${this.name} has ${this.coins} coins`);
    return this;
  }
  removeCoins() {
    this.coins--;
    console.log(`${this.name} has ${this.coins} coins`);
    return this;
  }
}

class Admin extends Moderator {
  addCourse(user, course) {
    user.courses.push(course);
    console.log(user);
  }
  deleteCourse(user, course) {
    if (course == this.course) {
      user.courses.pop(course);
      console.log(user);
    } else {
      console.log("This user has not taken the entered course");
    }
  }
}

let user1 = new User("Sai", 19, "sai123@gmail.com");
let user2 = new User("Ram", 26, "ram@gmail.com");
let user3 = new User("King", 17, "king@gmail.com");
let moderator = new Moderator("Hanuman", 21, "hanuman@gmail.com", 2);
let admin = new Admin("Shiva", 20, "shiva@gmail.com");
let users = [user1, user2, user3, moderator, admin];

users.forEach((element) => {
  console.log(element);
});

User.greet();

moderator.login();
moderator.addCoins();
moderator.removeCoins();
moderator.logout();
moderator.getDetails();

admin.addCourse(user1, "JavaScript");
admin.addCourse(user2, "C-Sharp");
admin.deleteCourse(user2, "Java");
