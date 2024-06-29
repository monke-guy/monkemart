import Image from 'next/image';

interface IconsProps {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const Icons: React.FC<IconsProps> = ({ width, height, className, priority}) => {
  return (
    <div className={className}>
      <Image src="/logo/Logo.png" alt="Logo" width={width} height={height} priority={priority}/>
    </div>
  );
};

