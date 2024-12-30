import './App.css';
import ChatBotPresto from './component/shared/chatbot-presto';
import AppRouter from './route';

function App() {
  return (
    <div className="App">
    <AppRouter/>
    <ChatBotPresto/>
  </div>

  );
}

export default App;
