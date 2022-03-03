import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req, res) => {
    // console.log(users)
    res.send(users)
    
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName}, ${user.lastName} added to the database`)
}

export const getSingleUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id )
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.send(`User with id ${id} deleted from the database.`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body; 

    const userToUpdate = users.find(user => user.id === id);

    if(firstName) userToUpdate.firstName = firstName
    if(lastName) userToUpdate.lastName = lastName
    
    if(age) {
        userToUpdate.age = age
    }
    

    res.send(`the user with id: ${id} has been updated from the database`)
}