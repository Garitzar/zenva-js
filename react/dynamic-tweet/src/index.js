import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moment from 'moment';

function Tweet({tweet}){
  return (
    <div className="tweet">
        <Avatar has={tweet.gravatar}/>
        <div className="content">
            <NameWithHandle author={tweet.author} /><Time time={tweet.timestamp} />
            <Message message={tweet.message} />
            <div className="button">
                <CommentButton />
                <RetweetButton count={tweet.retweets} />
                <LikeButton count={tweet.likes} />
                <ShareButton />
            </div>
        </div>
    </div>
  );
}

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
      handle: "@catperson",
      name: "MorganWebperson"
  },
  likes: 2,
  retweets: 5,
  timestamp: "2019-11-23 20:24:37"
}

function Avatar({hash}) {
  // eslint-disable-next-line
    const url = 'https://gravatar.com/avatar/${hash}';
    return (
        <img
            src={url}
            alt='avatar'
            className='avatar'
        />
    );
}

function Message({message}) {
    return (
        <div className="message">{message}</div>
    );
}

function NameWithHandle({author}) {
  const {name, handle} = author;
  return (
    <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">{handle}</span>
    </span>
  );
}

const Time = ({time}) =>{
  const timeString = Moment(time).fromNow();
  return (
   <span className="time">{timeString}</span>
  );
}

const CommentButton = () => <i className="far fa-comment" />;

function getRetweetCount(count){
  if(count > 0)
  {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  }
  else
    return null;
};

const RetweetButton = ({count}) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
        {getRetweetCount(count)}
    </span>
  );
};

const LikeButton = ({count}) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

const ShareButton = () => <i className="fas fa-external-link-alt" />;

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));