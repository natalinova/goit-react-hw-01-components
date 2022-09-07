// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import user from './user.json';
import Profile from "./task_1/Profile"
 function App() {
  //  const { username, tag, location, avatar, stat } = user;
    // const { followers, views, likes } = user.stat;
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stat.followers}
        views={user.stat.views}
        likes={user.stat.likes}
        
      />

    </>
)
 }
export default App