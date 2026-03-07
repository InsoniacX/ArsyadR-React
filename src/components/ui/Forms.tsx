import type { Forms } from "@/types";

const FormsInput = ({ label }: Forms) => {
  return (
    <form action="">
      <div className="w-full h-fit bg-transparent">
        <label htmlFor="">{label}</label>
        <input type="text" name="" id="" />
      </div>
    </form>
  );
};

export default FormsInput;
