const Card = ({ robots }) => {
  const { id, name, username, email } = robots;
  const RandomRobot = `https://robohash.org/${id}?set=set1&size=180x180`;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={RandomRobot} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <p>{username}</p>
    </div>
  );
};
export default Card;
