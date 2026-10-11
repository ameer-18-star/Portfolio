import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item }) => {
  // Items with no href and a "pending" value render as a muted disabled card.
  const isPending = !item.href && item.value.toLowerCase().includes("pending");
  const Wrapper = item.href ? "a" : "div";
  return (
    <Wrapper
      href={item.href || undefined}
      target={item.href ? "_blank" : undefined}
      rel={item.href ? "noopener noreferrer" : undefined}
      className={`glass-panel p-4 flex items-center gap-3 transition-all duration-300 ${
        isPending
          ? "opacity-50 cursor-not-allowed border-dashed"
          : "hover:border-cyan/40"
      }`}
      aria-disabled={isPending || undefined}
    >
      <div className="w-10 h-10 center rounded-md bg-cyan/10 text-cyan shrink-0">
        <FontAwesomeIcon icon={item.icon} />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[11px] text-muted uppercase">{item.title}</p>
        <p className="text-sm font-medium truncate">{item.value}</p>
      </div>
    </Wrapper>
  );
};

export default Address;
