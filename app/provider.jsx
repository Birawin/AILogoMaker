import React from "react";
import Header from "./_components/header";
import Hero from "./_components/hero";

function Provider({children}) {
    return (
        <div>
            <Header/>
            <div className='px-10 lg:px-32 xl:px-48 2xl:px-56'>
                {children}
            </div>
            <div>
                <Hero/>
            </div>
        </div>
    )
}

export default Provider; 