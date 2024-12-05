type Data = {
    children: React.ReactNode;
    onClick?: () => void;
};

const Card = ({ children, onClick }: Data) => {
    return (
        <div
            className={`${onClick ? 'cursor-pointer' : ''} w-full bg-white flex flex-col justify-center items-center p-4 border border-primary rounded-md text-lg text-center font-semibold hover:text-white hover:bg-primary`}
            onClick={onClick}
        >
            {children}
        </div>
    )
};

export default Card;