import { getCategories } from "@/actions/getCategories";
import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import { DataTable } from "@/components/global/data-table";
import { Button, buttonVariants } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

import EditProfile from "./components/editprofile/EditProfileModal";
import NewCategoryModal from "./components/newCategory/NewCategoryModal";
import NewProfileModal from "./components/newprofile/NewProfileModal";
import { categoryColumns } from "./components/tables/categoryColumns";
import { postColumns, User } from "./components/tables/postColumns";

export default async function Page() {
  const postData = await getPosts();
  const user = await getUser();
  const categoryData = await getCategories();

  const userId = user?.id;

  return (
    <main className="my-10 w-4/5 mx-auto">
      {/* Post table section */}
      <Link href={"/admin/post"}>Posts</Link>

      {/* admin user section */}
      <Link href={"/admin/users"}>Users</Link>

      {/* category section */}
      <Link href={"/admin/categories"}>Categories</Link>
    </main>
  );
}
