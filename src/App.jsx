import React, { useEffect,useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';

function App() {
  var [data,setData] = useState([''])
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json => setData(json))
  },[])

  var [comments,setComments] = useState([''])
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(json => setComments(json))
  },[])

  var [albums,setAlbums] = useState([''])
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(json => setAlbums(json))
  },[])

  var [photos,setPhotos] = useState([' '])
  
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(json => setPhotos(json))
    },[])

    var [todos,setTodos] = useState([' '])
  
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => setTodos(json))
    },[])

    var [users,setUsers] = useState([' '])
  
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setUsers(json))
    },[])

    var [photos, setPhotos] = useState([])
    const [rangeVal,setRangeVal] = useState([])
    const [itemsRendered, setItemsRendered] = useState([])
    const setItemsRange=(maxVal)=>{
      console.log(maxVal);
      setItemsRendered(photos.slice(1, maxVal))
    }

    useEffect(()=> {
      setItemsRange(rangeVal)
    },[rangeVal])

    useEffect(()=>{
      console.log(itemsRendered);
    },[itemsRendered])
  return (

    <div className="App">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-posts" type="button" role="tab" aria-controls="nav-posts" aria-selected="false">Posts</button>
          <button className="nav-link" id="nav-comments-tab" data-bs-toggle="tab" data-bs-target="#nav-comments" type="button" role="tab" aria-controls="nav-comments" aria-selected="false">Comments</button>
          <button className="nav-link" id="nav-albums-tab" data-bs-toggle="tab" data-bs-target="#nav-albums" type="button" role="tab" aria-controls="nav-albums" aria-selected="false">Albums</button>
          <button className="nav-link" id="nav-photos-tab" data-bs-toggle="tab" data-bs-target="#nav-photos" type="button" role="tab" aria-controls="nav-photos" aria-selected="false">Photos</button>
          <button className="nav-link" id="nav-todos-tab" data-bs-toggle="tab" data-bs-target="#nav-todos" type="button" role="tab" aria-controls="nav-todos" aria-selected="false">Todos</button>
          <button className="nav-link" id="nav-users-tab" data-bs-toggle="tab" data-bs-target="#nav-users" type="button" role="tab" aria-controls="nav-users" aria-selected="false">Users</button>

        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active text-center" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <h1>Hello</h1>
        </div>
        <div className="tab-pane fade posts" id="nav-posts" role="tabpanel" aria-labelledby="nav-posts-tab">
          <div className='text-center'>
            <h1>Posts</h1>
          </div> 
          <div className='d-flex flex-wrap justify-content-evenly'>
          {
            data.map((k,i)=>{
              return <div className='border border-1 w-25 p-2 m-2'>
                <p>ID : {k?.id}</p>
                <p>Title : {k?.title}</p>
                <p>Body : {k?.body}</p>
              </div>
            })
          }
          </div>
          
        </div>
        <div className="tab-pane fade comments" id="nav-comments" role="tabpanel" aria-labelledby="nav-comments-tab">
          <div className='text-center'>
            <h1>Comments</h1>
          </div>
          <div className=' d-flex flex-wrap justify-content-evenly'>
          {
            comments.map((b,i)=>{
              return <div className='border border-1 w-25 m-2 p-2'>
                <p>ID : {b?.id}</p>
                <p>Name : {b?.name}</p>
                <p>Email : {b?.email}</p>
                <p>Body : {b?.body}</p>
              </div>
            })
          }
          </div>
          
        </div>
        <div className="tab-pane fade albums" id="nav-albums" role="tabpanel" aria-labelledby="nav-albums-tab">
        <div className='text-center'>
          <h1>Albums</h1>
        </div>
        <div  className='d-flex flex-wrap justify-content-evenly'>
          {
            albums.map((c,i)=>{
              return <div className='border border-1 w-25 p-2 m-2'>
                <p>ID : {c?.id}</p>
                <p>Title : {c?.title}</p>
              </div>
            })
          }
        </div>
        </div>
        <div className="tab-pane fade photos" id="nav-photos" role="tabpanel" aria-labelledby="nav-photos-tab">
          <div className='text-center'>
            <h1>Photos</h1>
            <input type='range' value={rangeVal} min={0} max={500} onChange={(e)=>setRangeVal (e.currentTarget.value)}></input>
          </div>
          <div  className='d-flex flex-wrap justify-content-evenly'>
          {
            itemsRendered.map((a,i)=>{
              return <div className='border border-1 w-25 p-2 m-2 text-center'>
                <img src={a?.url} alt="images" width="200px"></img>
                <p>ID : {a?.id}</p>
                <p>Title : {a?.title}</p>
                </div>
            })
          }
          </div>
          <Pagination></Pagination>
        </div>
        
        <div className="tab-pane fade todos" id="nav-todos" role="tabpanel" aria-labelledby="nav-todos-tab">
        <div className='text-center'>
        <h1>Todos</h1>
        </div>
        <div className='d-flex flex-wrap justify-content-evenly'>
        {
            todos.map((z,i)=>{
              return <div className='border border-1 w-25 p-2 m-2'>
                <p>ID : {z?.id}</p>
                <p>Title : {z?.title}</p>
                <p>Completed : {z?.completed}</p>
                </div>
            })
          }
          </div>
        </div>
        <div className="tab-pane fade users" id="nav-users" role="tabpanel" aria-labelledby="nav-users-tab">
        <div className='text-center'>
        <h1>Users</h1>
        </div>
        <div className='d-flex flex-wrap justify-content-evenly'>
        {
            users.map((y,i)=>{
              return <div className='border border-1 w-25 p-2 m-2'>
                <p>ID : {y?.id}</p>
                <p>Name : {y?.name}</p>
                <p>Username : {y?.username}</p>
                <p>Email : {y?.email}</p>
                <p>Street : {y?.address?.street}</p>
                <p>Suit : {y?.address?.suit}</p>
                <p>City : {y?.address?.city}</p>
                <p>Zipcode : {y?.address?.zipcode}</p>
                <p>Lat : {y?.address?.geo?.lat}</p>
                <p>Lng : {y?.address?.geo?.lng}</p>
                <p>Phone : {y?.phone}</p>
                <p>Website : {y?.website}</p>
                <p>Company Name : {y?.company?.name}</p>
                <p>Catch Phrase : {y?.company?.catchPhrase}</p>
                <p>Company bs : {y?.company?.bs}</p>
                </div>
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
