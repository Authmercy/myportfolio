export default function Footer({ footer }: { footer?: any }) {
  return (
    <footer className="border-t border-blue-100 bg-white px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-2 text-center">
        {footer?.cta && (
          <p className="text-sm font-medium text-blue-900">
            {footer.cta}
          </p>
        )}

        {footer?.copyright && (
          <small className="text-xs text-blue-700 opacity-70">
            {footer.copyright}
          </small>
        )}
      </div>
    </footer>
  );
}
