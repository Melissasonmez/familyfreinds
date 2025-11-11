export default function FilterPills() {
  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      <button className="rounded-full bg-black px-4 py-2 text-sm text-white">
        Alle
      </button>

      <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
        Katte
      </button>

      <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
        Hunde
      </button>
    </div>
  );
}
