import { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomMessage } from '../utils/helper';

const LiveChat = () => {
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
    <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
      {ChatMessages &&
        ChatMessages.length > 0 &&
        ChatMessages.map((message, index) => <ChatMessage key={index} name={message.name} message={message.message} />)}
    </div>
  );
};

export default LiveChat;
