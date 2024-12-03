const alertUser = () => {
  alert('Hello, User!');
};

const axiosTest = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1',
  );
  console.log(response.data);
};
