import Button from "./Button";
import Input from "./Input";

const InputWithButton = ({ type, placeholder, children }) => {
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        className="rounded-none rounded-s-md"
      />
      <Button className="rounded-none rounded-e-md">{children}</Button>
    </>
  );
};

export default InputWithButton;
