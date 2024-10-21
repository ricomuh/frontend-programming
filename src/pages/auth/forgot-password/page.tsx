import Button from "../../../components/button";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-3xl font-bold text-teal-600 mb-8">
          FINEbank.IO
        </h2>
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">
          Forgot Password?
        </h3>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email address to get the password reset link.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="hello@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <Button type="submit">Reset Password</Button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500 mt-4">
          <a
            href="/auth/login"
            className="font-medium text-teal-600 hover:text-teal-500"
          >
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
