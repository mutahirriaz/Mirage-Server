import React,{useEffect,useState} from 'react'
import './App.css';


function App() {

  const[books, setBooks] = useState([{}]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("/api/books")
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
        setBooks(data);
      })
    },2000)
  },[])



  const addNew = () =>{

    const title = prompt("Enter the book title");
    const Author = prompt("Enter the Author bok")

    if(!title||!Author){
      return false
    }

    console.log(title,Author)
    fetch("/api/add",{
      method:"POST",
      body:JSON.stringify({title,Author})
    }).then(res=>res.json())
    .then(data=>console.log(data))

  }


  if(!books.length){
    return <h1>Loading...</h1>
    
  }

  return (
    <div className="App">
     <h1>Avasilable Books</h1>
    <table  >
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((bookObj,ind)=>{
          return (<tr key={ind}>
              <td>
                {bookObj.title}
              </td>
              <td>
                {bookObj.Author}
              </td>
            </tr>)
        })}
      </tbody>
    </table>
    <button  onClick={addNew} >Add Book</button>
    </div>
  );
}

export default App;
