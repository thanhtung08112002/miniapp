interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Page({ children, className, ...props }: PageProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
} 