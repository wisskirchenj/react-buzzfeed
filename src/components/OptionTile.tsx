import { Option } from "../types/option";

const OptionTile = (prop: {option: Option}) => {
  return (
    <button className="option">
      <img src={prop.option.image} alt={prop.option.alt}/>
      <h4>{prop.option.text}</h4>
      <a href={prop.option.image}>{prop.option.credit}</a>
    </button>
  );
};

export default OptionTile;