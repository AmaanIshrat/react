import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
 


const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear any previous messages
    setError('');
    setSuccess('');

    // Add your validation logic here
    if (email === 'user@gmail.com' && password === 'user123') {
      setSuccess('Login successful!'); // Show success message
    } else {
      setError('Invalid email or password'); // Show error message
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <form className="p-6 flex flex-col justify-center bg-gray-100 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>} {/* Display success message */}

        <div className="flex flex-col">
          <label htmlFor="email" className="hidden">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full mt-2 py-3 px-3 rounded-lg border border-gray-400 text-black font-semibold focus:border-orange-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="password" className="hidden">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full mt-2 py-3 px-3 rounded-lg border border-gray-400 text-black font-semibold focus:border-orange-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-4 transition ease-in-out duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
