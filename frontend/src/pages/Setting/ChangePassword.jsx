import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import useUser from '../../hooks/useUser';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {user} = useUser()


    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('New passwords do not match!');
            return;
        }

        // Password update logic here
        console.log({
            currentPassword,
            newPassword,
            confirmPassword,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-6">Change Password</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto">

                {/* Email (Disabled) */}
                <div className="relative">
                    <label className="text-white block mb-1">Email</label>
                    <input
                        type="text"
                        value={user?.email || ''}
                        className="w-full p-2 rounded bg-neutral-700 text-white outline-none cursor-not-allowed"
                        readOnly
                        disabled
                    />
                </div>

                {/* Current Password */}
                <div className="relative">
                    <label className="text-white block mb-1">Current Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full p-2 pr-10 rounded bg-neutral-700 text-white outline-none"
                        placeholder="Enter current password"
                    />
                    <span
                        onClick={togglePasswordVisibility}
                        className="absolute top-9 right-3 text-neutral-400 cursor-pointer"
                    >
                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </span>
                </div>

                {/* New Password */}
                <div className="relative">
                    <label className="text-white block mb-1">New Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-2 pr-10 rounded bg-neutral-700 text-white outline-none"
                        placeholder="Enter new password"
                    />
                    <span
                        onClick={togglePasswordVisibility}
                        className="absolute top-9 right-3 text-neutral-400 cursor-pointer"
                    >
                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </span>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                    <label className="text-white block mb-1">Confirm New Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 pr-10 rounded bg-neutral-700 text-white outline-none"
                        placeholder="Confirm new password"
                    />
                    <span
                        onClick={togglePasswordVisibility}
                        className="absolute top-9 right-3 text-neutral-400 cursor-pointer"
                    >
                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </span>
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="yellow-color hover:bg-yellow-500 text-black font-semibold py-2 rounded transition-all duration-300 active:scale-95"
                >
                    Change Password
                </button>

            </form>
        </div>
    );
};

export default ChangePassword;
