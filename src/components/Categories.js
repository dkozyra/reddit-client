import React from "react";

export const Categories = (props) => {
  return (
    <div className="categories-container">
      <div className="categories-content">
        <div className="categories-title">
          <h2>Categories</h2>
          <img src="/images/categories.svg" alt="" />
        </div>
        <div className="categories-category">
          <li>
            <div>
              <span>News</span>
              <button>News</button>
            </div>
          </li>
          <li>
            <div>
              <span>Video</span>
              <button>Video</button>
            </div>
          </li>
          <li>
            <div>
              <span>Job</span>
              <button>Job</button>
            </div>
          </li>
          <li>
            <div>
              <span>Funny</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <div>
              <span>Animals</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <div>
              <span>Space</span>
              <button>Follow</button>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
