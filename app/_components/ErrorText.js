export default function ErrorText(message) {
  return (
    <div className="bg-red-200 px-5 py-3 mb-5">
      <p className="text-red-900">{message}</p>
    </div>
  );
}
