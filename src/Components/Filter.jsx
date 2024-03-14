import React from "react";

const Filter = ({filterData,setCategory, category}) => {
    

    function filterHandler(title) {
        setCategory(title);
      }
    
    return (
     
        <div className="w-11/12 flex  flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">    
         {filterData.map((data)=>{
        return ( 
        //     <button className="bg-gray-800 rounded-md text-lg text-stone-400 mx-[10px] px-2 " key={data.id}>
        //    {data.title}
        //     </button>
        <button
        className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
          ${
            category === data.title
              ? "bg-opacity-60 border-white"
              : "bg-opacity-40 border-transparent"
          }
        `}
        key={data.id}
        onClick={() => filterHandler(data.title)}
      >
        {data.title}
      </button>
        )

         })}

        </div> 
    )

}
export default Filter