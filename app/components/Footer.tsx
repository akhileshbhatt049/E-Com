const footer = () => {
    return(
<>
  <footer className="mt-16 bg-sky-800 text-gray-300">

    <div className="border-b border-gray-300">
      <div className="mx-auto w-7xl px-6 py-12">
        <div className="grid grid-cols-3 gap-8 ">

          {/* Contact Details*/}
          <div>
            <h3 className="font-semibold mb-4 text-sm text-yellow-500">
              CONTACT US
            </h3>

            {/* Location Details */}
            <div className="text-sm space-y-2">
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                <a href="mailto:Ecom@business.com" className="hover:text-yellow-400 transition" >
                  Ecom@business.com
                </a>
              </p>

              <p>
                <span className="font-medium text-white">Phone:</span>{" "}
                <a href="tel:+9779702617996" className="hover:text-yellow-400 transition" >
                  +977 9702617996
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm font-semibold mb-4">
              WAREHOUSE ADDRESS
            </h3>

            <div className="text-sm space-y-2">
              <p className="text-white">Gaushala, Kathmandu</p>
              <p>Near Pashupatinath Temple</p>
            </div>
          </div>

          {/* Working Time */}
          <div>
            <h3 className="text-yellow-500 text-sm font-semibold mb-4">
              Opening Times
            </h3>

            <div className="text-sm space-y-2">
              <p className="text-white">Sunday – Friday</p>
              <p className="text-white">10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Below Details */}
    <div className="w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-4 gap-10">

        {/* Categories */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-sm mb-5">
            PRODUCT CATEGORIES
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Furniture
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Clothes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Gadgets
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-sm mb-5">
            RESOURCES
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Warranty Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Shipping & Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-sm mb-5">
            FOLLOW US
          </h3>

          <ul className="text-sm space-y-3">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Facebook
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-yellow-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Payments */}
        <div>
          <h3 className="text-yellow-500 text-yellow-500 mb-5 text-sm">
            ACCEPTED PAYMENTS
          </h3>

          <div className="grid grid-cols-2 gap-5">
              <img src="https://cdn.esewa.com.np/ui/images/logos/esewa-icon-large.png" alt="E-Sewa" className="max-h-15 hover:scale-115 transition-all duration-200 ease-in-out" />

              <img src="https://play-lh.googleusercontent.com/Z-lHtoW4xdcfp0i49LvLMYQIKcLApaS2DB6H2Ni0-lNeBgvtJb3q2JHbE4DyIXBIDFXM0BnFMsMxdMg19hYN" alt="Khalti" className="max-h-15 hover:scale-115 transition-all duration-200 ease-in-out" />

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyVQ9607mEiIMfpeSHcL_YMNcnDtZVixwIifn4dG7Pg&s=10" alt="IME Pay" className="max-h-15 rounded-lg hover:scale-115 transition-all duration-200 ease-in-out" />

              <img src="https://fonepay.com/images/logos/fonepay.png" alt="Fone Pay" className="max-h15 hover:scale-115 transition-all duration-300 ease-in-out" />

              <img src="https://cms.nicasiabank.com/framework/uploads/Brand%20Assets/NICASIA-%20logo-reverse.png" alt="NIC ASIA" className="max-h-15 rounded-lg hover:scale-115 transition-all duration-200 ease-in-out " />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-200">
      <div className="w-7xl mx-auto py-5 flex justify-between text-xs text-gray-300">
        <p>© 2026 Your Store. All rights reserved.</p>

        <p>
          Made by <span className="font-semibold text-gray-300 hover:text-white">Akhilesh Bhatt</span>
        </p>
      </div>
    </div>
  </footer>
</>

    )
}
export default footer;