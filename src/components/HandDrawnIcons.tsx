type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  [key: string]: unknown;
};

const DEFAULT_COLOR = '#1f5a4b';

function IconBase({ size = 24, color = DEFAULT_COLOR, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g
        stroke={color}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12.1 19.2C9.4 17.1 4.5 13.5 3.8 9.4 3.3 6.6 5 4.8 7.2 4.7c1.7-.1 3.1.9 4 2.3.8-1.3 2.3-2.4 4-2.2 2.4.2 4 2.1 3.4 4.8-.8 3.9-4.6 6.8-6.5 9.6Z" />
      <path d="M5.6 8.4c.2-.9.8-1.4 1.7-1.6" opacity=".55" />
    </IconBase>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.6 17.5 4 20l2.6-.6 10.7-10.8-2-2.1L4.6 17.5Z" />
      <path d="m14.1 5.4 2-1.9c.7-.6 1.7-.4 2.3.2.6.6.7 1.6.1 2.2l-2 2.1" />
      <path d="m13.8 6.8 2.8 2.8" />
    </IconBase>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <IconBase color="#fffaf0" {...props}>
      <path d="M4.2 5.4 20 12 4.2 18.7l2.1-5.4 6.4-1.3-6.4-1.2-2.1-5.4Z" />
    </IconBase>
  );
}

export function SchoolIcon(props: IconProps) {
  return (
    <IconBase color="#1f5a4b" {...props}>
      <path d="M4.2 19.2h15.6" />
      <path d="M6.2 18.8V10.5l5.9-4.2 5.7 4.1v8.4" />
      <path d="M8.3 10.6h7.5" />
      <path d="M10 18.7v-4.6h4v4.6" />
      <path d="M8.5 13.2h1.1M14.5 13.2h1.1" />
    </IconBase>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <IconBase color="#9a6a2f" {...props}>
      <path d="M3.6 9.3 12 5.3l8.4 4-8.4 4.1-8.4-4.1Z" />
      <path d="M7.2 11.5v4.1c1.3 1.7 8.2 1.7 9.5 0v-4" />
      <path d="M19.8 10.2v5" />
      <path d="M19.8 15.2c-.5.3-.7.8-.7 1.4" />
    </IconBase>
  );
}

export function TrendIcon(props: IconProps) {
  return (
    <IconBase color="#9a6a2f" {...props}>
      <path d="M4.2 18.5h15.6" />
      <path d="M5.4 15.2c2.1-1.8 3.6-3.2 5.4-2.2 1.3.8 2.2 1 3.4-.2 1-.9 1.9-2.1 3.7-4.1" />
      <path d="M15.4 8.7h3.2v3.1" />
      <path d="M6.2 18.5v-3M10.4 18.5v-4.4M14.6 18.5v-5.2" />
    </IconBase>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <IconBase color="#2f6f7a" {...props}>
      <path d="M6.4 3.8h8.1l3.2 3.4v12.4c0 .7-.5 1.2-1.2 1.2H6.6c-.7 0-1.3-.5-1.3-1.2V5c0-.7.5-1.2 1.1-1.2Z" />
      <path d="M14.3 4.2v3.4h3.2" />
      <path d="M8.2 11h6.8M8.2 14.2h7.1M8.2 17.3h4.8" />
    </IconBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase color="#1f5a4b" {...props}>
      <path d="M12 3.5 18.5 6v5.7c0 3.8-2.7 6.7-6.4 8.5-3.8-1.8-6.6-4.7-6.6-8.5V6L12 3.5Z" />
      <path d="m8.9 12 2 2 4.1-4.5" />
    </IconBase>
  );
}

export function HomeTabIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 11.4 12 5.2l7.5 6.2v7.2c0 .8-.5 1.3-1.3 1.3h-4.1v-5.3H10v5.3H5.8c-.8 0-1.3-.5-1.3-1.3v-7.2Z" />
      <path d="M9.1 20h5.8" />
    </IconBase>
  );
}

export function ChatTabIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5.4 6.2c0-1.3 1-2.2 2.3-2.2h8.7c1.3 0 2.2.9 2.2 2.2v6.4c0 1.3-.9 2.2-2.2 2.2h-4.5l-4.1 3.6.5-3.6h-.6c-1.3 0-2.3-.9-2.3-2.2V6.2Z" />
      <path d="M8.7 8.1h6.4M8.7 11.3h4.2" />
    </IconBase>
  );
}

export function DataTabIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 20h14" />
      <path d="M7.2 16.6v-5.2h2.9v5.2" />
      <path d="M11 16.6V7.5h3v9.1" />
      <path d="M15 16.6v-7h2.8v7" />
    </IconBase>
  );
}

export function HistoryTabIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5.1c4 0 7 3 7 6.9s-3.1 6.9-7 6.9c-3.1 0-5.7-1.8-6.6-4.5" />
      <path d="M4.5 9.7 5.2 6l3.2.9" />
      <path d="M12 8v4.3l3 1.8" />
    </IconBase>
  );
}
