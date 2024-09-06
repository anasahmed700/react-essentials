const TabButton = ({ children, onSelect, isSelected }) => {
    console.log("Tab Component Executing...")
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}

export default TabButton;
