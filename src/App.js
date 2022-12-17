import "./App.css";
import { useEffect, useState } from "react";

const generateUsers = () => {
  let users = [ "user1", "user2", " user3", " user4", " user5", " user6", " user7", " user8", " user9", " user10",
  ];

  // let item = users[Math.floor(Math.random()*users.length)];
  // console.log(item)
  return users;

};


function App() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    setNames(generateUsers());
  }, []);
  useEffect(()=>{ 
       document.title = names.length + "users left"
},[names]
  )

  console.log(names);


  const removeRendomList = () => {
    const randomlist = names[Math.floor(Math.random() * names.length)];
    setNames(names.filter((element) =>{
      return  element !=== randomlist
    }));
  };

 
  return (
    <>
    <ul>
    {names.map((elem, index) => {
        return <li key={index}>{elem}</li>;
      })}
    </ul>
    <button onClick={removeRendomList}> click here</button>
     
    </>
  );
}

export default App;
