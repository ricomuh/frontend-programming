import MainLayout from "../../../components/layouts/MainLayout";

const Balances = () => {
  const accountData = [
    {
      type: "Credit Card",
      bank: "Master Card",
      number: "3388 4556 8860 8***",
      amount: "$25000",
      logo: "💳",
    },
    {
      type: "Checking",
      bank: "AB Bank Ltd",
      number: "693 456 69 9****",
      amount: "$25000",
      logo: "💳",
    },
    {
      type: "Savings",
      bank: "Brac Bank Ltd.",
      number: "133 456 886 8****",
      amount: "$25000",
      logo: "🏦",
    },
    {
      type: "Investment",
      bank: "AB Bank Ltd",
      number: "698 456 866 2****",
      amount: "$25000",
      logo: "📈",
    },
    {
      type: "Loan",
      bank: "City Bank Ltd.",
      number: "363 456 896 6****",
      amount: "$25000",
      logo: "🏛️",
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Balances</h1>

          {/* Accounts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountData.map((account, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{account.type}</h3>
                  <span className="text-sm text-gray-500">{account.bank}</span>
                </div>
                <div className="text-2xl font-bold mb-2">{account.number}</div>
                <div className="text-gray-500 text-sm mb-4">Account Number</div>
                <div className="text-2xl font-bold mb-4">{account.amount}</div>
                <div className="flex justify-between items-center">
                  <button className="text-teal-600">Remove</button>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-full">
                    Details &gt;
                  </button>
                </div>
              </div>
            ))}

            {/* Add Accounts Card */}
            <div className="flex items-center justify-center bg-gray-200 shadow-md rounded-lg p-6">
              <div className="text-center">
                <button className="bg-teal-600 text-white px-6 py-3 rounded-full mb-4">
                  Add Accounts
                </button>
                <div className="text-gray-500">Edit Accounts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Balances;
