import { EventEmitter } from 'events';

class UserStore extends EventEmitter {
  constructor() {
    super();
    const userInfo = localStorage.getItem('User');
    this.userInfo = JSON.parse(userInfo);
  }
  getUsers() {
    return this.userInfo;
  }
}



const userStore = new UserStore();

export default userStore;
