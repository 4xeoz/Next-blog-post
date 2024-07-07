

const Layout = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-center bg-cover flex-center bg-primary-50">
            {children}
        </div>
    );

}

export default Layout;