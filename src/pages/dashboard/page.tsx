import MainLayout from "../../components/layouts/MainLayout";
const DashboardPage = () => {
  return (
    <MainLayout>
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <div className="text-lg text-gray-700 mb-2">Title1</div>
          <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
            widget 1
          </div>
        </div>
        <div className="mb-4 sm:w-1/3">
          <div className="text-lg text-gray-700 mb-2">Title2</div>
          <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
            widget 2
          </div>
        </div>
        <div className="mb-4 sm:w-1/3">
          <div className="text-lg text-gray-700 mb-2">Title3</div>
          <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
            widget 3
          </div>
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <div className="text-lg text-gray-700 mb-2">Title4</div>
          <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
            widget 4
          </div>
        </div>
        <div className="sm:w-2/3">
          <div className="mb-8">
            <div className="text-lg text-gray-700 mb-2">Title5</div>
            <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
              widget 5
            </div>
          </div>
          <div className="">
            <div className="text-lg text-gray-700 mb-2">Title6</div>
            <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
              widget 6
            </div>
          </div>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
