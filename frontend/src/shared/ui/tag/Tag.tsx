export const Tag = ({ tagAmount }: { tagAmount: string }) => {
  return (
    <span className="h-[40%] px-1.5 bg-[var(--primery)] rounded-4xl group-hover:bg-[var(--white)]  transition-colors duration-200">
      {tagAmount}
    </span>
  );
};
