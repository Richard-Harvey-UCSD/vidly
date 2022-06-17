import React, { Component } from "react";
import _ from "lodash"; // optimized from JS library underscore

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;

  // [1, ..., pagesCount].map()
  const pagesCount = Math.ceil(itemsCount / pageSize);
  console.log("pagesCount: ", pagesCount);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
