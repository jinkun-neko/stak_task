// import { useBooksQuery, useCreateBookMutation,useDeleteBookMutation,useUpdateBookMutation,} from "./graphql/generated";
// import { useState } from "react";

// function App() {

//   const { data: { books = [] } = {} } = useBooksQuery();
//   const [createBook] = useCreateBookMutation({ refetchQueries: ["books"] });
//   const [title, setTitle] = useState("");
//   const [deleteBook] = useDeleteBookMutation({ refetchQueries: ["books"] });
//   const [updateBook] = useUpdateBookMutation();
  

//   return (
//     <div style={{ width: "400px", margin: " 40px auto" }}>
//       <h1>書籍一覧</h1>
//       <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}></div>
//     <div>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//     <button
//       onClick={() => {
//           createBook({ variables: { params: { title: title } } });
//           setTitle("");
//         }}
//     >
//       保存
//     </button>
//     </div>

//   {books.map((book) => (
//     <div key={book.id}
//     style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
//     >
//       <input
//             value={book.title || ""}
//             onChange={(e) =>
//               updateBook({
//                 variables: { id: book.id, params: { title: e.target.value } },
//               })
//             }
//           />
//           <div>{book.title}</div>
//           <button onClick={() => deleteBook({ variables: { id: book.id } })}>
//             削除
//           </button>
//         </div>
//       ))}
//       </div>
//     );
//   }

// export default App;

import React from 'react';
import { ApolloProvider, gql, useQuery } from '@apollo/client';

// applo client
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3010/graphql',
  }),
});

const USER_QUERY = gql`
  query {
    users {
      id
      name
      nickname
    }
  }
`

interface User {
  id: number;
  name: string;
  nickname: string;
}

const Users = () => {
  const { loading, error, data } = useQuery(USER_QUERY);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>TodoList</h2>
      {data.users.map((user: User) => (
        <p key={user.id}>{user.name}さん : {user.nickname}</p>
      ))}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>
  );
}

export default App;