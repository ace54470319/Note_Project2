import "../../../css/MainBody/LeftSideBar/LeftSideBarBody.css";
import CloseButtonImg from "../../../img/CloseSideBarIcon.png";
import TagSearch from "./TagSearh";
import FileTree from "./FileTree.jsx";
import { useState } from "react";


const initialTree = [
    {
      id: "folder-1",
      name: "내 라이브러리",
      isOpen : true,
      childern:[
        {id:"file-1",name:"즐겨찾기", type: "file"},
        {id: "file-2", name:"즐겨찾기", type: "file"},
      ],
    },
  ]



function LeftSideBarBody({ onToggle, isClose }) {

  const [tree, setTree] = useState(initialTree);
  const [selectedId, setSelectedId] = useState(null);

  //공통: parentId 위치에 새 노드 추가

  const addNode = (nodes, parentId, newNode) => {
    if(!parentId){
      //루트에 추가
      return [...nodes,newNode];
    }

    return nodes.map((node)=>{
      if(node.id == parentId){
        const children = node.childern || [];
        return{
          ...node,
          childern: [...children, newNode],
          isOpen: true, //추가되면 자동 펼치기
        };
      }

      if (node.childern){
        return{
          ...node,
          childern: addNode(node.childern, parentId, newNode),
        };
      }

      return node;
    });
  };

  const handleAddFile = (parentId) =>{
    const newNode ={
      id: `file-${Date.now()}`,
      name: "새 페이지",
      type: "file",
    };
    setTree((prev)=>addNode(prev,parentId,newNode));
  };

  const handleAddFolder = (parentId) => {
    const newNode = {
      id: `folder-${Date.now()}`,
      name: "새 폴더",
      type: "folder",
      isOpen: true,
      children: [],
    };
    setTree((prev) => addNode(prev, parentId, newNode));
  };
  const toggleFolderOpenInTree = (nodes, id) => {
    return nodes.map((node) => {
      if (node.id === id && node.type === "folder") {
        return { ...node, isOpen: !node.isOpen };
      }
      if (node.children) {
        return {
          ...node,
          children: toggleFolderOpenInTree(node.children, id),
        };
      }
      return node;
    });
  };

  const handleToggleFolder = (id) => {
    setTree((prev) => toggleFolderOpenInTree(prev, id));
  };

  const handleSelect = (id) => {
    setSelectedId(id);
    // 여기서 CenterBody로 선택 정보 넘기는 구조는 나중에 연결하면 됨
  };



  return (

    <>
      <div className="LeftSideBar-warpper">
        <div
          className={`LeftSideBar-warpper-inbox ${isClose ? "collapsed" : ""}`}
        >
          <div className={`Detail ${isClose ? "collapsed" : ""}`}>
            <div className={`Title ${isClose ? "collapsed" : ""}`}>
              <span
                className={`Title_Font ${isClose ? "collapsed" : ""}`}
                style={{
                  width: "70%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                내 라이브러리
              </span>
              <div className="flex-spacer" />
              <img
                onClick={onToggle}
                className={` close-icon CloseBtn ${isClose ? "collapsed" : ""}`}
                src={CloseButtonImg}
                alt="창 닫기"
              />
            </div>
            <TagSearch isClose={isClose}></TagSearch>
            {
              !isClose && (
                <div style={{backgroundColor:"red", marginTop:"20px", height:"80%",borderRadius:"10px"}}>
                  <FileTree tree={tree}
                    selectedId={selectedId}
                    onSelect={handleSelect}
                    onAddFile={handleAddFile}
                    onAddFolder={handleAddFolder}
                    onToggleFolder={handleToggleFolder}>
                  </FileTree>
                </div>
              )
            }
          
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default LeftSideBarBody;
