const Error = ({children}) => {
    
    return (
        <div className='bg-red-500 text-white p-3 text-center rounded-md font-bold mb-3 shadow-md'>
            {children}
        </div>
    )
}

export default Error