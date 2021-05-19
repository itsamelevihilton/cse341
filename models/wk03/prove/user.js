const fs = require('fs');

module.exports = class User {
    constructor(id, first, last, email, cart = []) {
        this.id = id;
        this.first = first;
        this.last = last;
        this.email = email;
        this.cart = cart;
    }

    save() {
        try {
            const data = fs.readFileSync('./data/wk03/prove/users.json');
            let users = JSON.parse(data);
            users.push(this);
            let result = JSON.stringify(users);
            fs.writeFileSync('./data/wk03/prove/users.json', result);
            return true;
        }
        catch (err) {
            console.error("Error reading the JSON file: ", err);
            return false;
        }
    }

    static fetchAll() {
        try {
            const data = fs.readFileSync('./data/wk03/prove/users.json');
            let users = JSON.parse(data);
            return users;
        }
        catch (err) {
            console.error("Error reading the JSON file: ", err);
            return null;
        }
    }

    static fetchById(id) {
        try {
            const data = fs.readFileSync('./data/wk03/prove/users.json');
            let users = JSON.parse(data);
            let possibleUsers = users.filter(user => user.id == id);
            if (possibleUsers.length > 0) return possibleUsers[0];
            else console.error("Something went wrong.  That user seems to not exist.");
        }
        catch (err) {
            console.error("Error reading the JSON file: ", err);
            return null;
        }
    }
}

