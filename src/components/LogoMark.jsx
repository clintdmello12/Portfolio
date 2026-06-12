export function LogoMark({ src, alt, fallback }) {
  if (!src) {
    return (
      <span className="logo-mark text-mark" aria-label={alt}>
        {fallback}
      </span>
    );
  }

  return (
    <span className="logo-mark">
      <img
        src={src}
        alt={alt}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.nextElementSibling?.removeAttribute("hidden");
        }}
      />
      <span className="fallback-mark" hidden>
        {fallback}
      </span>
    </span>
  );
}
