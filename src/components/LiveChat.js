import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState([]);
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log('Polling for new messages');
      dispatch(addMessage({ name: generateRandomName(), message: generateRandomMessage(30) }));
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages &&
            ChatMessages.length > 0 &&
            ChatMessages.map((message, index) => (
              <ChatMessage key={index} name={message.name} message={message.message} />
            ))}
        </div>
      </div>
      <div className="w-full p-2 ml-2 border border-black">
        <input
          className="px-2 w-96"
          type="text"
          placeholder="Type your message here"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </div>
    </>
  );
};

export default LiveChat;
