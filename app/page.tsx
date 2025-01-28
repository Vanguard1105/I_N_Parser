'use client'; // Mark the file as a client component  

import { useEffect, useState } from 'react';  
const Home: React.FC = () => {  
  const [settings, setSettings] = useState({  
    buy_percentage: '',  
    max_buy: '',  
    min_buy: '',  
    total_invest_sol: '',  
    each_token_buy_times: '',  
    trader_tx_max_limit: '',  
    max_marketcap: '',  
    min_marketcap: '',  
    buy_slippage: '',  
    auto_retry_times: '',  
    sell_slippage: '',  
    tip: '',  
    buy_gas_fee: '',  
    sell_gas_fee: '',  
  });  
  const [tabIndex, setTabIndex] = useState(0);
  // State for current time if needed  
  const [currentTime, setCurrentTime] = useState(Date.now());  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const { name, value } = e.target;  
    setSettings((prevSettings) => ({  
      ...prevSettings,  
      [name]: value,  
    }));  
  };  

  return (  
      <div className='flex flex-col bg-slate-700 m-1 rounded-xl h-screen'>
        <div className='flex flex-row bg-slate-600 rounded-lg w-[100% -8px] m-1'>
          <div className={`rounded-md w-[50%] text-center my-1 ml-1 cursor-pointer text-sm p-1 ${tabIndex === 0 ? 'bg-slate-900 text-white' : 'bg-[#33415580] text-slate-300'}`} onClick={() => setTabIndex(0)}>
            Trading Settings
          </div>
          <div className={`rounded-md w-[50%] text-center my-1 mr-1 cursor-pointer text-sm p-[2px] ${tabIndex === 1 ? 'bg-slate-900 text-white' : 'bg-[#33415580] text-slate-300'}`} onClick={() => setTabIndex(1)}>
            Table Configuration
          </div>
        </div>
        {tabIndex === 0?
          <div className='flex flex-row bg-slate-900 mt-4 w-[100% - 8px] mx-1'>
            abc
          </div>
          :
          <div>

          </div>
        }
        
      </div>
  );  
};  

export default Home;