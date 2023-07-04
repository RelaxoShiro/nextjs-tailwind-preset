import { FC } from 'react';
import { Category, CategorySummary } from '@/types';
import { CgToolbox } from "react-icons/cg";
import router from 'next/router';

type CategorySummaryCardProps = {
    category: Category;
};

const CategorySummaryCard: FC<CategorySummaryCardProps> = ({
    category: { name, totalAmount, totalProfit },
}) => {

    let isProfit = totalProfit > 0 ? true : false

    const handleCardClick = (collectionName: any) => {
        console.log(collectionName)
        router.push(`/user/${collectionName}`);
    };
    return (
        <div
            className="w-64 h-60 bg-cardBG rounded-xl hover:scale-105 transition-all"
            onClick={() => handleCardClick(name.toLowerCase())}
        >
            <div className='flex justify-between mx-2 mt-3'>
                <div className='flex gap-2'>
                    <CgToolbox className='mt-2' />
                    <p className=' text-3xl font-semibold '>{name}</p>
                </div>
                <p className='text-purple-500 text-xs mt-2'>{totalAmount} Items</p>
            </div>
            <div className='flex-col mt-4 ml-2'>
                <p className={`text-4xl font-semibold ${isProfit ? "text-green-400" : "text-red-500"}`}>${totalProfit.toFixed(2)}</p>
                <p className={`font-semibold ${isProfit ? "text-green-400" : "text-red-500"}`}>
                    {totalProfit >= 0 ? `$${Number(totalProfit).toFixed(2)}` : `-$${Math.abs(Number(totalProfit)).toFixed(2)}`}
                </p>
            </div>
        </div >
    );
};

export default CategorySummaryCard;