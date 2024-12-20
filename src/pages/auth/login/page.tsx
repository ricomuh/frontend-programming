import Button from "../../../components/button";
import Input from "../../../components/input";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-3xl font-bold text-teal-600 mb-8">
          FINEbank.IO
        </h2>
        <form className="space-y-6">
          <div>
            <Input
              label="Email address"
              type="email"
              name="email"
              id="email"
              placeholder="hello@example.com"
            />
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Keep me signed in
              </label>
            </div>
          </div>

          <div>
            <Button type="submit">Login</Button>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or sign in with</span>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <img
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt="Google logo"
                className="h-5 w-5 mr-2"
              />
              Continue with Google
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <a
              href="/auth/register"
              className="font-medium text-teal-600 hover:text-teal-500"
            >
              Create an account
            </a>{" "}
            or{" "}
            <a
              href="/auth/forgot-password"
              className="font-medium text-teal-600 hover:text-teal-500"
            >
              Forgot Password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
