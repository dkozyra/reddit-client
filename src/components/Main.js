import React from "react";

export const Main = (props) => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="main-media">
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <img src="/images/ellipsis.svg" alt="" />
          </button>
        </div>
        <div className="main-description">desc</div>
        <div className="main-image">
          <a>
            <img src="/images/example.jpg" alt="" />
          </a>
        </div>
        <ul className="main-social">
          <li>
            <button>
              <img src="/images/like.svg" alt="" />
              <img src="/images/clapping.svg" alt="" />
              <span>75</span>
            </button>
          </li>
          <li>
            <a>5 comments</a>
          </li>
        </ul>
        <div className="main-social-buttons">
          <button>
            <img src="/images/like.svg" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/comment.svg" alt="" />
            <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};
