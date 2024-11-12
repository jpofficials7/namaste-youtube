import Button from './Button';

const ButtonList = () => {
  const list = ['All', 'Gaming', 'Songs', 'Live', 'Cricket', 'Soccer', 'News', 'Cooking', 'Valentines'];

  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
