import "./index.css"

interface IProp{
    id:number,
    img:string,
    title:string,
    article:string,
    checked:boolean,
    setChecked:(value:boolean)=>void,
    remove:()=>void
}

const MainCompo = ({img,title,article,checked,setChecked,remove}:IProp) => {

    const handleToggle=()=>{
    setChecked(!checked); 
    }
    const handleRemove=()=>{
        remove();
    }

    return (
        <>
            <div className="card">
                <div className="headerIconText">
                    <img src={img} className="img-main" />
                    <div className="title-article">
                        <h4>
                            {title}
                        </h4>
                        <p>
                            {article}
                        </p>
                    </div>
                </div>
                <div className="btn-on-off">
                    <button onClick={handleRemove} className="btn-remove">Remove</button>
                    <label >
                        <input checked={checked} onChange={handleToggle} className="toggle-checkbox" type="checkbox"/>
                        <div className="toggle-switch"></div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default MainCompo


