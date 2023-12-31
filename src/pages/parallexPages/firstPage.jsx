import person from '../../assets/background.png'
import { TypeAnimation } from 'react-type-animation';

export default function FirstPage(){
    return(
        <div className="flex sm:flex-row  items-center justify-center flex-rev  flex-col-reverse w-full p-10  "
            style={{
              height: '100vh',
              width: '100vw',
              backgroundSize: 'cover',
            }}
            >
              {/* <video autoPlay loop muted className="absolute z-0 w-full h-full  object-cover opacity-75">
                <source src={video} type="video/mp4" />
              </video> */}
              <div className="flex flex-col items-start justify-center w-full p-5 z-10">
                <div className='text-5xl text-white'>
                  Welcome to 
                  <br/>
                  <span className='
                  text-7xl
                  font-bold
                  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
                    bg-clip-text
                    text-transparent'>
                      The Tal
                      <TypeAnimation
                      sequence={[
                        "e Realm",2000,
                      ]}
                      speed={10}
                      repeat={3}
                      />
                    </span>
                </div>
                <div className="flex flex-col pt-10">
                <button type="button" className=" hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                Get Started
                </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full z-10">
                <img src={person} style={{ width: '70%' }} />
              </div>
            </div>
    );
}