import { GetServerSideProps } from 'next';
import CategorySummaryCard from "components/CategorySummaryCard"
import { Category, CategorySummary } from '../types.js'; 
import { useState, useEffect } from 'react';


interface MyComponentProps {
    data: Category[];
}

const Dashboard: React.FC<MyComponentProps> = () => {
    const [categorySummaries, setCategorySummaries] = useState<Category[]>([]);

   

    return (

        <div className="flex justify-center gap-2">
            <div className="grid grid-cols-2 gap-2 max-h-96">
                {categorySummaries.map((categorySummary) => (
                    <CategorySummaryCard key={1} category={categorySummary} />
                ))}
            </div>
            {/* Refactor Later into own component */}
            <div className='flex flex-col gap-3'>
                <div className='w-[550px] h-[395px] bg-cardBG rounded-xl hover:scale-105 transition-all '></div>
                <div className='flex gap-4'>
                    <div className='w-[265px] h-[140px] bg-cardBG rounded-xl hover:scale-105 transition-all '></div>
                    <div className='w-[265px] h-[140px] bg-cardBG rounded-xl hover:scale-105 transition-all '></div>
                </div>
            </div>
            {/* Rest of your code */}
        </div>
    );
};



export default Dashboard;