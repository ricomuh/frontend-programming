import MainLayout from "../../../components/layouts/MainLayout";

const Expenses = () => {
  const expensesData = [
    {
      title: "Housing",
      amount: "$250.00",
      change: "15%",
      increase: true,
      items: [
        { name: "House Rent", price: "$230.00" },
        { name: "Parking", price: "$20.00" },
      ],
    },
    {
      title: "Food",
      amount: "$350.00",
      change: "8%",
      increase: false,
      items: [
        { name: "Grocery", price: "$230.00" },
        { name: "Restaurant bill", price: "$120.00" },
      ],
    },
    {
      title: "Transportation",
      amount: "$50.00",
      change: "12%",
      increase: false,
      items: [
        { name: "Taxi Fare", price: "$30.00" },
        { name: "Metro Card bill", price: "$20.00" },
      ],
    },
    {
      title: "Entertainment",
      amount: "$80.00",
      change: "15%",
      increase: false,
      items: [
        { name: "Movie ticket", price: "$30.00" },
        { name: "iTunes", price: "$50.00" },
      ],
    },
    {
      title: "Shopping",
      amount: "$420.00",
      change: "25%",
      increase: true,
      items: [
        { name: "Shirt", price: "$230.00" },
        { name: "Jeans", price: "$190.00" },
      ],
    },
    {
      title: "Others",
      amount: "$50.00",
      change: "23%",
      increase: true,
      items: [
        { name: "Donation", price: "$30.00" },
        { name: "Gift", price: "$20.00" },
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Expenses Comparison</h1>

          {/* Expenses Comparison Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Monthly Comparison</h3>
              <span>This Week vs Last Week</span>
            </div>
            <div className="h-32 bg-gray-200 rounded-lg flex justify-center items-center">
              {/* Placeholder for a bar chart */}
              <span className="text-gray-500">Bar Chart Placeholder</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Expenses Breakdown</h2>

          {/* Expenses Breakdown Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expensesData.map((expense, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{expense.title}</h3>
                  <span
                    className={`text-sm ${
                      expense.increase ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {expense.change} {expense.increase ? "▲" : "▼"}
                  </span>
                </div>
                <div className="text-xl font-bold mb-4">{expense.amount}</div>
                <div className="space-y-2">
                  {expense.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between text-sm text-gray-600"
                    >
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Expenses;
