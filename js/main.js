(() => {
  let yOffset = 0; // window.scrollY 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스트롤 위치보다 이전에 위치한 스트롤 섹션들의 스크롤 높이 합
  let currentScene = 0; // 현재 활성화된 스크롤 섹션

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
  function scrollLoop() {
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return; // 브라우저 바운스 효과 마이너스 되는 경우를 예방함
      currentScene--;
    }
    console.log(currentScene);
  }
  window.addEventListener("resize", setLayout);
  window.addEventListener("scroll", () => {
    yOffset = window.scrollY;
    scrollLoop();
  });
  setLayout();
})();
