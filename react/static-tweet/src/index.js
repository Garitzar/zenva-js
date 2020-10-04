import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
  return (
    <div className="tweet">
        <Avatar/>
        <div className="content">
            <NameWithHandle /><Time />
            <Message />
            <div className="button">
                <CommentButton />
                <RetweetButton />
                <LikeButton />
                <ShareButton />
            </div>
        </div>
    </div>
  );
}

function Avatar() {
    return (
        <img
            src='https://gravatar.com/avatar/nothing'
            alt='avatar'
            className='avatar'
        />
    );
}

function Message() {
    return (
        <div className="message">This message is less than 140 characters!</div>
    );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => <span className="time">3h ago</span>;
const CommentButton = () => <i className="far fa-comment" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const ShareButton = () => <i className="fas fa-external-link-alt" />;

ReactDOM.render(<Tweet/>, document.querySelector("#root"));