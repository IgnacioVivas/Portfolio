import './socialNetworks.scss';

function SocialNetworks() {
  return (
    <div id='container-socialNetworks'>
      <a href='https://github.com/IgnacioVivas?tab=overview&from=2022-11-01&to=2022-11-24'>
        <span className='socialNetworks'>
          <i className='ri-github-fill'></i>
        </span>
      </a>
      <a href='https://www.linkedin.com/in/ignacio-vivas-viscarra/'>
        <span className='socialNetworks'>
          <i className='ri-linkedin-box-fill'></i>
        </span>
      </a>
    </div>
  );
}

export default SocialNetworks;
