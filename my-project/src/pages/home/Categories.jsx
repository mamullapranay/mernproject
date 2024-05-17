import React from "react";

const categoryItems=[
    {id:1,title:"Main Dish",des:"(100 dishes)",image:"/images/home/category/img1.png"},
    {id:2,title:"Break fast",des:"(12 breakfast)",image:"/images/home/category/img2.png"},
    {id:3,title:"Dessert",des:"(70 dessert)",image:"/images/home/category/img3.png"},
    {id:4,title:"Browse all",des:"(500 Items)",image:"/images/home/category/img4.png"},
    
]

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">
          Customers Favourites
        </p>
        <h3 className="title">
          Popular Catogories
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
   {
    categoryItems.map((item,i)=>(
      <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 mx-auto w-60 cursor-pointer hover:-translate-y-4 duration-300 transition-all'>

            <div className="flex w-full mx-auto items-center justify-center" >
            <div>
              <img src={item.image} className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"/></div>
              </div>
            <div className="mt-4 space-y-1 text-center font-semibold">
            <h1>{item.title}</h1>   
            <p>{item.des}</p>
            </div>        
       </div>
    ))
   }
      </div>
    </div>
  );
};

export default Categories;
