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

  const [selectedOption, setSelectedOption] = useState('option1');  

  // Handler for when the selection changes  
  const handleChange = (event: any) => {  
    setSelectedOption(event.target.value);  
  };  
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close   

  const handleOptionClick = (option: any) => {  
    setSelectedOption(option.value);  
    setIsOpen(false); // Close the dropdown  
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
          <div className='flex flex-col bg-slate-900 mt-4 w-[100% - 8px] h-[100%] mx-1 px-2'>
            <div className='flex flex-row justify-between p-2 w-full items-center'>
              <div className='text-white'>Setting Menu</div>
              <div className='flex flex-row gap-2 py-5'>
                <div className='flex flex-row text-green-400 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg><span className='px-1 text-sm'>Add Preset</span></div>
                <div className='flex flex-row text-blue-400 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg><span className='px-1 text-sm'>Duplicate</span></div>
              </div>
            </div>
            <div className='flex items-center justify-between px-2'>
              <select   
                id="options"   
                className='flex h-9 w-full items-center whitespace-nowrap rounded-md border px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 bg-slate-800 border-slate-700 text-white'   
                value={selectedOption}   
                onChange={handleChange}  
              >  
                <option value="6793b79af4b7571a5e546eec" className='bg-green-500'>vanguard_1</option>  
              </select>  
            </div>
          </div>
          :
          <div>

          </div>
        }
        
      </div>
  );  
};  

export default Home;