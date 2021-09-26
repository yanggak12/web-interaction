(() => {
  let yOffset = 0; // window.scrollY 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스트롤 위치보다 이전에 위치한 스트롤 섹션들의 스크롤 높이 합
  let currentScene = 0; // 현재 활성화된 스크롤 섹션
  let enterNewScene = false; // 새로운 스크롤 섹션이 시작되는 순간 true

  // 이렇게 하는 이유. 지역변수로 선언하려고 함수를 바로 실행해버림.
  const sceneInfo = [
    {
      //0
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로, scrollHeight 세팅
      scrollHeight: 0, // 한 씬에서의 스크롤 높이, 스크롤 높이가 높을수록 애니메이션 효과가 느리다!
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      },
      values: {
        messageA_opacity: [0, 1],
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
  function calcValues(values, currentYOffset) {
    let rv;
    // 현재 스크롤섹션에서 스크롤된 범위의 비율
    let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;
    rv = scrollRatio * (values[1] - values[0]) + values[0];
    return rv;
  }
  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight;
    console.log(currentScene);
    switch (currentScene) {
      case 0:
        let messageA_opacity_in = calcValues(
          values.messageA_opacity,
          currentYOffset
        );
        objs.messageA.style.opacity = messageA_opacity_in;
        console.log(messageA_opacity_in);
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }
  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
    // 새로고침 했을 경우 Scene 을 바로 설정해주기 위함
    yOffset = window.scrollY;
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }
  function scrollLoop() {
    prevScrollHeight = 0;
    enterNewScene = false;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return; // 브라우저 바운스 효과 마이너스 되는 경우를 예방함
      enterNewScene = true;
      currentScene--;
    }
    if (enterNewScene) return;
    playAnimation();
  }

  window.addEventListener("load", setLayout); // 웹페이지에 모든 요소들(이미지 등)이 로드가 완료되었을때 실행
  // window.addEventListener("DOMContentLoaded", setLayout); // DOM구조만 로드가 끝나면 바로 실행.
  window.addEventListener("resize", setLayout);
  window.addEventListener("scroll", () => {
    yOffset = window.scrollY;
    scrollLoop();
  });
})();
