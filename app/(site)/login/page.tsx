"use client"
// import Modal from "../../components/Modal";
const LoginSignup = () => {
  return (
    <>
      <div className="px-6 py-10 grid grid-cols-2 gap-18">
          {/* LOGIN SIDE  */}
          <div className="p-10 bg-white rounded-3xl shadow-2xl">
            
            <div className="mb-8 text-center">
              <h1 className="text-5xl font-extrabold text-green-600">
                WELCOME
              </h1>
              <p className="mt-3 text-gray-500">
                Log in to your account to continue...
              </p>
            </div>

            {/* Login Form */}
            <form className="w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="login-email" className="block font-semibold text-gray-700 mb-2"> Email </label>
                <input type="email" name="email" placeholder="Enter your email" className="bg-green-50 w-full px-5 py-3 rounded-xl border border-green-100 text-gray-800 transition focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="login-password" className="text-gray-700 font-semibold text-sm">
                    Password
                  </label>

                  <button type="button" className="font-semibold text-sm text-green-600 cursor-pointer hover:text-green-700 transition">
                    Forgot Password?
                  </button>
                </div>

                <input type="password" name="password" placeholder="Enter your password" className="bg-green-50 w-full px-5 py-3 rounded-xl border border-green-100 text-gray-800 transition focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"/>
              </div>

              <button type="submit" className="bg-green-500 w-sm text-white py-3 rounded-xl font-semibold shadow-lg mx-22 hover:bg-green-600 hover:shadow-xl transition-all duration-300">
                Sign In
              </button>

              <p className=" text-sm text-gray-500 text-center">
                Don't have an account?
                <button type="button" className="font-semibold text-green-600 hover:text-green-800 transition cursor-pointer" onClick={()=> {Modal}}>
                  Sign Up
                </button>
              </p>
            </form>
          </div>
          

          {/* SIGNUP SIDE */}
          <div className="p-10 bg-white rounded-3xl shadow-2xl">

            <div className="text-center mb-7">
              <h1 className="text-green-600 text-4xl font-extrabold">
                CREATE ACCOUNT
              </h1>

              <p className="text-gray-500 mt-3">
                Register your account to get started...
              </p>
            </div>

            {/* Signup Form */}
            <form className="w-md mx-auto space-y-4">
              <div>
                <label htmlFor="full-name" className="block font-semibold text-sm text-gray-700 mb-1"> Full Name </label>
                <input type="text" name="fullName" placeholder="Enter your full name"
                  className="bg-green-100 w-full px-5 py-3 text-gray-900 rounded-xl border border-green-100 outline-none transition focus:ring-4 focus:border-green-500 focus:ring-green-100"/>
              </div>

              <div>
                <label htmlFor="signup-email" className="block font-semibold text-sm text-gray-700 mb-1"> Email Address </label>

                <input type="text" name="fullName" placeholder="Enter your email address"
                  className="bg-green-100 w-full px-5 py-3 text-gray-900 rounded-xl border border-green-100 outline-none transition focus:ring-4 focus:border-green-500 focus:ring-green-100"/>
              </div>

              <div className="grid grid-cols-2 gap-5 max-w-full">
                <div>
                  <label htmlFor="country" className="block font-semibold text-sm text-gray-700 mb-1"> Country </label>

                  <input type="text" name="country" placeholder="Your country"
                    className=" px-4 w-full py-2.5 rounded-xl bg-green-50 border border-green-100 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"/>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold text-sm text-gray-700 mb-1" > Phone </label>

                  <input id="phone" type="text" name="phone" placeholder="Phone number"
                    className=" px-4 w-full py-2.5 rounded-xl bg-green-50 border border-green-100 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100" />
                </div>
              </div>

              <div>
                <label htmlFor="signup-password" className="block font-semibold text-sm text-gray-700 mb-1"> Password </label>

                <input type="password" name="password" placeholder="Enter your password"
                  className="bg-green-100 w-full px-5 py-3 text-gray-900 rounded-xl border border-green-100 outline-none transition focus:ring-4 focus:border-green-500 focus:ring-green-100"/>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block font-semibold text-sm text-gray-700 mb-1"
                >
                  Confirm Password
                </label>

                <input type="password" name="confirmPassword" placeholder="Confirm your password"
                  className="bg-green-100 w-full px-5 py-3 text-gray-900 rounded-xl border border-green-100 outline-none transition focus:ring-4 focus:border-green-500 focus:ring-green-100"/>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center gap-2 pt-1">
                <input type="checkbox" name="terms&conditions" className=" w-5 h-5 accent-green-500 cursor-pointer"/>

                <label htmlFor="terms" className="text-sm text-gray-500"> I accept the <span className="text-green-600 font-semibold cursor-pointer"> terms and conditions </span> </label>
              </div>

              {/* Create Account */}
              <button type="submit" className="bg-green-500 w-70 text-white py-3 rounded-xl font-semibold shadow-lg mx-22 hover:bg-green-600 hover:shadow-xl transition-all duration-300">
                Create Account
              </button>

              {/* Login Link */}
              <p className="text-gray-500 text-sm text-center pt-1">
                Already have an account?{" "}
                <button type="button" className="font-semibold text-green-600 hover:text-green-800 transition">
                  Sign In
                </button>
              </p>
            </form>
          </div>
      </div>

      {/* <Modal>
        <h1 className="Bg-green-700">Loading...</h1>
      </Modal> */}
    </>
  );
};
export default LoginSignup;
