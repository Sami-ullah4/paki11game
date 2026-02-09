import Features from "@/contentData/Features";
const data = Features();
const Artical1 = () => {
  return (
    <section className="px-4 md:px-10 space-y-8 pt-8">
      <div className="space-y-3 ">
        <h2 className="text-2xl font-bold text-[#0974C2] text-center py-4">
          What is the ZS777 Game?
        </h2>
        <p className="text-lg">
          ZS777 Game is the latest APK game launched in Pakistan in 2026,
          allowing users to earn thousands of rupees. It is designed for Android
          and iOS devices. It offers multiple ways to earn money and withdraw
          funds via secure payment methods. The game supports JazzCash,
          EasyPasia, and Bank Transfer for transactions.
        </p>
        <p className="text-lg">
          ZS777 Pakistan offers unlimited bonuses and rewards, including free
          spins, a welcome bonus, monthly and weekly bonuses, a referral bonus,
          and many more. Users need to play regularly to collect these bonuses
          and rewards. Additionally, you can earn through the referral system.
          Earning from the referral system is very easy because you have to copy
          the referral code available in your game. Send it to your friends,
          family members, or other relatives. When they invest money, you will
          get 600PKR from the game and commissions for that.
        </p>
      </div>
      {/*  */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-[#0974C2] text-center py-4">
          Features of the ZS777 Game APK
        </h2>
        {/* grid shown here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {data.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 "
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-blue-100 rounded-full group-hover:bg-[#0886D5] group-hover:text-white transition-all ">
                  <div className=" transition-transform  group-hover:[&>svg]:text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0974C2] group-hover:text-[#065a94]  ">
                  {feature.title}
                </h3>
                <p className=" text-gray-800 text-md leading-relaxed">
                  {feature.description || feature.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="space-y-3 md:px-20 px-4">
        <h2 className="text-2xl font-bold text-[#0974C2] text-center py-9">
          List of Games in ZS777 Game
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ol className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </span>
              <span className="text-lg">Poker</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </span>
              <span className="text-lg">Cards</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </span>
              <span className="text-lg">PG Slots</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </span>
              <span className="text-lg">Ludo</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                5
              </span>
              <span className="text-lg">Fortune</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                6
              </span>
              <span className="text-lg">Avaitor</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                7
              </span>
              <span className="text-lg">Fishing</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                8
              </span>
              <span className="text-lg">Slot Machines</span>
            </li>
          </ol>
          <ol className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                9
              </span>
              <span className="text-lg">Jili</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                10
              </span>
              <span className="text-lg">Sports</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                11
              </span>
              <span className="text-lg">Chicken Road</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                12
              </span>
              <span className="text-lg">Crazy777</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                13
              </span>
              <span className="text-lg">Piggy Bank</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                14
              </span>
              <span className="text-lg">Plinko</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0974C2] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                15
              </span>
              <span className="text-lg">Crash</span>
            </li>
          </ol>
        </div>
      </div>
      {/*  */}
      <div className="md:px-20 px-4">
        <h2 className="text-2xl font-bold text-[#0974C2] text-center py-9">
          How to Download and Install the ZS777 Game APK?
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">Download Process</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">Go to the top of the page.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">Click on the download button.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">
              Enable unknown files on your device.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">
              Wait for the download to be complete and install the game.
            </span>
          </li>
        </ul>
        <h3 className="text-xl font-semibold py-3">Installation Process</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">After downloading is complete.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">
              Open the download folder and install the game.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">
              Open the download folder and then install the game.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0974C2] rounded-full flex-shrink-0 mt-2"></span>
            <span className="text-lg">
              After installation is complete, register your account.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Artical1;
