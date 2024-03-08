import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import "./components/App.css";
import friends from "./friends.json";
import FriendList from "./components/Friendlist/FriendList";
import transactions from "./transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
