import React, { useState } from "react";
import CaseModal from "../components/CaseModal"; // Import the CaseModal component

const Hospital = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddCase = () => {
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-5">Hospital Dashboard</h2>
            <button
                onClick={handleAddCase}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Add Case
            </button>

            {/* Case Modal */}
            <CaseModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Hospital;