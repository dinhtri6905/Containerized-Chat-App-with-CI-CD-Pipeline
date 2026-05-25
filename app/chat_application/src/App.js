import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => (
  <ChatEngine
    height="100vh"
    projectID="1b7801d6-8a66-4be4-a442-89219d833dfc"
    userName="123"
    userSecret="123"
    renderChatFeed={(props) => <ChatFeed {...props} />}
  />
);

export default App;

