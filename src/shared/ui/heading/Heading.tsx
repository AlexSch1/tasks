const Heading = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="my-3 h-0.5 bg-teal-200 2-full"></div>
    </div>
  );
};

export default Heading;
