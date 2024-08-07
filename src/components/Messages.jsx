import React from 'react';

const Messages = () => {
  return (
    <>
    {/* component */}
<div className=" mx-5 p-4 h-full">
  {/* Chat Container */}
  <div className="bg-white rounded-lg shadow-md p-4 h-full m-5">
    {/* Chat Header */}
    <div className="flex items-center mb-4">
      <div className="ml-3">
        <p className="text-xl font-medium text-violet-400">User name</p>
        <p className="text-gray-500"><span className='text-green-500'>Online</span></p>
      </div>
    </div>
    <div className='h-full'>
    {/* Chat Messages */}
    <div className="space-y-4">
      {/* Received Message */}
      <div className="flex items-start">
      <img src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg" alt="Other User Avatar" className="w-8 h-8 rounded-full ml-3" />
        <div className="ml-3 bg-gray-100 p-3 rounded-lg">
          <p className="text-sm text-gray-800">Hello! How can I help you today?</p>
        </div>
      </div>
      {/* Sent Message */}
      <div className="flex items-end justify-end">
        <div className="bg-blue-500 p-3 rounded-lg">
          <p className="text-sm text-white">Sure, I have a question.</p>
        </div>
        <img src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg" alt="Other User Avatar" className="w-8 h-8 rounded-full ml-3" />
      </div>
    </div>
    {/* Chat Input */}
    <div className="mt-4 flex items-center">
      <input type="text" placeholder="Type your message..." className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600">Send</button>
    </div>
  </div>
  </div>
</div>

    </>
  )
};

export default Messages;
