import React from "react";
import { Link } from "react-router-dom";

export const Categories = (props) => {
  return (
    <div className="categories-container">
      <div className="categories-content">
        <div className="categories-title">
          <h2>Popular</h2>
          <img src="/images/categories.svg" alt="" />
        </div>
        <div className="categories-category">
          <li>
            <div>
              {/* <span>News</span> */}
              <button>
                <Link to={"/subreddit/r/News"}>News</Link>
              </button>
            </div>
          </li>
          <li>
            <div>
              {/* <span>Video</span> */}
              <button>
                <Link to={"/subreddit/r/pics"}>Pictures</Link>
              </button>
            </div>
          </li>
          <li>
            <div>
              {/* <span>Job</span> */}
              <button>
                <Link to={"/subreddit/r/candy"}>Candys</Link>
              </button>
            </div>
          </li>
          <li>
            <div>
              {/* <span>Funny</span> */}
              <button>
                <Link to={"/subreddit/r/Funny"}>Funny</Link>
              </button>
            </div>
          </li>
          <li>
            <div>
              {/* <span>Animals</span> */}
              <button>
                <Link to={"/subreddit/r/Sports"}>Sports</Link>
              </button>
            </div>
          </li>
          <li>
            <div>
              {/* <span>Space</span> */}
              <button>
                <Link to={"/subreddit/r/videos"}>Videos</Link>
              </button>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
