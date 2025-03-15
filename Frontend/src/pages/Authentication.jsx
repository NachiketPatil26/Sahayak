import React, { useState } from "react";

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState(""); // State for the first dropdown
    const [governmentType, setGovernmentType] = useState(""); // State for the second dropdown

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="max-w-md mx-auto p-5 items-center justify-center">
            <h2 className="text-2xl font-bold text-center mb-5">
                {isLogin ? "Login" : "Signup"}
            </h2>
            {isLogin ? (
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number:</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            ) : (
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Type:</label>
                        <select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        >
                            <option value="">Select Type</option>
                            <option value="NGO">NGO</option>
                            <option value="Government">Government</option>
                            <option value="Hospital">Hospital</option>
                        </select>
                    </div>
                    {userType === "Government" && (
                        <div>
                            <label className="block text-sm font-medium mb-1">Government Type:</label>
                            <select
                                value={governmentType}
                                onChange={(e) => setGovernmentType(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                <option value="">Select Government Type</option>
                                <option value="Municipality">Municipality</option>
                                <option value="Gram Panchayat">Gram Panchayat</option>
                                <option value="Ministry of Health and Welfare">Ministry of Health and Welfare</option>
                            </select>
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium mb-1">ID:</label>
                        <input
                            type="text"
                            placeholder="Enter your ID"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Address:</label>
                        <input
                            type="text"
                            placeholder="Enter your address"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number:</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Register
                    </button>
                </form>
            )}
            <button
                onClick={toggleAuthMode}
                className="w-full mt-4 text-blue-500 hover:underline"
            >
                {isLogin ? "New to Sahayak? Signup!" : "Already have an account? Login!"}
            </button>
        </div>
    );
};

export default Authentication;