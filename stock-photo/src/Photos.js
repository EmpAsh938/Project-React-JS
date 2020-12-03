const Photos = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    first_name,
    last_name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <div className="photo">
      <img src={regular} alt={alt_description} className='photo-img'/>
      <div className="photo-desc">
        <div className="photo-box">
          <div className='photo-box-desc'>
            <h4>{first_name +" "+ last_name}</h4>
            <p>{likes} likes</p>
          </div>
          <a href={portfolio_url} target="_blank" rel="noreferrer">
            <img src={medium} alt={last_name} className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photos;
