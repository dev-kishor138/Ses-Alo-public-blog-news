import cn from "../lib/cn";


const Input = ({type, placeholder, className}) => {
    return (
        <input type={type} placeholder={placeholder} className={cn('outline-none border-none py-2 px-4 rounded-md text-md',className)} />
    );
};

export default Input;