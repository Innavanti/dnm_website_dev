export const ArrowRightDown = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path d="M5,5 L35,35 M35,5 v30 h-30" fill="none" />
    </svg>
  );
};
export const ArrowRightUp = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path d="M5,35 l30,-30 M5,5 h30 v30" fill="none" />
    </svg>
  );
};

export const Crates = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinejoin="round"
    >
      <path d="M2,3 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
      <path d="M23,3 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
      <path d="M2,24 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
      <path d="M23,24 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
    </svg>
  );
};

export const Bullseye = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinecap="round"
    >
      <circle cx="50%" cy="50%" r="30%" fill="none" />
      <circle cx="50%" cy="50%" r="1%" fill="none" />
      <path d="M5, 20 h3" fill="none" />
      <path d="M32, 20 h3" fill="none" />
      <path d="M20, 5 v3" fill="none" />
      <path d="M20, 32 v3" fill="none" />
    </svg>
  );
};

export const TripleConnection = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinecap="round"
    >
      <path d="M20,20 v-12" fill="none" />
      <path d="M20,20 l12,12" fill="none" />
      <path d="M20,20 l-12,12" fill="none" />
      <circle cx="50%" cy="10%" r="8%" fill="none" />
      <circle cx="12%" cy="88%" r="8%" fill="none" />
      <circle cx="88%" cy="88%" r="8%" fill="none" />
    </svg>
  );
};

export const Whatsapp = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinecap="round"
    >
      <path
        d="M18.2188 3.09375C16.225 1.1 13.5094 0 10.725 0C4.88125 0 0.103125 4.74375 0.103125 10.5875C0.103125 12.4781 0.584375 14.2656 1.5125 15.9156L0 21.3813L5.67188 19.9375C7.21875 20.7625 8.97188 21.2438 10.7594 21.2438C16.5688 21.2094 21.3125 16.4656 21.3125 10.5875C21.3125 7.76875 20.2125 5.12188 18.2188 3.09375ZM10.6906 19.4219C9.14375 19.4219 7.52812 18.975 6.1875 18.15L5.84375 17.9438L2.50938 18.8031L3.4375 15.5719L3.23125 15.2281C2.37187 13.8188 1.89062 12.1688 1.89062 10.5188C1.89062 5.67188 5.80937 1.75312 10.6906 1.75312C13.0281 1.75312 15.2281 2.68125 16.8781 4.33125C18.5281 5.98125 19.4562 8.21563 19.4562 10.5875C19.525 15.5031 15.5375 19.4219 10.6906 19.4219ZM15.5375 12.8219C15.2625 12.6844 13.9906 12.0313 13.6812 11.9969C13.4406 11.8938 13.2344 11.8594 13.0969 12.1344C12.9594 12.4094 12.4094 12.9594 12.2719 13.1656C12.1344 13.3031 11.9969 13.3719 11.6875 13.2C11.4125 13.0625 10.5875 12.8219 9.55625 11.8594C8.76562 11.1719 8.21562 10.3125 8.1125 10.0031C7.975 9.72813 8.07812 9.625 8.25 9.45313C8.3875 9.31563 8.525 9.17813 8.62813 8.97188C8.76562 8.83438 8.76562 8.69688 8.90312 8.525C9.04062 8.3875 8.9375 8.18125 8.86875 8.04375C8.76562 7.90625 8.28438 6.6 8.04375 6.05C7.8375 5.5 7.59688 5.60313 7.45938 5.60313C7.32188 5.60313 7.11562 5.60313 6.97812 5.60313C6.84062 5.60313 6.49687 5.6375 6.29062 5.94688C6.05 6.22188 5.3625 6.875 5.3625 8.18125C5.3625 9.4875 6.29062 10.6906 6.4625 10.9313C6.6 11.0688 8.35313 13.7844 10.9656 14.9531C11.5844 15.2281 12.0656 15.4 12.4781 15.5375C13.0969 15.7438 13.6812 15.675 14.1281 15.6406C14.6437 15.6063 15.675 15.0219 15.9156 14.3688C16.1219 13.7844 16.1219 13.2 16.0531 13.0969C15.9844 13.0281 15.7781 12.925 15.5375 12.8219Z"
        fill={color}
      />
    </svg>
  );
};

export const LongArrow = ({
  strokeWidth = 1,
  color = "white",
  size = 20,
  className,
  direction = "up",
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const directionClass = direction === "up" ? "rotate-180" : "";

  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      className={`${className} ${direction === "down" ? "rotate-180" : direction === "left" ? "-rotate-90" : direction === "right" && "rotate-90"}`}
    >
      <path d="M3 3 l 2 -2 l2 2 " />
      <path d="M5 1 v8 " fill="none" />
    </svg>
  );
};

export const Send = ({
  strokeWidth = 0.2,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        d="M16.9941 8.72671C16.8691 8.50796 16.6816 8.35171 16.4629 8.22671L2.05661 0.164214C1.80661 0.0392136 1.52536 -0.0232864 1.24411 0.00796356C0.962856 0.0392136 0.712856 0.132964 0.494106 0.320464C0.275356 0.507964 0.119106 0.757964 0.0566059 1.00796C-0.0371441 1.28921 -0.00589414 1.57046 0.0878559 1.85171L2.77536 9.44546L0.0878559 17.0392C-0.00589414 17.3205 -0.0058941 17.6017 0.0566059 17.8517C0.119106 18.133 0.275356 18.3517 0.494106 18.5392C0.712856 18.7267 0.962856 18.8205 1.24411 18.8517C1.27536 18.8517 1.33786 18.8517 1.36911 18.8517C1.58786 18.8517 1.83786 18.7892 2.05661 18.6642L16.4629 10.6017C16.6816 10.4767 16.8691 10.3205 16.9941 10.1017C17.1191 9.88296 17.1816 9.63296 17.1816 9.41421C17.1816 9.19546 17.1191 8.94546 16.9941 8.72671ZM1.43161 1.41421L14.4941 8.72671H4.02536L1.43161 1.41421ZM1.43161 17.4767L4.05661 10.1642H14.5254L1.43161 17.4767Z"
        fill="white"
      />
    </svg>
  );
};
