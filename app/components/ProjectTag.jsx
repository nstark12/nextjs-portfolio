const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border border-primary-500"
    : "text-[#ADB7BE] border border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
