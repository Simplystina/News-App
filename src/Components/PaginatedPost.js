import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post';

function Pagination({ }) {

    const { articles, totalItems,  currentPage, status, error, country } = useSelector((state) => state.news);

    const itemsPerPage = 4
  // Here we use item offsets; we could also use page offsets
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentArticles = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Post text="Our Latest Post" currentArticles={currentArticles}></Post>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
         containerClassName="pagination justify-content-center"
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        pageClassName="pageItem"
        pageLinkClassName="pageLink"
        previousClassName="previous"
        previousLinkClassName="previous"
        nextClassName="next"
        nextLinkClassName="next"
        activeClassName="active"
      />
    </>
  );
}

export default Pagination