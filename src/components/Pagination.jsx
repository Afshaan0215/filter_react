import React from 'react'
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

 const PER_PAGE=10;
function Pagination() {
const [currentPage, setCurrentPage]=useState(0);
const [data,setData]= useState([]);
useEffect(()=>{
    fetchData();
},[]);
function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => res.json())
          .then(json =>{
             setData(json)
      }, [])
}
function handlePageClick({selected:selectedPage}){
    console.log("selectedPage",selectedPage);
    setCurrentPage(selectedPage)
}

const offset=currentPage*PER_PAGE
const currentPageData=data
.slice(offset,offset+PER_PAGE)
.map((res,index)=><img key={index} src={res.thumbnailUrl}/>);


const pageCount=Math.ceil(data.length/PER_PAGE)
   return(
    <div className='App pgnt'>
        <h1 className='text-center text-dark'>React Pagination</h1>
        {currentPageData}


        <ReactPaginate 
        previousLabel={"< previous"}
        nextLabel={"next > "}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        />
    </div>

   )
   }
export default Pagination