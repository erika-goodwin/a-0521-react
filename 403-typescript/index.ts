// import axios from "axios";

// const url = "https://jsonplaceholder.typicode.com/posts/1";

// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// axios.get(url).then((response) => {
//   const todo = response.data as Todo;

//   // const ID = response.data.ID
//   // const title = response.data.Title
//   // const completed = response.data.finished
//   const id = todo.id;
//   const title = todo.title;
//   const completed = todo.completed;

//   logTodo(id, completed, title);

//   // console.log(response.data);
// });

// const logTodo = (id:number, title:string, completed:boolean) => {
//   console.log(`
//     Todo with ID: ${id}
//     Has a title of ${title}
//     Is it done? ${completed}
// `);
// };
