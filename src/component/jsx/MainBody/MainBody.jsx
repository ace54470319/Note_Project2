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
    if (!panel) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startSize = panel.getSize();
    if (startSize === targetSize) return;

    const duration = 320;
    let startTime = null;

    const step = (time) => {
      if (!startTime) startTime = time;

      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const nextSize = startSize + (targetSize - startSize) * progress;

      panel.resize(nextSize);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const handleToggleLeftSideBar = () => {
    const next = !isClose;
    setIsClose(next);

    const targetSize = next ? 3 : 15; // 접힐 때 3, 펼 때 15
    animatePanelResize(targetSize);
  };

  return (
    <div className="body-wrapper">
      <div className="body-wrapper-inbox">
        {/* 바깥: [ Left ] | [ Center+Right ] */}
        <PanelGroup direction="horizontal" style={{ height: "100%" }}>
          <Panel
            ref={leftPanelRef}
            defaultSize={15}
            minSize={isClose ? 3 : 10}
            maxSize={20}
            collapseThreshold={0}
            className="panel-transition left-panel"
          >
            <LeftSideBarBody
              onToggle={handleToggleLeftSideBar}
              isClose={isClose}
            />
          </Panel>

          {!isClose && (
            <PanelResizeHandle
              style={{ marginLeft: "5px", marginRight: "5px" }}
              className="ResizeHandle"
            />
          )}

          {/* 오른쪽 영역: Center + Right 묶음 */}
          <Panel defaultSize={70} minSize={40}>
            {/* 안쪽: [ Center ] | [ Right ] */}
            <PanelGroup direction="horizontal" style={{ height: "100%" }}>
              <Panel defaultSize={55} minSize={40}>
                <CenterBody
                  onToggle={handleToggleLeftSideBar}
                  isClose={isClose}
                />
              </Panel>

              <PanelResizeHandle
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="ResizeHandle"
              />

              <Panel defaultSize={15} minSize={12} maxSize={17}>
                <RightSideBarBody />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default MainBody;
