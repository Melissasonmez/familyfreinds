/*import { FaRegStar } from "react-icons/fa";*/

export default function Card({ pet }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <div className="relative">
        {/* Image: mobile-friendly 4:3 ratio, fills width */}
        <img
          src={pet.image}
          alt={pet.name}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />

        {/* Favorite button: large tap target */}
        <button
          aria-label="Toggle favorite"
          cistar
          className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur transition active:scale-95"
        >
          {/*<FaRegStar className="h-5 w-5 text-gray-800" />*/}
        </button>
      </div>

      {/* Text block */}
      <div className="pt-3">
        <h3 className="truncate text-base leading-tight font-semibold text-black">
          {pet.name}
        </h3>
        <p className="text-sm text-gray-600">{pet.breed}</p>
        <p className="text-xs text-gray-500">{pet.age}</p>
      </div>
    </div>
  );
}
