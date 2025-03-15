import React, { useState } from "react";

const CaseModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        diseaseName: "",
        count: "",
        area: "",
        from: "",
        to: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Report a Case</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Disease Name */}
                    <div>
                        <label
                            htmlFor="diseaseName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Disease Name
                        </label>
                        <input
                            type="text"
                            id="diseaseName"
                            name="diseaseName"
                            value={formData.diseaseName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Count */}
                    <div>
                        <label
                            htmlFor="count"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Count
                        </label>
                        <input
                            type="number"
                            id="count"
                            name="count"
                            value={formData.count}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Area */}
                    <div>
                        <label
                            htmlFor="area"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Area
                        </label>
                        <input
                            type="text"
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            list="areaSuggestions"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <datalist id="areaSuggestions">
                            <option value="New York" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                            <option value="Houston" />
                            <option value="Phoenix" />
                        </datalist>
                    </div>

                    {/* Duration (From and To) */}
                    <div>
                        <label
                            htmlFor="from"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            From
                        </label>
                        <input
                            type="datetime-local"
                            id="from"
                            name="from"
                            value={formData.from}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="to"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            To
                        </label>
                        <input
                            type="datetime-local"
                            id="to"
                            name="to"
                            value={formData.to}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CaseModal;