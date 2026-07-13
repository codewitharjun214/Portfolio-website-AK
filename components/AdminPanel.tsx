import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

interface Message {
  id: number;
  from_name: string;
  from_email: string;
  message: string;
  timestamp: string;
}

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'arjun8' && password === 'India8') {
      setIsLoggedIn(true);
      setError('');
      fetchMessages();
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const fetchMessages = () => {
    try {
      const data = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      setMessages([...data].reverse()); // Show newest first
    } catch (err) {
      setError('Failed to load messages');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white p-4">
        <div className="absolute top-8 left-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-accent transition-colors font-mono"
          >
            <FiArrowLeft className="mr-2" /> Back to Portfolio
          </button>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-gray-600 mb-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-50 p-3 rounded border border-gray-200 text-gray-900 focus:outline-none focus:border-accent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-gray-600 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 p-3 rounded border border-gray-200 text-gray-900 focus:outline-none focus:border-accent"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-accent/10 text-accent border border-accent p-3 rounded hover:bg-accent/20 transition-colors font-mono"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="text-gray-600 hover:text-accent transition-colors font-mono"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6">
          {messages.length === 0 ? (
            <p className="text-gray-600 text-center py-12 bg-white rounded-xl border border-gray-200">
              No messages yet.
            </p>
          ) : (
            messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{msg.from_name}</h3>
                    <p className="text-accent font-mono text-sm">{msg.from_email}</p>
                  </div>
                  <span className="text-gray-500 text-xs font-mono">
                    {new Date(msg.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
