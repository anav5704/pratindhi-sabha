import { GetFormById, GetForms } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";

async function BuilderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await GetFormById(id);
  if (!form) {
    throw new Error("form not found");
  }
  console.log(form);
  return <FormBuilder form={form} />;
}

export default BuilderPage;
