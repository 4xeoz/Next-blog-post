import React from "react";
import Card from "@/components/shared/card/Card";
import PaginationComponent from "@/components/shared/pagination/PaginationComponent";
import { POST } from "@/app/api/auth/[...nextauth]/route";

const getPosts = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/post?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return res.json();
};  

const POST_PER_PAGE = 2;



const cardList = async ({ page, cat}) => {
  const {posts, count} = await getPosts(page, cat);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className=" w-full md:basis-4/6">
      <div className="flex flex-col gap-10">
        <div>
          <span className=" text-gray-500 p-medium-16">New in!</span>

          <h2 className="h5-bold">Recent Posts</h2>
        </div>
        {posts?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
        <PaginationComponent page={page} hasPrev={hasPrev} hasNext={hasNext}/>
      </div>
    </div>
  );
};

export default cardList;
