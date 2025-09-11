import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/style/CropAdvisor.css';

const tabs = [
    { id: 'recommendation', label: '🌱 Crop Recommendation' },
    { id: 'pest', label: '🐛 Pest Detection & Precautions' },
    { id: 'fertilizer', label: '🧪 Fertilizer & Nutrient Advisory' },
    { id: 'schemes', label: '🏛️ Govt Schemes & Subsidy Finder' },
    { id: 'calendar', label: '📅 Crop Calendar & Planning' },
];

const CropAdvisorTabs = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('recommendation');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        onTabChange(tabId);
    };

    return (
        <div className="container my-4">
            <div className="container my-4"></div>
            <div className="d-flex justify-content-center flex-wrap gap-3">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`custom-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                        type="button"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CropAdvisorTabs;