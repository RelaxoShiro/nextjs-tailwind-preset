import { GetServerSideProps } from 'next';
import CategorySummaryCard from "components/CategorySummaryCard"
import { Category, CategorySummary } from '../types.js';
import { getCardinfo, getLatestInvestment } from '@/services/pocketbase';
import { useState, useEffect } from 'react';


interface MyComponentProps {
    data: Category[];
}

const Dashboard: React.FC<MyComponentProps> = () => {
    const [categorySummaries, setCategorySummaries] = useState<Category[]>([]);

    useEffect(() => {
        getCardinfo()
            .then((response) => {
                setCategorySummaries(response); // Set the resolved array of category summaries
            })
            .catch((error) => {
                console.error('Error retrieving category records:', error);
            });
    }, []);

    return (

        <div className="flex justify-center gap-4">
            <div className="grid grid-cols-2 gap-4 max-h-96">
                {categorySummaries.map((categorySummary) => (
                    <CategorySummaryCard key={1} category={categorySummary} />
                ))}
            </div>
            {/* Refactor Later into own component */}
            <div className='flex flex-col gap-3'>
                <div className='w-[550px] h-[370px] bg-cardBG rounded-xl hover:scale-105 transition-all '></div>
                <div className='flex gap-4 w-[550px]'>
                    <div className="stats shadow text-center">

                        <div className="stat w-[183px] bg-cardBG">

                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat w-[183px] bg-cardBG">

                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat w-[183px] bg-cardBG">

                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Rest of your code */}
        </div>
    );
};



export default Dashboard;