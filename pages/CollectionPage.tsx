import { addItem, getLatestInvestment } from "@/services/pocketbase";
import router, { withRouter } from "next/router";
import { useEffect, useState } from 'react';

const CollectionPage = ({ collectionName, dynamicPart }: any) => {
    const [collectionData, setCollectionData] = useState([]);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const handleAddItem = async () => {
        try {

            await addItem(input1, input2);
            const updatedData = await getLatestInvestment(collectionName, dynamicPart);
            const json = JSON.stringify(updatedData);
            const data = JSON.parse(json);
            setCollectionData(data);
            // Clear input values after adding the item
            setInput1('');
            setInput2('');
            setInput3('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            console.log(dynamicPart)
            try {
                const response = await getLatestInvestment(collectionName, dynamicPart);
                const json = JSON.stringify(response);
                const data = JSON.parse(json);
                setCollectionData(data);
            } catch (error) {
                console.error('Error fetching collection data:', console.error('Error fetching collection data:', error));
            }
        };

        fetchData();
    }, [collectionName]);
    const modalMain = () => {
        return (
            <>
                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                        <button onClick={handleAddItem}>end</button>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog></>
        )

    }
    return (
        <div>
            {/* Render the table using the collectionData state */}
            <div className='min-w-screen min-h-screen bg-bgmain  text-white flex flex-col items-center font-Lexend'>
                <div className=''>
                    Stats
                </div>
                <section className='mt-20 p-8 rounded-2xl w-2/3 bg-cardBG relative'>
                    <div>
                        <button className="  -translate-x-4 -translate-y-4 h-12 w-12 rounded-full bg-purple-500 text-white absolute -top-2 -right-2   " onClick={() => window.my_modal_2.showModal()}>+</button>
                    </div>
                    <div>
                        <table className='auto w-full '>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    {/* Add more table headers */}
                                </tr>
                            </thead>
                            <tbody className=''>
                                {collectionData.map((item: any) => (
                                    <tr key={item.id} className="text-center hover:bg-purple-500 ">
                                        <td className='p-4 '>{item.asset_name}</td>
                                        <td className='p-4'>{item.categoryID}</td>
                                        <td className='p-4'>{item.purchase_price}</td>
                                        <td className='p-4'>{item.purchase_date}</td>
                                        {/* Add more table cells for additional columns */}
                                    </tr>
                                ))}
                                {collectionData.length === 0 && (
                                    <tr>
                                        <td colSpan={2}>No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            {/* Add your table rendering code here */}


















            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-ghost w-full max-w-xs"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-ghost w-full max-w-xs"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-ghost w-full max-w-xs"
                        value={input3}
                        onChange={(e) => setInput3(e.target.value)}
                    />
                    <button onClick={handleAddItem}>end</button>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default withRouter(CollectionPage);