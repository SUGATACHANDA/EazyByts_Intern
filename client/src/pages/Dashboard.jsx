/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useSearchParams } from 'react-router-dom';
import API from '../config/api';

const Dashboard = () => {
    const [email, setEmail] = useState('');
    const [messages, setMessages] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const navigate = useNavigate();
    const tabs = ['contact', 'skills', 'projects', 'achievements'];
    const currentTab = searchParams.get('tab') || 'contact';

    const handleTabChange = (tab) => {
        setSearchParams({ tab });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin-login', { replace: true });
    };

    const filterMessages = (messages) => {
        const now = dayjs();
        switch (filter) {
            case 'today':
                return messages.filter((msg) => dayjs(msg.createdAt).isSame(now, 'day'));
            case 'last7':
                return messages.filter((msg) =>
                    dayjs(msg.createdAt).isAfter(now.subtract(7, 'day'))
                );
            case 'last30':
                return messages.filter((msg) =>
                    dayjs(msg.createdAt).isAfter(now.subtract(30, 'day'))
                );
            default:
                return messages;
        }
    };

    const filteredMessages = filterMessages(messages);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin-login', { replace: true });
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const userId = decoded.id;

            // Fetch admin email
            axios
                .get(`${API}/auth/dashboard`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => setEmail(res.data.email || ''));

            // Fetch contact messages
            axios
                .get(`${API}/contact/all`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setMessages(res.data || []);
                    setLoading(false);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    navigate('/admin-login', { replace: true });
                });
        } catch {
            localStorage.removeItem('token');
            navigate('/admin-login', { replace: true });
        }
    }, [navigate]);

    if (loading)
        return <p className="p-10 bg-gray-100 text-black text-center">Loading dashboard...</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl text-black font-bold">Dashboard</h1>
                <div className="flex gap-4 items-center">
                    <span className="text-sm text-gray-700 bg-white px-3 py-1 rounded-full shadow">{email}</span>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Nav Tabs */}
            <nav className="flex gap-4 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`px-4 py-2 rounded capitalize ${currentTab === tab
                                ? 'bg-purple-600 text-white'
                                : 'bg-white text-gray-700 border'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            {/* Tab Content */}
            <div className="bg-white p-6 rounded shadow">
                {currentTab === 'contact' && (
                    <>
                        <div className="mb-4 flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Contact Messages</h2>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="border px-3 py-1 rounded bg-white text-gray-700"
                            >
                                <option value="all">All</option>
                                <option value="today">Today</option>
                                <option value="last7">Last 7 Days</option>
                                <option value="last30">Last 30 Days</option>
                            </select>
                        </div>

                        {filteredMessages.length === 0 ? (
                            <p className="text-gray-500">No messages found in selected range.</p>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-4">
                                {filteredMessages.map((msg) => (
                                    <div
                                        key={msg._id}
                                        className="border rounded-lg p-4 bg-gray-50 shadow-sm"
                                    >
                                        <h3 className="font-bold text-blue-700 mb-1">{msg.title}</h3>
                                        <p className="text-gray-800 mb-2">{msg.message}</p>
                                        <div className="text-sm text-gray-600">
                                            From: {msg.name} ({msg.email})
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            {new Date(msg.createdAt).toLocaleString()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {currentTab === 'skills' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Skills</h2>
                        <p className="text-gray-600">[Skills content goes here]</p>
                    </div>
                )}

                {currentTab === 'projects' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Projects</h2>
                        <p className="text-gray-600">[Projects content goes here]</p>
                    </div>
                )}

                {currentTab === 'achievements' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                        <p className="text-gray-600">[Achievements content goes here]</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
