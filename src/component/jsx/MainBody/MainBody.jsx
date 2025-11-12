import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useEffect, useRef, useState } from "react";
import "../../css/MainBody/MainBody.css";

import LeftSideBarBody from "./LeftSideBar/LeftSideBarBody";
import CenterBody from "./CenterBody/CenterBody";
import RightSideBarBody from "./RightSideBar/RightSideBarBody";

function MainBody() {
  const leftPanelRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const animatePanelResize = (targetSize) => {
    const panel = leftPanelRef.current;
    if (!panel) {
      return;
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startSize = panel.getSize();
    if (startSize === targetSize) {
      return;
    }

    const duration = 320;
    let startTimestamp = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (startTimestamp === null) {
        startTimestamp = timestamp;
      }

      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      const nextSize = startSize + (targetSize - startSize) * easedProgress;

      panel.resize(nextSize);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const handleToggleLeftSideBar = () => {
    setIsClose((prev) => {
      const next = !prev;
      const targetSize = next ? 3 : 15;
      animatePanelResize(targetSize);
      return next;
    });
  };

  return (
    <div className="body-wrapper">
      <div className="body-wrapper-inbox">
        <PanelGroup direction="horizontal" style={{ height: "100%" }}>
          <Panel
            ref={leftPanelRef}
            defaultSize={15}
            minSize={3}
            maxSize={17}
            collapsible
            className="panel-transition left-panel"
          >
            <LeftSideBarBody
              onToggle={handleToggleLeftSideBar}
              isClose={isClose}
            />
          </Panel>
          {!isClose && (
            <>
              <PanelResizeHandle className="ResizeHandle" />
            </>
          )}

          <Panel defaultSize={70} minSize={60}>
            <CenterBody />
          </Panel>

          <PanelResizeHandle className="ResizeHandle" />

          <Panel defaultSize={15} minSize={12} maxSize={17}>
            <RightSideBarBody />
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default MainBody;
