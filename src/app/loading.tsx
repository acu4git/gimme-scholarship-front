import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-[90vh]">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="mx-auto mt-50"
          src="/loading.svg"
          alt="Gimme a lot of money"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Loading;
