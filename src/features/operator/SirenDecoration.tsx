const SirenDecoration = () => {
  return (
    <>
      <div className="absolute right-[-100px] top-1/4 size-[300px] rounded-full bg-blue-600 blur-[200px] animate-pulse" />

      <div className="absolute right-[-100px] top-2/4 size-[300px] rounded-full bg-red-600 blur-[200px] animate-pulse delay-1000" />
    </>
  );
};

export { SirenDecoration };
