import React from "react";
import Link from "next/link";
import { categories } from "@/constants/index";

// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/categories', {
//     cache: "no-store",
//   })

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

const CategoryList = async () => {
  return (
    <>
      <section className="wrapper">
        <div>
          <span>
            <h1 className="h3-bold">Categories</h1>
          </span>
          <div className="w-full my-10">
            <div className="grid gap-4 md:gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 ">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-slate-200 p-5 lg:px-10 text-center rounded-md flex-center"
                >
                  <Link href={category.href}>{category.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
