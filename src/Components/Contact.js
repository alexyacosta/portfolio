import '../Assets/Style/Contact.scss';

export default function Contact() {
  const goLinkedin = () => {
    window.location.replace('https://www.linkedin.com/in/alexyacosta/');
  };
  const goGitHub = () => {
    window.location.replace('https://github.com/alexyacosta');
  };
  const goWhats = () => {
    window.location.replace('https://wa.me/19971340809');
  };
  const goMail = () => {
    window.location.replace('mailto:alexyacosta@live.com?subject=Hello%20again');
  };
  return (
    <div>
    <div className='btn-nav'>
      <button className='btn1' onClick={goLinkedin}></button>
      <button className='btn2' onClick={goGitHub}></button>
      <button className='btn3' onClick={goWhats}></button>
      <button className='btn4' onClick={goMail}></button>
    </div>

    </div>
  );
}