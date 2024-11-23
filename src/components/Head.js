import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // API call
    // make an api call after every key press
    // but if the difference between 2 api call is <200ms
    // decline the api call

    /**
     * searchCache = {
     * "iphone":["iphone 13","iphone 12","iphone 11","iphone 13 pro max"],
     * }
     * searchQuery = "iphone"
     */

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
      getSearchSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  /*
  key - i
  - render the component
  - useEffect()
  - start timer => make api call after 200ms

  key - ip
   - destroy the component (useEffect cleanup - return method)
   - re-render the component
   - useEffect()
   - start timer => make api call after 200ms


    - setTimeout(200) - declines
  */

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    // update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img onClick={toggleMenuHandler} className="h-8 cursor-pointer" src="hambergerMenu.png" alt="menu" />
        <a href="/">
          <img className="h-8 mx-2" src={'youtubeLogo.png'} alt="youtube-logo" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
        </div>
        <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {showSuggestions &&
              suggestions.map((suggestion) => (
                <li key={suggestion} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src="user.png" />
      </div>
    </div>
  );
};

export default Head;
