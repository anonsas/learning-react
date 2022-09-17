import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// GET ALL POSTS
const getAllPosts = () => {
  axios
    .get(`${baseUrl}`)
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// GET POST BY ID
const getPostById = (postId) => {
  axios
    .get(`${baseUrl}/${postId}`)
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // CREATE NEW POST
const createPost = () => {
  axios
    .post(`${baseUrl}`, {
      title: 'Lithuania',
      body: 'Hello Earth',
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // DELETE POST BY ID
const deletePostById = (postId) => {
  axios
    .delete(`${baseUrl}/${postId}`)
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // COMPLETE UPDATE - SPECIFY ALL VALUES.
const updatePostById = (postId) => {
  axios
    .put(`${baseUrl}/${postId}`, {
      title: 'Lithuania',
      body: 'Hello Earth',
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // PARTIAL UPDATE - SPECIFY VALUES WHICH TO UPDATE.
const modifyPostById = (postId) => {
  axios
    .patch(`${baseUrl}/${postId}`, {
      title: 'Lithuania',
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

const postsService = {
  getAllPosts,
  getPostById,
  createPost,
  deletePostById,
  updatePostById,
  modifyPostById,
};

export default postsService;
