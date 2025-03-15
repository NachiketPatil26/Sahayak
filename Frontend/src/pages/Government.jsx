import { useState } from "react";
import React from "react";
import EventModal from "../components/EventModal"; // Import the EventModal component

const Government = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddEvent = () => {
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-5">Government Dashboard</h2>
            <button
                onClick={handleAddEvent}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Add Event
            </button>

            {/* Event Modal */}
            <EventModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Government;