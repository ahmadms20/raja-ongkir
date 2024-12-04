type Data = {
    children: string
};

const Title = ({ children }: Data) => {
    return (
        <div className="w-full font-bold text-3xl text-center">
            {children}
        </div>
    )
};

export default Title;