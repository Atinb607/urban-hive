import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const MyProfile = () => {
  const { token, navigate } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate]);

  if (loading) {
    return <div className="text-center text-gray-600 mt-10">Loading profile...</div>;
  }

  if (!user) {
    return <div className="text-center text-red-500 mt-10">Could not load profile</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5 mt-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">My Profile</h1>
      
      <div className="space-y-4 text-gray-700">
        <div>
          <span className="font-medium">Name:</span> {user.name}
        </div>
        <div>
          <span className="font-medium">Email:</span> {user.email}
        </div>
        <div>
          <span className="font-medium">Member Since:</span> {new Date(user.joined).toLocaleDateString()}
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button 
          onClick={() => navigate('/edit-profile')} 
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          Edit Profile
        </button>
        <button 
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }} 
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
