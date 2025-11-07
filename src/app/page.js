import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/detalje">
      <div className="w-fit rounded-2xl p-2 shadow-md">
        <Image
          loading="eager"
          alt="cat"
          src="https://placecats.com/neo/300/200"
          width={50}
          height={50}
          className="h-full w-full object-cover"
        />
        <h2> Hej </h2>
      </div>
    </Link>
  );
}
