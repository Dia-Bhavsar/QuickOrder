import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="m-4">
      {items.map((list) => (
        <div
          key={list.card.info.id}
          className="flex justify-between items-center mb-6 border-b-[1px] border-gray-200"
        >
          <div className="w-9/12 my-2 p-2">
            {list.card.info.veg ? (
              <p className="text-center w-5 border border-green-400">🟢</p>
            ) : (
              <p className="text-center w-5 border border-red-400"> 🔺</p>
            )}

            <span className="font-bold mt-6">
              {list.card.info.name} - {list.card.info.price / 100}
            </span>
            <p className="mb-10 text-start text-xs my-2">
              {list.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-6">
            <div className="absolute">
              <button className="ml-6 mt-[5.5rem] mx-6 w-24 rounded-lg shadow-lg p-2 bg-white text-green-300 font-bold">
                ADD
              </button>
            </div>
            <img
              className="w-full rounded-lg"
              src={CDN_URL + list.card.info.imageId}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
