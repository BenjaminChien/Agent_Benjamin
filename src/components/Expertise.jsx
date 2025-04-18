const ExpertiseItem = (info) =>{
    return(
        <div className="bg-Beige px-1 mb-2 shadow-lg">
            <h3 className="font-Title text-xl pb-2">{info.info.category}</h3>
            {info.info.skills.map((item, index)=>(
                <span key={index} className={`inline-block font-Content bg-Crimson text-Beige px-1 mr-2 mb-2 ${item.level == "star" ? "" : "opacity-75"}`}>
                    {item.name}{item.level == "star" ? "★" : "✓"}
                </span>
            ))}

            <span className="block font-Special text-xs py-1">{info.info.note}</span>  
        </div>
    )
}

const Expertise = (info) =>{
    return(
        <div className="relative mt-15 px-1">
            <div className="absolute w-[48.6%] h-8 bg-Dark-Chocolate -top-8 rounded-t-sm lg:w-40"></div>
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