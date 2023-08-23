import React, { useState } from 'react';
import './homepage.css';
import Notecard from '../Notecard/Notecard';
import notes from '../../Data/notes';
import ReactPaginate from 'react-paginate';

function Homepage({ itemsPerPage }) {

  const items = [];     //storing fetched notes in seq purpose
  notes.map(note => { if (note.isPinned === "true") items.push(note); })      //pushing pinned notes first
  notes.map(note => { if (note.isPinned === "false") items.push(note); })       //pushing unpinned notes later

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
      <>{currentItems &&
        currentItems.map(note => <Notecard title={note.title} tagline={note.tagline} isPinned={note.isPinned} />)
      }</>
    );
  }

  return (
    <div id='Homepage'>
      <h1>Notes</h1>
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
      />
    </div>
  )
}

export default Homepage;