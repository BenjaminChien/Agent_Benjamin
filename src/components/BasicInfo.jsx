const BasicInfo = ({info}) =>{
    return(
        <div className="w-2xs bg-Beige rounded-md border-1 border-solid p-2 mt-7 rotate-5">
            {/*Card content*/}
            <div className="space-y-3">
                {/*Name*/}
                <h1 className="text-4xl font-Title text-center">Benjamin Chien</h1>

                {/*Title*/}
                <div className="text-base font-Title text-Beige text-center px-10">
                    <div className="bg-Crimson">Full-stack Developer</div>
                </div>

                {/*Detail table*/}
                <table className="font-Content text-xs text-center table-fixed border-collapse w-full">
                    <tbody>
                        <tr className="border border-gray-500">
                            <td className="">Date of Birth</td>
                            <td className="">Location</td>
                            <td className="">Language</td>
                        </tr>
                        <tr className="border border-gray-500">
                            <td className="">1999/06/16</td>
                            <td className="">Taipei</td>
                            <td className="">Chinese, English</td>
                        </tr>

                        <tr className="border border-gray-500">
                            <td colSpan={3} className="py-1">
                                <div className="text-left px-2 py-1">
                                    <span>E-mail </span>
                                    <span className="underline">ben19990616@gmail.com</span>
                                </div>
                                <div className="text-left px-2 py-1">
                                    <span>Full Resume </span>
                                    <a className="underline" href="#">Full Resume</a>
                                </div>
                                <div className="text-right pt-2">
                                    <a href="https://www.linkedin.com/in/%E9%82%A6%E4%B8%9E-%E7%B0%A1-b3ba97209/?locale=en_US" className="inline-block pr-1" target="_blank"><img src="/linkedin.png" alt="Linkedin Link"/></a>
                                    <a href="https://github.com/BenjaminChien" target="_blank" className="inline-block pr-1"><img src="/github.png" alt="github Link"/></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BasicInfo