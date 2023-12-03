"use client";

import { CreateForm } from "@/actions/form";
import NewCategoryForm from "@/components/NewCategoryForm";
import { CreatePostSchema, CreatePostSchemaType } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdNewLabel } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { toast } from "./ui/use-toast";

function CreateCategoryButton() {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="duration-100 group group-hover:border-primary border rounded-md shadow-sm h-48 relative bg-muted p-5 border-primary/20 hover:border-primary hover:cursor-pointer">
          <div className="font-light text-2xl text-primary">Category</div>
          <div className="absolute bottom-5 right-5">
            <MdNewLabel className="group-hover:h-28 group-hover:w-28 group-hover:fill-muted-foreground/20 duration-200  w-16 h-16 stroke fill-muted-foreground" />
            {/* <BsFileEarmarkPlus className="group-hover:fill-primary w-16 h-16 stroke fill-muted-foreground" /> */}
          </div>
          <div className=" text-muted-foreground">New</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <NewCategoryForm />
      </DialogContent>
    </Dialog>
  );
}

export default CreateCategoryButton;
