import { useState, useMemo } from "react";

import ConsoleLogo from "./assets/logo-console-plus.svg"
import StyleSpy from "./assets/logo-style-spy.svg"
import SpeedBoost from "./assets/logo-speed-boost.svg"
import JSONWizard from "./assets/logo-json-wizard.svg"
import TabMaster from "./assets/logo-tab-master-pro.svg"
import ViewportBuddy from "./assets/logo-viewport-buddy.svg"
import Markup from "./assets/logo-markup-notes.svg"
import GridGuides from "./assets/logo-grid-guides.svg"
import Palette from "./assets/logo-palette-picker.svg"
import LinkChecker from "./assets/logo-link-checker.svg"
import DOM from "./assets/logo-dom-snapshot.svg"
import MainCompo from './MainComponents/MainCompo'



interface FilteredCompoProps {
    filter: string;
}

const FilteredCompo = ({ filter }: FilteredCompoProps) => {
    const [exeObject, setExeOject] = useState([
        {
            id: 1,
            img: StyleSpy,
            title: "StyleSpy",
            article: "Instantly analyze and copy CSS from any webpage element.",
            flag: false
        },
        {
            id: 2,
            img: SpeedBoost,
            title: "SpeedBoost",
            article: "Optimizes browser resource usage to accelerate page loading.",
            flag: false
        },
        {
            id: 3,
            img: JSONWizard,
            title: "JSONWizard",
            article: "Formats, validates, and prettifies JSON responses in-browser.",
            flag: false
        },
        {
            id: 4,
            img: TabMaster,
            title: "TabMaster Pro",
            article: "Organizes browser tabs into groups and sessions.",
            flag: false
        },
        {
            id: 5,
            img: ViewportBuddy,
            title: "ViewportBuddy",
            article: "Simulates various screen resolutions directly within the browser.",
            flag: false
        },
        {
            id: 6,
            img: Markup,
            title: "Markup Notes",
            article: "Enables annotation and notes directly onto webpages for collaborative debugging.",
            flag: false
        },
        {
            id: 7,
            img: GridGuides,
            title: "GridGuides",
            article: "Overlay customizable grids and alignment guides on any webpage.",
            flag: false
        },
        {
            id: 8,
            img: Palette,
            title: "Palette Picker",
            article: "Instantly extracts color palettes from any webpage.",
            flag: false
        },
        {
            id: 9,
            img: LinkChecker,
            title: "LinkChecker",
            article: "Scans and highlights broken links on any page.",
            flag: false
        },
        {
            id: 10,
            img: DOM,
            title: "DOM Snapshot",
            article: "Capture and export DOM structures quickly.",
            flag: false
        },
        {
            id: 11,
            img: ConsoleLogo,
            title: "ConsolePlus",
            article: "Enhanced developer console with advanced filtering and logging.",
            flag: false
        }
    ])
    const updateExtensionState = (id: number, flag: boolean) => {
        setExeOject(prevExtensions =>
            prevExtensions.map(extension =>
                extension.id === id
                    ? { ...extension, flag }
                    : extension
            )
        );
    };
    const removeCard=(id:number)=>{
        setExeOject((val)=>val.filter((ele)=>ele.id!=id));
    }
    const filteredExtensions = useMemo(() => {
        switch (filter) {
            case 'activeCard':
                return exeObject.filter(ext => ext.flag === true);
            case 'inactvieCard':
                return exeObject.filter(ext => ext.flag === false);
            case 'all':
            default:
                return exeObject;
        }
    }, [exeObject, filter]);

    const MainCompoVar = filteredExtensions.map((ele) => {
        return (
            <MainCompo
                key={ele.id}
                id={ele.id}
                img={ele.img}
                title={ele.title}
                article={ele.article}
                checked={ele.flag}
                setChecked={(val) => updateExtensionState(ele.id, val)}
                remove={()=>removeCard(ele.id)}
                />
        )
    })

    return (
        <>
            {MainCompoVar}
        </>
    )
}

export default FilteredCompo