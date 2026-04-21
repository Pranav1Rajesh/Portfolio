import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Pranav's AI assistant. Want to know about his projects or hackathon experiences?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: "That's a great question! Pranav is currently focusing on LLMs and Full Stack optimization. You can check his 'FinWise' project for a deep dive into his AI work." 
      }]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass"
            style={{
              width: '320px',
              height: '420px',
              borderRadius: '24px',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Bot size={24} />
                <div>
                  <h4 style={{ fontSize: '0.9rem' }}>Pranav AI</h4>
                  <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>Online & Ready</p>
                </div>
              </div>
              <X size={20} cursor="pointer" onClick={() => setIsOpen(false)} />
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ 
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: i === 0 ? '0 15px 15px 15px' : (msg.role === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0'),
                  background: msg.role === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                  fontSize: '0.85rem'
                }}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.5rem' }}>
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                type="text" 
                placeholder="Ask me anything..." 
                style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', padding: '10px', borderRadius: '10px', color: 'white', size: '0.9rem', outline: 'none' }}
              />
              <button 
                onClick={handleSend}
                style={{ background: 'var(--primary)', border: 'none', padding: '10px', borderRadius: '10px', color: 'white', cursor: 'pointer' }}
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          border: 'none',
          color: 'white',
          boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default AIChatbot;
