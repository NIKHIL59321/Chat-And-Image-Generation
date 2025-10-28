
import React, { useState } from 'react';
import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';
import './App.css';
import { tab } from '@testing-library/user-event/dist/tab';

function App() {
  const[activeTab, setActivetab]=useState('image-generator');
  const handleTabChange=(tab)=>{
    setActivetab(tab);
  }

  return (
    <div className="App">
      <button className={activeTab === 'image-generator' ? 'active' : ''}
       onClick={() => handleTabChange('image-generator')}>
        Image Generator
        </button>
      <button  className={activeTab === 'chat' ? 'active' : ''}
      onClick={() => handleTabChange('chat')}>
        Ask AI
        </button>
        <div>
          {activeTab === 'image-generator' && <ImageGenerator/>}
          {activeTab === 'chat' && <ChatComponent/>}
        </div>
    </div>
  );
}

export default App;
