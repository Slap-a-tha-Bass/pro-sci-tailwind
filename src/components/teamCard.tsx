import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export default function TeamCard({ name, title, image, bio }: TeamCardProps) {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg m-auto px-2 py-4">
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          blurDataURL={image}
          placeholder="blur"
          quality={100}
          className="rounded"
        />
      </div>
      <div>
        <h2 className="pt-4 text-center">{name}</h2>
        <h3 className="pb-4 text-center">{title}</h3>
      </div>
      <p className="px-8">{bio}</p>
    </div>
  );
}
