import React, { useRef, ReactNode } from "react";
import html2canvas from "html2canvas";
import { Button } from "@mantine/core";

type DownloadAsImageProps = {
  children: ReactNode;
};

const DownloadAsImage: React.FC<DownloadAsImageProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = async () => {
    if (contentRef.current) {
      try {
        const canvas = await html2canvas(contentRef.current);
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "download.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.error("Error downloading the image", err);
      }
    }
  };

  return (
    <div>
      <div ref={contentRef}>{children}</div>
      <Button
        variant="light"
        color="gray"
        onClick={handleDownloadImage}
        mt={"lg"}
        w={"100%"}
      >
        Download as PNG
      </Button>
    </div>
  );
};

export default DownloadAsImage;
