import { useState, useCallback } from "react";

export function useImageViewer() {
  const [isViewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [content, setContent] = useState([]);

  const openViewer = useCallback(({ index, content }) => {
    setViewerOpen(true);
    setActiveIndex(index);
    setContent(content);
  }, []);

  const closeViewer = useCallback(() => {
    setViewerOpen(false);
  }, []);

  return { isViewerOpen, activeIndex, content, openViewer, closeViewer };
}
