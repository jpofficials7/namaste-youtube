import { useEffect, useRef, useState } from 'react';

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  /**
   * not like ==> ref = 0
   * ref = {current: 0}
   */

  console.log('Rendering...');

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log('Namaste React', Math.random());
    }, 1000);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4 "
          onClick={() => {
            x += 1;
            console.log(x);
          }}>
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4 "
          onClick={() => {
            setY(y + 1);
          }}>
          Increase y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4 "
          onClick={() => {
            ref.current += 1;
            console.log(ref);
          }}>
          Increase ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}>
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
