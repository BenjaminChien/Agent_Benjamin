const ExpertiseItem = (info) =>{
    return(
        <div className="bg-Beige px-1">
            <h3 className="font-Title text-lg">{info.info[0].category}</h3>
            {info.info[0].skills.map((item, index)=>(
                <span key={index} className="inline-block font-Content text-xs bg-Crimson text-Beige px-1">
                {item.name}{item.level}
                </span>
            ))}

            <span className="block font-Special text-xs">{info.info[0].note}</span>  
        </div>
    )
}

const Expertise = (info) =>{
    return(
        <div className="relative w-2xs mt-20 px-1">
            <div className="absolute w-[48.6%] h-8 bg-Dark-Chocolate -top-8 rounded-t-sm"></div>
            <div className="bg-Dark-Chocolate rounded-r-sm rounded-bl-sm px-2">
                <h2 className="font-Title text-3xl text-Beige pb-2 border-b-2">Expertise</h2>
                <ExpertiseItem info={info.info}></ExpertiseItem>
            </div>
        </div>
    )
}

export default Expertise;