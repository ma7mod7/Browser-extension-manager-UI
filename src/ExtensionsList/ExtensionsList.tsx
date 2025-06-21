import './index.css'
import { useState } from 'react';

interface IProp {
    setFilter: (filter: string) => void;
}
const ExtensionsList = ({ setFilter }: IProp) => {

    const [activeFilter, setActiveFilter] = useState("all");

    const buttons = [
        { label: "All", value: "all" },
        { label: "Active", value: "activeCard" },
        { label: "Inactive", value: "inactvieCard" },
    ]
    const handleChange = (value: string) => {
        setFilter(value);
        setActiveFilter(value)

    }
    return (
        <>
            <div className='exe'>
                <h3>Extensions List</h3>
                <div>
                    {
                        buttons.map((btn) => {
                            return (<button
                                key={btn.value}
                                onClick={() => handleChange(btn.value)}
                                className={`btn ${btn.value == activeFilter ? 'active' : ''}`}>
                                {btn.label}
                            </button>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ExtensionsList