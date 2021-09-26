(() => {
  // 이렇게 하는 이유. 지역변수로 선언하려고 함수를 바로 실행해버림.
  const sceneInfo = [
    {
      //0
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로, scrollHeight 세팅
      scrollHeight: 0, // 한 씬에서의 스크롤 높이, 스크롤 높이가 높을수록 애니메이션 효과가 느리다!
      objs: {
        container: document.querySelector("#scroll-section-0"),
      },
    },
    {
      //1
      type: "normal",
      heightNum: 5, // 브라우저 높이의 5배로, scrollHeight 세팅
      scrollHeight: 0, // 한 씬에서의 스크롤 높이, 스크롤 높이가 높을수록 애니메이션 효과가 느리다!
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      //2
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로, scrollHeight 세팅
      scrollHeight: 0, // 한 씬에서의 스크롤 높이, 스크롤 높이가 높을수록 애니메이션 효과가 느리다!
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      //3
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로, scrollHeight 세팅
      scrollHeight: 0, // 한 씬에서의 스크롤 높이, 스크롤 높이가 높을수록 애니메이션 효과가 느리다!
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];
  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }
  window.addEventListener("resize", setLayout);
  setLayout();
})();
