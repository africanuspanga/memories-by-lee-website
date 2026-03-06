export default function SectionDivider() {
  return (
    <div className="flex items-center gap-4 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f5921e]/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f5921e]/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#f5921e]/40" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
}
