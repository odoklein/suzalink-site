import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { Icon } from "./Icon";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p className={cx("eyebrow inline-flex items-center gap-2", tone === "dark" ? "text-white/75" : "text-muted", className)}>
      <span aria-hidden className="size-1.5 rounded-full bg-rose" />
      {children}
    </p>
  );
}

type ButtonVariant = "primary" | "ghost" | "light" | "ghost-light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-navy text-white hover:bg-navy-deep",
  ghost: "border border-ink/15 text-ink hover:bg-white",
  light: "bg-paper text-navy hover:bg-white",
  "ghost-light": "border border-white/30 text-white hover:bg-white/10",
};

/** Pill button rendered as a link (every action on the site navigates). */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const sizes = { sm: "h-10 px-4 text-sm", md: "h-12 px-6 text-[15px]", lg: "h-14 px-7 text-base" };
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[color,background-color,transform,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.97] hover:shadow-sm",
        sizes[size],
        buttonStyles[variant],
        arrow && "pr-2.5",
        className,
      )}
      {...rest}
    >
      {children}
      {arrow ? (
        <span
          aria-hidden
          className={cx(
            "ml-1 grid size-8 place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5",
            variant === "primary" ? "bg-rose text-navy" : variant === "light" ? "bg-navy text-white" : "bg-ink/5",
          )}
        >
          <Icon name="arrowRight" className="size-4" />
        </span>
      ) : null}
    </Link>
  );
}

/** Text link with a trailing arrow ("Lire →"). */
export function ArrowLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline",
        tone === "dark" ? "text-white" : "text-navy",
        className,
      )}
    >
      {children}
      <Icon name="arrowRight" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

/** Position of an element in a reveal cascade (see .r-item in app/globals.css). */
export const cascade = (i: number) => ({ "--i": i }) as CSSProperties;

/** Eyebrow + headline + 1–2 lines of subtext + one action, revealed in cascade. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  action,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  actionVariant,
  mark,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  /** Word of the title to underline by hand (see Mark). */
  mark?: string;
  subtitle?: ReactNode;
  action?: { label: string; href: string };
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  actionVariant?: ButtonVariant;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={cx("flex flex-col gap-5", centered && "mx-auto items-center text-center", className)}>
      <div className="r-item" style={cascade(0)}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
      <Heading
        id={id}
        style={cascade(1)}
        className={cx(
          "r-item font-display-tight text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.02] font-light",
          tone === "dark" ? "text-white" : "text-ink",
          centered ? "max-w-[18ch]" : "max-w-[16ch]",
        )}
      >
        {typeof title === "string" ? withMark(title, mark) : title}
      </Heading>
      {subtitle ? (
        <p
          style={cascade(2)}
          className={cx(
            "r-item max-w-[56ch] text-[17px] leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/75" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      {action ? (
        <div className="r-item mt-2" style={cascade(3)}>
          <ButtonLink href={action.href} variant={actionVariant ?? (tone === "dark" ? "light" : "primary")} arrow>
            {action.label}
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}

/**
 * Key word with a hand-drawn yellow underline (« visible », « garanti »…). The line is
 * decoration only: the word itself stays in the text colour, never on yellow.
 */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="mark">
      {children}
      <svg aria-hidden viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
        <path
          d="M2 8.5C38 4.2 92 3 132 4.4c22 .8 44 2.4 66 4.6"
          pathLength={1}
          stroke="var(--color-rose)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Underlines the first occurrence of `mark` in a plain-text title. */
export function withMark(title: string, mark?: string): ReactNode {
  const at = mark ? title.indexOf(mark) : -1;
  if (!mark || at < 0) return title;
  return (
    <>
      {title.slice(0, at)}
      <Mark>{mark}</Mark>
      {title.slice(at + mark.length)}
    </>
  );
}

export function PlaceholderBadge({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={cx(
        "eyebrow inline-flex items-center rounded-full border border-dashed px-2.5 py-1",
        tone === "dark" ? "border-white/40 text-white/80" : "border-muted/50 text-muted",
      )}
    >
      {children}
    </span>
  );
}
