const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'User1',
            room: 'Room1'
        }, {
            id: '2',
            name: 'User2',
            room: 'Room2'
        }, {
            id: '3',
            name: 'User3',
            room: 'Room1'
        }, {
            id: '4',
            name: 'User4',
            room: 'Room2'
        }];
    });

    it('should add new user', () => {
        var user = {
            id: '5',
            name: 'User5',
            room: 'Room3'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users[4]).toEqual(user);
    });

    it('should return Room1 names', () => {
        var userList = users.getUserList(users.users[0].room);

        expect(userList).toEqual(['User1', 'User3']);
    });

    it('should return Room2 names', () => {
        var userList = users.getUserList(users.users[1].room);

        expect(userList).toEqual(['User2', 'User4']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(3);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(4);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });
});