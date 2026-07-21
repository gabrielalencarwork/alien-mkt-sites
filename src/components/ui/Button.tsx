export default function Button({ children, onClick, href }: { children: React.ReactNode, onClick?: () => void, href?: string }) {
  if (href) {
    return (
      <a href={href} className="glass-button inline-flex justify-center items-center">
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="glass-button inline-flex justify-center items-center">
      {children}
    </button>
  );
}
