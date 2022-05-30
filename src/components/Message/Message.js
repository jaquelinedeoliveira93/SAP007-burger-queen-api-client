import './Message.css';

function Message({message}) {
  return (
    <div>
      <p className='errorMessage'>{message}</p>
    </div>
  );
};

export default Message;