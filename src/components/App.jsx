
import user from './user.json';
import data from './data.json';
import friend from './friends.json';
import transactions from './transactions.json';
import Profile from "./Profile/Profile"
import Statistics from './Statistics/Statistics';
import StatisticsList from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title='Read this'
        stat={data}>
        <StatisticsList stat={data}/>
      </Statistics>
      
      <Statistics
        stat={data}>
        <StatisticsList stat={data}/>
      </Statistics>

      <FriendList 
        friends={friend} />
      <TransactionHistory
      transactions={transactions}/>
    </>
)
 }
