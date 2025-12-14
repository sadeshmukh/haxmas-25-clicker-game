import Image from "next/image";

type JollyOrpheusClickProps = {
  onClick: () => void;
};

export default function JollyOrpheusClick({ onClick }: JollyOrpheusClickProps) {
  return (
    <button onClick={onClick}>
      <Image
        src="/jollyorph.webp"
        width={512}
        height={512}
        alt="jolly orpheus?!"
      />
    </button>
  );
}
