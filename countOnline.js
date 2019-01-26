let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let onlineUsers = 0;
  for (let user in obj) {
    if (obj[user]['online'] === true) {
      onlineUsers += 1;
    };
  }
  return onlineUsers;
}

console.log(countOnline(users));