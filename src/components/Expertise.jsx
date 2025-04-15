const ExpertiseItem = (info) =>{
    return(
        <div className="bg-Beige px-1 mb-2 shadow-lg">
            <h3 className="font-Title text-lg">{info.info.category}</h3>
            {info.info.skills.map((item, index)=>(
                <span key={index} className={`inline-block font-Content text-xs bg-Crimson text-Beige px-1 mr-2 mb-1 ${item.level == "star" ? "" : "opacity-75"}`}>
                    {item.name}{item.level == "star" ? "★" : "✓"}
                </span>
            ))}

            <span className="block font-Special text-[10px] py-1">{info.info.note}</span>  
        </div>
    )
}

const Expertise = (info) =>{
    return(
        <div className="relative w-2xs mt-20 px-1">
            <div className="absolute w-[48.6%] h-8 bg-Dark-Chocolate -top-8 rounded-t-sm"></div>
            <div className="bg-Dark-Chocolate rounded-r-sm rounded-bl-sm px-2 pb-1">
                <h2 className="font-Title text-3xl text-Beige pb-2 border-b-2">Expertise</h2>
                {info.info.map((item, index)=>(
                    <ExpertiseItem key={index} info={item}></ExpertiseItem>
                ))}
            </div>
        </div>
    )
}

export default Expertise;