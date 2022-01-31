import React from "react";
import { Link } from "react-router-dom";

export const Main = (props) => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="main-media">
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>
                <Link to={"/subreddit" + props.article.url}>
                  {props.article.title}
                </Link>
              </span>
              <span>{props.article.display_name_prefixed}</span>
              <span>Subscribers: {props.article.subscribers}</span>
            </div>
          </a>
        </div>
        <div className="main-description">
          {props.article.public_description}
        </div>
        <div className="main-social-buttons">
          <button>
            <img src="/images/join.svg" alt="" />
            <span>Join</span>
          </button>
          <button>
            <img src="/images/report.svg" alt="" />
            <span>Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};
