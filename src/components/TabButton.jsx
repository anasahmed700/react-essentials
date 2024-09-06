const TabButton = ({ children, onSelect }) => {
    console.log("Tab Component Executing...")
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}

export default TabButton;
