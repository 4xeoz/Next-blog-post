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

const MenuCategoryList = async () => {
  return (
    <>
      <section>
          <div className="w-full">
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 ">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-slate-200 p-5 text-center rounded-md flex-center"
                >
                  <Link href={category.href}>{category.name}</Link>
                </div>
              ))}
            </div>
          </div>
      </section>
    </>
  );
};

export default MenuCategoryList;
