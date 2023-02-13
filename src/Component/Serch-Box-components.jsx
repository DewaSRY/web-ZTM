const SerchBox = ({ onSherch }) => {
  return (
    <div className="pa2">
      <input
        className=" pa3 ba v--green bg-lightest-blue"
        type="text"
        placeholder="Serch Robots"
        onChange={onSherch}
      />
    </div>
  );
};

export default SerchBox;
