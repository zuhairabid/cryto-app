const SelectButton = (props) => {
  return (
    <span
      onClick={() => {
        props.onClick();
      }}
      className={
        props.selected
          ? "font-bold border border-yellow-400 rounded-md cursor-pointer p-1 px-2 font-mons bg-yellow-400 text-black "
          : " border border-yellow-400 rounded-md cursor-pointer p-1 px-2 font-mons "
      }
    >
      {props.label}
    </span>
  );
};

export default SelectButton;
