export const Section = ({ children, className, ...props }: { children: React.ReactNode; className?: string, id?: string }) => (
    <section {...props} className={`container mx-auto px-4 lg:px-20 relative z-10 ${className}`}>
        {children}
    </section>
)