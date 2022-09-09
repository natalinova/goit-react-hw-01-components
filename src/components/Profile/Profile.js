
import PropTypes from "prop-types";
import css from "./profile.module.css"

export default function Profile ({ username, tag, location, avatar, stats:{followers, views, likes} }) {
     return (<div className= {css.profile}>
        <div className= {css.description}>
            <img className={css.avatar}
                src={avatar}
                alt={username}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>   
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stat}>
            <li  className={css.item}>
                <span className={css.label}>Followers</span>
                <span className={css.views}>{followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.label} >Views</span>
                <span className={css.views}>{views}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Likes</span>
                <span className={css.views}>{likes}</span>
            </li>
        </ul>
    </div>)
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stat: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number})
    
    
}

