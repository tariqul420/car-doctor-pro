export default function RegisterForm() {
  return (
    <div>
      <form className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 outline-none" type="text" name="name" id="name" placeholder="Enter your name" />
        </div>

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
          Register
        </button>
      </form>
    </div>
  );
}
