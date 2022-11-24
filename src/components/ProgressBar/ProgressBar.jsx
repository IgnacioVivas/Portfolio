import './progressBar.scss';

function ProgressBar({ bgcolor, progress, technology }) {
  const Parentdiv = {
    height: '6px',
    width: '100%',
    backgroundColor: 'whitesmoke',
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    textAlign: 'right',
  };

  return (
    <>
      <div id='container-progess'>
        <span>{technology}</span>
        <span>{progress} %</span>
      </div>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
