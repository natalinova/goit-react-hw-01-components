import clsx from "clsx"
import PropTypes from "prop-types";
import css from "./profile.module.css"

const Profile = (props) => {
    const { username, tag, location, avatar } = props;
    const { followers, views, likes } = props.stat;
    return (<div className={clsx("profile")}>
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className={clsx("avatar")}
            />
            <p className={clsx("name")}>{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span className="label">Followers</span>
                <span className={clsx("quantity")}>{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className={clsx("quantity")}>{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span class={clsx("quantity")}>{likes}</span>
            </li>
        </ul>
    </div>)
};

Profile.PropTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stat: PropTypes.shape,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number
    
}


export default Profile