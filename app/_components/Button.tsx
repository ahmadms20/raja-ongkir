type Data = {
    children: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    width?: string;
};

const Button = ({
    children,
    type= "button",
    onClick,
    color= "text-white",
    backgroundColor= "bg-primary hover:bg-primary/80",
    borderColor,
    width= "w-fit",
}: Data) => {
    return (
        <button
            type={type}
            className={`${color} ${backgroundColor} ${borderColor} ${width} border w-fit flex justify-center items-center text-sm text-center py-2 px-3 rounded-md space-x-2 outline-none`}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;