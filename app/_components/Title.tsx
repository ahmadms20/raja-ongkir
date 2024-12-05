type Data = {
    children: string;
    color?: string;
};

const Title = ({ children, color }: Data) => {
    return (
        <div className={`${color} w-full font-bold text-3xl text-center`}>
            {children}
        </div>
    )
};

export default Title;