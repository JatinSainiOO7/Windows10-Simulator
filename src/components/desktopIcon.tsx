import type { FC } from "react";
import type { IconType } from "react-icons";

interface DesktopIconProps {
  title: string;
  icon: IconType;
  onDoubleClick?: () => void;
}

const DesktopIcon: FC<DesktopIconProps> = ({ title, icon: Icon, onDoubleClick }) => {
  return (
    <div
      className="w-20 text-center cursor-default hover:bg-blue-200 p-2 rounded select-none"
      onDoubleClick={onDoubleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onDoubleClick) onDoubleClick();
      }}
    >
      <Icon className="text-5xl mx-auto mb-1" />
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default DesktopIcon;
