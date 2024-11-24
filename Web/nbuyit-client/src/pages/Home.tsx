function Home() {
    const products = [
        {
            id: 1,
            name: 'Apple iPhone 13, 128GB, 4GB RAM, 5G, Midnight',
            image: 'https://s13emagst.akamaized.net/products/40685/40684414/images/res_974dc0e4b6a1180b612c24afef8eb494.jpg',
            price: '979,99 лв.',
        },
        {
            id: 2,
            name: 'Блендер Philips HR3041/00 Series 5000, 1200 W, Остриета New ProBlend Plus, Оребрена стъклена купа, 3 скорости плюс импулс, Подвижни остриета, Капацитет 2 л, Автоматизирано почистване с едно докосване, Черен',
            image: 'https://s13emagst.akamaized.net/products/67591/67590545/images/res_8aaaf887d6ad8f061a462f621e202929.jpg',
            price: '173,99 лв.',
        },
        {
            id: 3,
            name: 'Механична клавиатура ZENKABEAT, Bluetooth, 2.4 Ghz, RGB, 68 клавиша, Функция за бърза смяна, Адаптивен RGB софтуер, Съвместима с Play Station, Type-C към USB 3.0, Батерия 3150 mAh, С кабел/Безжична, Червени превключватели, Бял',
            image: 'https://s13emagst.akamaized.net/products/34626/34625907/images/res_ad3c682c77f9f89f7943e27d297d7dd6.jpg',
            price: '121,09 лв.',
        },
        {
            id: 4,
            name: 'Гира Orion, Винил, 5 кг',
            image: 'https://s13emagst.akamaized.net/products/78233/78232949/images/res_f9a7433c3c80776da6b75c21b7ea2d40.jpg',
            price: '27,99 лв.',
        },
        {
            id: 5,
            name: 'Двойно спално бельо, 4 части, Superior Satin Cotton, Yellow-Grey, мигли и звезди, Promerco®️',
            image: 'https://s13emagst.akamaized.net/products/68126/68125402/images/res_060ea067eb96437f70e3cdf54eabb275.jpg?width=720&height=720&hash=22771AC83D0F654DC8610C22DA3681B2',
            price: '35,36 лв.',
        },
        {
            id: 6,
            name: 'Крем от шамфъстък Pisti, За мазане, 200 г',
            image: 'https://s13emagst.akamaized.net/products/56959/56958177/images/res_bbc8ad214d844859dfe6dc6e87f621c3.jpg?width=720&height=720&hash=AC8C3EA681724E74B33DE8DB0A908944',
            price: '18,62 лв.',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to NbuyIt!</h1>
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="px-4 py-2 rounded-lg border border-gray-300 w-full max-w-sm"
                />
            </div>

            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <article
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform flex flex-col h-full"
                >
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="mt-1 p-2 mt-auto">
                        <h2 title={product.name} className="text-slate-700 line-clamp-2">{product.name}</h2>
                        
                        <div className="mt-3 flex items-end justify-between">
                            <p className="text-lg font-bold text-red-500">{product.price}</p>

                            <div className="flex items-center space-x-1.5 rounded-lg bg-[#093f87] px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <button className="text-sm">Add to cart</button>
                            </div>
                        </div>

                    </div>
                </article>
                ))}
            </div>
        </div>
    );
}

export default Home