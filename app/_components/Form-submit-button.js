import { useFormStatus } from "react-dom";

export default function FormSubmitButton() {
  const status = useFormStatus();

  return (
    <div className="flex justify-end">
      <button
        disabled={status.pending}
        className="bg-primary-900 p-3 rounded-md hover:bg-primary-800"
      >
        {status.pending ? "Creating..." : "Book Cabin"}
      </button>
    </div>
  );
}
