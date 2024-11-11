const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8" src="hambergerMenu.png" alt="menu" />
        <img
          className="h-8 mx-2"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src="user.png" />
      </div>
    </div>
  );
};

export default Head;
