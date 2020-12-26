import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({isClearfix}) => {
    return (
        <div className={`post ${isClearfix ? 'clearfix' : ''}`}>
            <div className="user-block">
                <img
                    className="img-circle img-bordered-sm"
                    src="/img/default-profile.png"
                    alt="User"
                />
                <span className="username">
                    <Link to="/">Jonathan Burke Jr.</Link>
                    <Link to="/" className="float-right btn-tool">
                        <i className="fas fa-times" />
                    </Link>
                </span>
                <span className="description">
                    Shared publicly - 7:30 PM today
                </span>
            </div>
            {/* /.user-block */}
            <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for its
                demise, but others ignore the hate as they create awesome tools
                to help create filler text for everyone from bacon lovers to
                Charlie Sheen fans.
            </p>
            <p>
                <Link to="/" className="link-black text-sm mr-2">
                    <i className="fas fa-share mr-1" />
                    Share
                </Link>
                <Link to="/" className="link-black text-sm">
                    <i className="far fa-thumbs-up mr-1" />
                    Like
                </Link>
                <span className="float-right">
                    <Link to="/" className="link-black text-sm">
                        <i className="far fa-comments mr-1" />
                        Comments (5)
                    </Link>
                </span>
            </p>
            {/* <input className="form-control form-control-sm" type="text" placeholder="Type a comment" /> */}
            <form className="form-horizontal">
                <div className="input-group input-group-sm mb-0">
                    <input
                        className="form-control form-control-sm"
                        placeholder="Response"
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-danger">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Post;
