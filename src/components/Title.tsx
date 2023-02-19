const Title = (prop: {title: string; subtitle: string}) => {
  return (
    <div>
      <h2>{prop.title}</h2>
      <p>{prop.subtitle}</p>
    </div>
  );
};

export default Title;