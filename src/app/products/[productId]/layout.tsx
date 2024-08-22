export  const productLayout = ({ children }: { children: React.ReactNode }) => {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 10)
    }
    
    const randomNumber = getRandomNumber()
    if (randomNumber > 5) {
        throw new Error("something went wrong")
    }
    return (
        <div>
            <div>
                {children}
            </div>
            <h2> product by layout</h2>
        </div>
    )
}

export default productLayout