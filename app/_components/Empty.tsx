type Data = {
    children: string;
};

const Empty = ({ children }: Data) => {
    return (
        <div className="w-full h-80 flex font-normal text-sm justify-center items-center">
            {children}
        </div>
    )
};

export default Empty;