export default function LoginForm() {
  return (
    <div>
      <form className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 outline-none" type="email" name="email" id="email" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 outline-none" type="password" name="password" id="password" placeholder="Enter your password" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  );
}
