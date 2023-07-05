import { addItem, getLatestInvestment } from "@/services/pocketbase";
import router from "next/router";
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';

const AddNewItem: any = ({ onTableUpdate }: any) => {
  function test() {
    const { query } = router;
    const { test } = query;

    const dynamicPart = test ? test.toString() : '';
    addItem(dynamicPart, dynamicPart)
      .then(() => {
        onTableUpdate(); // Trigger the table update in the parent component
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  }
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  return (
    <>
      <button className="btn" onClick={() => window.my_modal_2.showModal()}>open modal</button>
      <dialog id="my_modal_2" className="  bg-cardBG">
        <form method="dialog" className="  bg-cardBG">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
          <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />

          <button onClick={test}>end</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

const CollectionPage = ({ collectionName }: any) => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [collectionName]);

  const fetchData = async () => {
    try {
      const { query } = router;
      const { test } = query;

      const dynamicPart = test ? test.toString() : '';
      const response = await getLatestInvestment(collectionName, dynamicPart);
      const json = JSON.stringify(response);
      const data = JSON.parse(json);
      setCollectionData(data);
    } catch (error) {
      console.error('Error fetching collection data:', error);
    }
  };

  const handleTableUpdate = () => {
    fetchData(); // Fetch the updated data
  };

  return (
    <div>
      {/* Render the table with collectionData */}
      <AddNewItem onTableUpdate={handleTableUpdate} />
    </div>
  );
};

export default CollectionPage;