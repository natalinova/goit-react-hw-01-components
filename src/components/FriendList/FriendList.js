import PropTypes from "prop-types"
import clsx from "clsx"
import css from "./FriendList.module.css";
export default function FriendList({ friends }) {
    return (
        <ul className={css.friendlist}>
                {friends.map(friend => (<li className={css.item} key = {friend.id}>
                       <p className={friend.isOnline ? css.isOnline : css.isOfline}> </p>
  <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p className="name">{ friend.name}</p>
    </li>    )
                    
                )
                   
            }
                   
            </ul>
            
     )
};


FriendList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name:PropTypes.string
    
}