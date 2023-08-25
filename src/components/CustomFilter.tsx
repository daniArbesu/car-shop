interface Props {
  title: string;
}

const CustomFilter: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default CustomFilter;
