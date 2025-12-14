import Image from "next/image";

type OrphClickProps = {
  onClick: () => void;
  source?: string;
};

export default function OrphClick({ onClick, source }: OrphClickProps) {
  return (
    <button onClick={onClick}>
      <Image
        src={source || "/jollyorph.webp"}
        width={256}
        height={256}
        alt="jolly orpheus?!"
      />
    </button>
  );
}
