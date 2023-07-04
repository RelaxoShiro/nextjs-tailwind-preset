import { CategorySummary, Category } from '@/types';
import pocketbase from 'pocketbase';

const pb = new pocketbase(
    'https://main-backend.fly.dev/',
    // Add any configuration options you need
);
// Function to retrieve the latest added investment
export const addItem = async (collection: any, enndpoint: any) => {
    // pb.autoCancellation(false);
    const data = {
        "asset_name": "test",
        "categoryID": "skins",
        "purchase_price": 123,
        "purchase_date": "2022-01-01 10:00:00.123Z",
        "userID": "test" //replace with isUserLogon later
    };
    console.log(enndpoint)
    const record = await pb.collection('assets').create(data);

    console.log(record)
    return record;
};

// Function to retrieve the latest user
export const getUserByName = async () => {
    // pb.autoCancellation(false);


    const records = await pb.collection('users').getList(1, 50, {
        filter: 'created >= "2022-01-01 00:00:00" && username = "TESTUSER1"',
    });
    console.log(records)

    return records;
};
// Function to retrieve the latest added investment
export const getLatestInvestment = async (collection: any, enndpoint: any) => {
    // pb.autoCancellation(false);

    console.log(enndpoint)
    const records = await pb.collection('assets').getFullList({
        sort: '-created',

    });
    const filteredRecords = records.filter((categoryID) => categoryID.categoryID === enndpoint);
    console.log(filteredRecords)

    return filteredRecords;
};


export const getCardinfo = async (): Promise<Category[]> => {
    //  pb.autoCancellation(false);

    try {
        const records = await pb.collection('categories').getFullList({
            sort: '-created',
        });

        const categorySummaries = records.map((Record) => ({
            name: Record.categoryName,
            totalAmount: 33,
            totalProfit: 22,
        }));

        return categorySummaries;
    } catch (error) {
        console.error('Error retrieving category records:', error);
        return [];
    }
};