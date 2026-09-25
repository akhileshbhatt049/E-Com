import Image from "next/image";
const Categories = () => {
    return (
        <>
    <h1 className="bg-gray-100 mt-10 py-5 text-2xl font-bold text-gray-800"> <span className="ml-13">Categories</span> </h1>

    <div className="mt-6 mx-13 grid grid-cols-6 gap-5 mb-10">

        {/* Category 1 Iphone */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                IPhone
            </h2>
        </div>

        {/* Category 2  Samsung */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Samsung Phones
            </h2>
        </div>

        {/* Category 3  Sony TV */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Sony TV
            </h2>
        </div>

        {/* Category 4 Winter Clothes */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Winter Clothes
            </h2>
        </div>

        {/* Category 5 Umbrella */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Unbrella
            </h2>
        </div>

        {/* Category 6 AC */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                AC
            </h2>
        </div>

        {/* Category 7 Kids Toy */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Kids
            </h2>
        </div>

        {/* Category 8 Cricket set */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Cricket
            </h2>
        </div>

        {/* Category 9 Football */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Football
            </h2>
        </div>

        {/* Category 10 Anime */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Anime
            </h2>
        </div>

        {/* Category 11 Kitchen Utentials */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Kitchen
            </h2>
        </div>

        {/* Category 12 Phone Case */}
        <div className="py-5 border border-gray-100 rounded-xl shadow-sm group flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-40 h-40 flex justify-center bg-gray-100 rounded-lg">
                <img
                    src="https://media.gadgetbytenepal.com/2026/09/iPhone-18-Pro-Max-glacier.png" alt="Iphone"
                    className="w-32 h-auto object-contain group-hover:scale-110 transition duration-300"
                />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition">
                Phone Case
            </h2>
        </div>

    </div>
</>

    )
}
export default Categories;