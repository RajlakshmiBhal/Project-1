import React, { useState } from 'react'
import Banner from '../Components/Banner'
import './style/CropAdvisor.css';
import CropAdvisorTabs from '../Components/CropAdvisorTabs';
import CropRecommendation from '../Components/CropRecommendation'
import Pestdetection from '../Components/Pestdetection'
import FertilizerAdvisor from '../Components/FertilizerAdvisor';
import SchemeFinder from '../Components/SchemeFinder';
import CropCalendar from '../Components/CropCalendar';



const CropAdvisor = () => {
    const [activeTab, setActiveTab] = useState('recommendation');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'recommendation':
                return <CropRecommendation/>;
            case 'pest':
                return <Pestdetection/>;
            case 'fertilizer':
                return <FertilizerAdvisor />;
            case 'schemes':
                return <SchemeFinder />;
            case 'calendar':
                return <CropCalendar />;
            default:
                return null;
        }
    };
    return (
        <div>
            <Banner
                title="Smart Farming Starts Here"
                description="Get personalized crop recommendations based on your soil, climate, and location. Make informed decisions and maximize your yield with confidence."
                imageUrl="images/image4.jpg"
            />


            <div className="container my-5 py-4">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">🌾 Crop Advisor</h2>
                    <p className=" fs-5 fst-italic" style={{ color: '#067D68' }}>
                        "Smart tools to empower farmers with precision, protection, and planning".
                    </p>
                </div>

                <div className="mb-4">
                    <CropAdvisorTabs onTabChange={setActiveTab} />
                </div>

                <div className="mt-3 p-4 border rounded bg-light shadow-sm">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    )
}

export default CropAdvisor;
