import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiTrash2, 
  FiRefreshCw, 
  FiDownload, 
  FiPlusCircle, 
  FiSearch,
  FiLock,
  FiUser,
  FiInbox,
  FiLogOut,
  FiCheckCircle
} from 'react-icons/fi';

interface Message {
  id: number;
  from_name: string;
  from_email: string;
  message: string;
  timestamp: string;
}

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('admin_authenticated') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const fetchMessages = () => {
    try {
      const data = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      setMessages([...data].reverse()); // Show newest first
    } catch (err) {
      setError('Failed to load messages from local storage');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchMessages();
    }
  }, [isLoggedIn]);

  // Listen to changes in localStorage across tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'contact_messages' && isLoggedIn) {
        fetchMessages();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isLoggedIn]);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'arjun8' && password.trim() === 'India8') {
      setIsLoggedIn(true);
      localStorage.setItem('admin_authenticated', 'true');
      setError('');
      fetchMessages();
      showToast('Successfully logged in!');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('admin_authenticated');
    navigate('/');
  };

  const handleDeleteMessage = (id: number) => {
    try {
      const current = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      const updated = current.filter((msg: Message) => msg.id !== id);
      localStorage.setItem('contact_messages', JSON.stringify(updated));
      fetchMessages();
      showToast('Message deleted');
    } catch (err) {
      setError('Failed to delete message');
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all stored contact messages?')) {
      localStorage.removeItem('contact_messages');
      setMessages([]);
      showToast('All messages cleared');
    }
  };

  const handleAddSampleMessage = () => {
    const sampleMsg: Message = {
      id: Date.now(),
      from_name: 'Sarah Connor',
      from_email: 'sarah@example.com',
      message: 'Subject: Data Analytics Internship Query\nPhone: +1 555-0199\n\nHi Arjun, loved your Loan Approval Prediction project! Would love to connect regarding an analytics role.',
      timestamp: new Date().toISOString()
    };
    try {
      const current = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      current.push(sampleMsg);
      localStorage.setItem('contact_messages', JSON.stringify(current));
      fetchMessages();
      showToast('Sample message added!');
    } catch (err) {
      setError('Failed to add sample message');
    }
  };

  const exportAsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `portfolio_contact_messages_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported messages to JSON');
  };

  const filteredMessages = messages.filter(msg => 
    msg.from_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.from_email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-off-white dark:bg-navy p-4 transition-colors duration-300 relative">
        <div className="absolute top-8 left-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 dark:text-slate hover:text-accent transition-colors font-mono text-sm"
          >
            <FiArrowLeft className="mr-2" /> Back to Portfolio
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-light-navy p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200 dark:border-lightest-navy"
        >
          <div className="flex justify-center mb-4 text-accent">
            <FiLock size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-lightest-slate mb-2 text-center">Admin Portal</h2>
          <p className="text-xs text-gray-500 dark:text-slate text-center mb-6 font-mono">
            Access stored contact submissions
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-gray-600 dark:text-slate mb-1 flex items-center gap-1">
                <FiUser size={14} /> Username
              </label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="w-full bg-gray-50 dark:bg-navy p-3 rounded border border-gray-200 dark:border-lightest-navy text-gray-900 dark:text-lightest-slate focus:outline-none focus:border-accent font-sans"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-600 dark:text-slate mb-1 flex items-center gap-1">
                <FiLock size={14} /> Password
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-gray-50 dark:bg-navy p-3 rounded border border-gray-200 dark:border-lightest-navy text-gray-900 dark:text-lightest-slate focus:outline-none focus:border-accent font-sans"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-mono bg-red-50 dark:bg-red-950/40 p-2.5 rounded border border-red-200 dark:border-red-900">
                {error}
              </p>
            )}

            <button 
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors font-mono font-bold shadow-md shadow-accent/20"
            >
              Sign In
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white dark:bg-navy text-gray-900 dark:text-lightest-slate p-4 sm:p-8 md:p-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Toast Alert */}
        {notification && (
          <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 font-mono text-xs">
            <FiCheckCircle size={16} />
            {notification}
          </div>
        )}

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-lightest-navy">
          <div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-500 hover:text-accent dark:text-slate dark:hover:text-accent transition-colors"
                title="Back to portfolio"
              >
                <FiArrowLeft size={22} />
              </button>
              <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <FiInbox className="text-accent" /> Contact Messages Dashboard
              </h1>
            </div>
            <p className="text-xs font-mono text-gray-500 dark:text-slate mt-1">
              Total Messages Received: <strong className="text-accent">{messages.length}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button 
              onClick={fetchMessages}
              className="p-2.5 bg-gray-100 dark:bg-light-navy hover:text-accent rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border border-gray-200 dark:border-lightest-navy"
              title="Refresh Messages"
            >
              <FiRefreshCw size={14} /> Refresh
            </button>
            <button 
              onClick={handleLogout}
              className="p-2.5 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border border-red-200 dark:border-red-900"
            >
              <FiLogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Control Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6">
          {/* Search Box */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by name, email, or message keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-light-navy border border-gray-200 dark:border-lightest-navy rounded-lg text-sm text-gray-900 dark:text-lightest-slate focus:outline-none focus:border-accent"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={handleAddSampleMessage}
              className="px-3 py-2 bg-accent/10 text-accent border border-accent/30 rounded-lg text-xs font-mono flex items-center gap-1.5 hover:bg-accent/20 transition-colors"
            >
              <FiPlusCircle size={14} /> Add Test Submission
            </button>

            {messages.length > 0 && (
              <>
                <button 
                  onClick={exportAsJSON}
                  className="px-3 py-2 bg-gray-100 dark:bg-light-navy text-gray-700 dark:text-light-slate border border-gray-200 dark:border-lightest-navy rounded-lg text-xs font-mono flex items-center gap-1.5 hover:border-accent transition-colors"
                >
                  <FiDownload size={14} /> Export JSON
                </button>
                <button 
                  onClick={handleClearAll}
                  className="px-3 py-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 rounded-lg text-xs font-mono flex items-center gap-1.5 hover:bg-red-100 transition-colors"
                >
                  <FiTrash2 size={14} /> Clear All
                </button>
              </>
            )}
          </div>
        </div>

        {/* Message Feed */}
        <div className="grid gap-4">
          {filteredMessages.length === 0 ? (
            <div className="bg-white dark:bg-light-navy p-12 rounded-xl border border-gray-200 dark:border-lightest-navy text-center">
              <FiInbox size={48} className="mx-auto text-gray-300 dark:text-slate mb-3" />
              <p className="text-gray-600 dark:text-slate font-mono text-sm">
                {searchQuery ? 'No messages match your search criteria.' : 'No contact form messages saved yet.'}
              </p>
              {!searchQuery && (
                <p className="text-xs text-gray-400 dark:text-slate/60 mt-2">
                  When someone fills out the contact form on your portfolio, their submission details will be saved and displayed here.
                </p>
              )}
            </div>
          ) : (
            filteredMessages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-light-navy p-6 rounded-xl border border-gray-200 dark:border-lightest-navy shadow-sm relative group hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-lightest-navy">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-lightest-slate">{msg.from_name}</h3>
                    <a 
                      href={`mailto:${msg.from_email}`} 
                      className="text-accent font-mono text-xs hover:underline inline-block mt-0.5"
                    >
                      {msg.from_email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 dark:text-slate text-xs font-mono">
                      {new Date(msg.timestamp).toLocaleString()}
                    </span>
                    <button 
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 transition-colors rounded hover:bg-red-50 dark:hover:bg-red-950/40"
                      title="Delete this message"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-slate text-sm whitespace-pre-wrap leading-relaxed font-sans">
                  {msg.message}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
