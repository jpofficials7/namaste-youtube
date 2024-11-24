import { useEffect } from 'react';
import ChatMessage from './ChatMessage';

const data = [];

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log('Polling for new messages');
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="akshay Saini" message="This is Namaste React Live!🙏" />
      <ChatMessage name="akshay Saini" message="This is Namaste React Live!🙏" />
      <ChatMessage name="akshay Saini" message="This is Namaste React Live!🙏" />
      <ChatMessage name="akshay Saini" message="This is Namaste React Live!🙏" />
      <ChatMessage name="akshay Saini" message="This is Namaste React Live!🙏" />
      <ChatMessage name="akshay Saini" message="This is Namaste React Live!🙏" />
      <ChatMessage name="akshay Saini" message="This is Namaste React Live!🙏" />
    </div>
  );
};

export default LiveChat;
