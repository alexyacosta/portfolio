import '../Assets/Style/Contact.scss';

export default function Contact() {
  const handleClick = () => {
    window.location.replace('https://bobbyhadz.com');
  };
  return (
    <div className='btn-nav'>
      <button className='btn1' onClick={handleClick}>Click to redirect</button>
    </div>
  );
}