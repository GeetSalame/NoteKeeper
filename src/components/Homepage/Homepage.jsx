import React, { useEffect, useState } from 'react';
import './homepage.css';
import Notecard from '../Notecard/Notecard';
// import notes from '../../Data/notes';
import noteCRUDservices from '../../services/crudServices';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);   //for storing fetched data from DB
  const [itemsPerPage, setItemsPerPage] = useState(6);

  //fetching all notes data from DB
  const fetchAllNotes = async () => {
    const data = await noteCRUDservices.getAllNotes();
    console.log(data)
    setNotes(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    console.log(notes)
  }

  //reloading to show fetched notes
  useEffect(() => {
    console.log("useeffect")
    fetchAllNotes();
  }, [])


  var items = [];    //storing fetched notes in seq purpose
  notes.map(note => { if (note.isPinned === true) items.push(note); })      //pushing pinned notes first
  notes.map(note => { if (note.isPinned === false) items.push(note); })       //pushing unpinned notes later

  //indexes for displaying notes range for particular page
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  //displaying current page notes
  function Items({ currentItems }) {
    return (
      <>{console.log(currentItems)}{currentItems &&
        currentItems.map(note => <Notecard noteObj={note} />)
      }</>
    );
  }

  // const handleNPPchange = (e) => {
  //   setItemsPerPage(e.target.value);
  // }

  return (
    <div id='Homepage'>
      <h1>Notes</h1>

      {/* dynamic notes per page object */}
      {/* <a title='Notes Per Page'><input type="number" name="" id="notesperpage" placeholder='Notes' min={1} max={items.length} defaultValue={6} onChange={(e) => handleNPPchange(e)} /></a> */}

      {/* displaying cards */}
      <div id="homecards">
        <Items currentItems={currentItems} />
      </div>

      {/* pagenation numbers */}
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        className='CardNav'
        activeClassName='activePage'
      />

      <div id="createBtn" onClick={() => { navigate("/create") }}>
        <a title='Create Note'><img src="https://cdn-icons-png.flaticon.com/512/10257/10257707.png" alt="create" /></a>
      </div>
    </div>
  )
}

export default Homepage;