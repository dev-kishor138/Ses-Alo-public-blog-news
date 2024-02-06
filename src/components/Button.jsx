import cn from "../lib/cn";


const Button = ({children, className}) => {
    return (
        <button className={cn( 'px-5 py-2 bg-blue-600 text-md font-semibold text-white rounded-sm', className)}>{children}</button>
    );
};

export default Button;