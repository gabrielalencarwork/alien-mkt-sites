export default function GlassCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`glass-panel rounded-2xl p-8 ${className}`}>
      {children}
    </div>
  );
}
