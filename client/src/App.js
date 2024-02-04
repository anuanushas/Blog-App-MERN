import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signUp';
import Newblog from './pages/newblog';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './pages/blogs';
import Editblog from './pages/editblog';
import Header from './components/Header';
import Myblog from './pages/myblog';

function App() {
    return (
        <>

            <BrowserRouter>
                <ToastContainer position="top-right" />
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/myblog' element={<Myblog />} />

                    <Route path='/new' element={<Newblog />} />
                    <Route path='/read/:id' element={<Blogs />} />
                    <Route path='/edit/:id' element={<Editblog />} />




                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;

// const arr = [1, 2, 5, 6, 7]
// let k = 5;

// const ans = arr.includes(k);
// // for (let i = 0; i < arr.length; i++) {
// //   if (k === arr[i]) {
// //     ans = true;
// //   }
// // }

// if (ans) {
//   console.log("The number is founded in a  array ,the number is ", +k);

// }
// else {
//   console.log("The number is not founded in a  array ,the number is", +k);
// }

// const arr1 = [1, 2, 3, 4];
// var arr2 = [5, 6, 7];

// const arr = [...arr1, ...arr2];
// // console.log(arr);

// const [one, two, three, four] = arr1;
// // console.log(two);

// var [five, six, seven] = arr2
// console.log(seven)
// arr2[2] = 0;

// seven = 9
// console.log(seven)
// console.log(arr2);

// var arr = { name: "anu", fname: "anusha", aname: "anki", bname: "ashi" }

// console.log(arr);

// arr = { ...arr, fname: "aakash" }

// console.log(arr)

// const array = ["aakash", "anusa", "pooja"];
// // for (const i = 1; i < array.length; i++) {
// //   console.log(array[i]);
// // }
// const aa = [1, 2, 0, 7];
// const newArray = array.map((value, index, array) => {
//   return "name" + value

// })
// console.log(newArray)

// const multaa = aa.map((value, index) => 2 * value
// )
// console.log(multaa);

// import React, { useEffect, useState } from "react";
// const App = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   function functionname() {
//     console.log("hi am anu");
//   }
//   const dependency = [data.lastName];


//   useEffect(functionname, dependency)
//   return (
//     <>
//       <h1>firstName:</h1>
//       <input
//         type="text"
//         onChange={(e) => setData({ ...data, firstName: e.target.value })}
//       />
//       <h1>lastName:</h1>
//       <input
//         type="text"
//         onChange={(e) => setData({ ...data, lastName: e.target.value })}
//       />
//       <h1>email:</h1>
//       <input
//         type="text"
//         onChange={(e) => setData({ ...data, email: e.target.value })}
//       />
//       <h1>password:</h1>
//       <input
//         type="password"
//         onChange={(e) => setData({ ...data, password: e.target.value })}

//       />
//       <h1>{data.firstName}</h1>
//       <h1>{data.lastName}</h1>
//       <h1>{data.email}</h1>
//       <h1>{data.password}</h1>


//     </>
//   );
// };

// export default App;

