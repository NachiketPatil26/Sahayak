import React, { useState } from "react";

const EventModal = ({ isOpen, onClose }) => {
    const [eventName, setEventName] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [area, setArea] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [targetAudience, setTargetAudience] = useState("");

    const handleMapClick = (e) => {
        // Simulate getting location from a map click
        const simulatedLocation = `Lat: ${e.lat || "12.9716"}, Lng: ${e.lng || "77.5946"}`;
        setLocation(simulatedLocation);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            eventName,
            dateTime,
            area,
            location,
            type,
            targetAudience,
        });
        onClose(); // Close the modal after submission
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Event</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Event Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name of the Event
                        </label>
                        <input
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            placeholder="Enter event name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Date and Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date and Time
                        </label>
                        <input
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Area */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Area
                        </label>
                        <input
                            type="text"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            placeholder="Enter area"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                        </label>
                        <div
                            className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer"
                            onClick={handleMapClick}
                        >
                            <p className="text-gray-600">Click on the map to select a location</p>
                        </div>
                        <input
                            type="text"
                            value={location}
                            readOnly
                            placeholder="Selected location will appear here"
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Type
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Type</option>
                            <option value="blood donation">Blood Donation</option>
                            <option value="vaccination">Vaccination</option>
                            <option value="awareness program">Awareness Program</option>
                            <option value="course">Course</option>
                            <option value="lecture">Lecture</option>
                        </select>
                    </div>

                    {/* Target Audience */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Target Audience
                        </label>
                        <select
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Audience</option>
                            <option value="all">All</option>
                            <option value="elderly">Elderly (Male and Female)</option>
                            <option value="males">Males</option>
                            <option value="females">Females</option>
                            <option value="children">Children (Below 12 years)</option>
                            <option value="adolescents">Adolescents</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventModal;