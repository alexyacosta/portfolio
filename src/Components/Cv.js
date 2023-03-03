import '../Assets/Style/Cv.scss';

export default function Cv() {

  const goLinkedin = () => {
    window.location.replace('https://alexya.s3.amazonaws.com/cv.pdf');
  };
 
  return (
    <div>
    <div className='btn-n'>
      <button className='btndown' onClick={goLinkedin}></button>
    </div>

    </div>
  );
}