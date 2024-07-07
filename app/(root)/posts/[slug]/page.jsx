import React from "react";
import Image from "next/image";
import Menu from "@/components/menu/Menu";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/post/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return res.json();
};

const page = async ({ params }) => {
  const slug = params.slug;
  const data = await getData(slug);

  return (
    <>
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 wrapper gap-10">
          <h1 className="h1-bold">{data.title}</h1>

          <Image
            src={"/assets/coding.png"}
            alt="Image"
            className=" object-cover aspect-[16/9] w-full"
            width={350}
            height={200}
          />
        </div>

        <div className="flex gap-10 wrapper">
          <div className="  w-full md:basis-4/6">
            <div className="flex flex-col gap-10">
              <div>
                <span className=" text-gray-500 p-medium-20">11-02-2023</span>

                <h2 className="p-semibold-20">{data.user.name}</h2>
              </div>
              {/* library for processing the line below */}
              <div
                className="p-regular-20"
                dangerouslySetInnerHTML={{ __html: data?.content || "" }}
              />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default page;
