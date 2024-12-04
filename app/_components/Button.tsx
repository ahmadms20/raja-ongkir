type Data = {
    children: string;
    onClick: () => void;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
};

const Button = ({ children, onClick, color= "text-white", backgroundColor= "bg-primary hover:bg-primary/80", borderColor }: Data) => {
    return (
        <button
            className={`${color} ${backgroundColor} ${borderColor} border w-fit flex justify-center items-center text-sm text-center py-2 px-3 rounded-md space-x-2 outline-none`}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;