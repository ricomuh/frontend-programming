import { useState } from "react";
import MainLayout from "../../../components/layouts/MainLayout";

const Transactions = () => {
  const transactions: Array<{
    item: string;
    shopName: string;
    date: string;
    paymentMethod: string;
    amount: string;
  }> = [
    {
      item: "GTR 5",
      shopName: "Gadget & Gear",
      date: "17 May, 2023",
      paymentMethod: "Credit Card",
      amount: "$160.00",
    },
    {
      item: "Polo shirt",
      shopName: "XL fashions",
      date: "17 May, 2023",
      paymentMethod: "Credit Card",
      amount: "$20.00",
    },
    // ... more transactions
  ];
  const [displayedTransactions, setDisplayedTransactions] = useState(
    transactions.slice(0, 5)
  );

  const handleLoadMore = () => {
    const nextTransactions = transactions.slice(
      displayedTransactions.length,
      displayedTransactions.length + 5
    );
    setDisplayedTransactions([...displayedTransactions, ...nextTransactions]);
  };

  return (
    <MainLayout>
      <div className="bg-white shadow-md rounded-md">
        <div className="flex justify-between px-4 py-2 bg-gray-100 rounded-t-md">
          <button className="text-gray-700 hover:text-gray-900">All</button>
          <button className="text-gray-700 hover:text-gray-900">Revenue</button>
          <button className="text-gray-700 hover:text-gray-900">
            Expenses
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Items
              </th>
              <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Shop Name
              </th>
              <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedTransactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex-shrink-0 mr-4">
                      {/* <img src={`transaction-icons/${transaction.item.toLowerCase()}.svg`} alt={transaction.item} /> */}
                    </div>
                    <span>{transaction.item}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{transaction.shopName}</td>
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.paymentMethod}</td>
                <td className="px-4 py-2">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {displayedTransactions.length < transactions.length && (
          <div className="text-center py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Transactions;
