import axios from './axiosNodeClient';
async function allUser() {
    return await axios.get('http://localhost:8000/user/all', { timeout: 8000 });
}
async function deleteUser(userId) {
    return await axios.delete('http://localhost:8000/user/delete/' + userId, { timeout: 8000 });
}
async function editUser(body) {
    return await axios.put('http://localhost:8000/user/update', body, { timeout: 8000 });
}
async function createUser(body) {
    return await axios.post('http://localhost:8000/user/create', body, { timeout: 8000 });
}
export { allUser, deleteUser, editUser, createUser }
