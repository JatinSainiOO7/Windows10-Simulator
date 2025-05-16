// import React from "react";
import DesktopIcon from "../../components/desktopIcon";
import { FaRegFolder, FaRecycle, FaDesktop } from "react-icons/fa";

const Desktop = () => {
  // Dummy open handlers
  const openThisPC = () => alert("Opening This PC...");
  const openRecycleBin = () => alert("Opening Recycle Bin...");
  const openFolder = () => alert("Opening Folder...");

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex flex-col p-4"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/317501.jpg')", // Windows 10 wallpaper
      }}
    >
      <div className="grid grid-cols-4 gap-6 max-w-xs">
        <DesktopIcon title="This PC" icon={FaDesktop} onDoubleClick={openThisPC} />
        <DesktopIcon title="Recycle Bin" icon={FaRecycle} onDoubleClick={openRecycleBin} />
        <DesktopIcon title="Documents" icon={FaRegFolder} onDoubleClick={openFolder} />
        <DesktopIcon title="Pictures" icon={FaRegFolder} onDoubleClick={openFolder} />
      </div>
    </div>
  );
};

export default Desktop;



