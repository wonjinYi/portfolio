import React, { useEffect } from 'react';

import Header from '../components/project-header'
import Footer from '../components/footer'

function App() {

  const Darkmode = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const preview = () => {
    return (
      <div className="w-full h-auto flex items-center justify-center py-7 sm:py-10 border-b-[1px] border-b-[#BEC0D7]">
        <div className="mx-[10%] sm:mx-[20%] my-6 sm:my-10 flex duration-200">
          <img src='./img/project_1_1.jpeg' alt="깃헙 바로가기" />
        </div>
      </div>
    )
  }

  const detail1 = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] pt-10 sm:pt-12 sm:pb-8 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:ml-[20%] mb-5 sm:mb-0 sm:mr-5'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>개요</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 기간 : 2022.03.24 -2022.06.03</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 인원 : 3명</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>담당 역할 : 3D 모델을 웹페이지로 불러오기, 얼굴을 인식하여 화면에 적용하기 화면을 사진으로 저장하는 기능 제작하기, 프런트 엔드</p>
          <p className='text-xs sm:text-sm font-thin'>사용 언어 : TypeScript, React.js, Three.js</p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%]'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>설명</p>
          <p className='text-xs sm:text-sm font-thin'>원하는 액세사리를 골라 얼굴을 인식하여 얼굴에 따라서 출력 시킵니다. 또한 출력된 화면을 캡쳐하여 이미지 형태로 저장하는 사이트입니다.</p>
        </div>
      </div>
    )
  }

  const links = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>관련 URL</p>
          <a className='text-xs sm:text-sm font-thin mb-1 break-words' href='https://github.com/kongsanggun/AR_Randering'> 깃헙 : https://github.com/kongsanggun/AR_Randering </a>
          <a className='text-xs sm:text-sm font-thin mb-1 break-words' href='https://www.youtube.com/watch?v=RStXu9YNDhM'> 영상 : https://www.youtube.com/watch?v=RStXu9YNDhM </a>
          <a className='text-xs sm:text-sm font-thin break-words' href='https://github.com/jeeliz/jeelizFaceFilter/tree/master/reactThreeFiberDemo'> 참고 라이브러리 : https://github.com/jeeliz/jeelizFaceFilter/tree/master/reactThreeFiberDemo </a>
        </div>
      </div>
    )
  }

  const timeline = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>타임 라인</p>
          
          <ol className="relative border-l border-[#BEC0D7] font-['Nanum_Gothic'] pb-6 mt-5 mb-5 max-w-[80%] sm:max-w-[60%]">
            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">버젼</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">기간</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">개발 내역</p>
            </li>
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          </ol>

        </div>
      </div>
    )
  }

  const detail2 = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] pb-10 sm:pt-8 sm:pb-12 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:ml-[20%] mb-5 sm:mb-0 sm:mr-5'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>보완점</p>
          <p className='text-xs sm:text-sm font-thin'>- 여러 가지 이유로 외부의 라이브러리를 끌어서 적용한 점이랑 적용하는 3D 모델의 수랑 용량이 크기 때문에 딜레이 시간이 생기는 편입니다.
            - 웹 UI 제작을 하면서 모바일과 브라우저 둘 다 어색하지 않게 적용 할 수 있는 반응형 웹 제작으로 만들 때 난항이 많이 생겼습니다.
            - React.js를 처음 개발해서 부족한 점이 많았습니다.
            - 초기에는 웹과 앱 동시에 적용되는 React Native 위주의 개발을 고안하였지만 시간 문제와 개발환경 설정 난항 문제로 인하여 웹을 통하여 적용되는 서비스로 변하게 되었습니다.</p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%] '>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>후기</p>
          <p className='text-xs sm:text-sm font-thin'>
            - 개발 중 React를 공부하면서 이 기회에 웹 개발에 대한 기초를 배운 기회가 되었습니다.
            - 여러 가지 라이브러리를 적용하는 계기가 되었습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#F9F9FB] dark:bg-[#232438] duration-200'>
      <Header Name={"Face Accessary Studio"} />
      {preview()}
      {detail1()}
      {links()}
      {timeline()}
      {detail2()}
      <Footer />
      <div id="dark_mode" className="fixed bottom-3 sm:bottom-5 left-3 sm:left-5 bg-[#232438] hover:bg-[#b8bbc7] dark:bg-[#F9F9FB] dark:hover:bg-[#a9b5cf] rounded-full h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] px-2 py-2 duration-200" onClick={() => { Darkmode() }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[24px] w-[24px] sm:h-[43px] sm:w-[43px] fill-[#F9F9FB] dark:fill-[#232438]">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default App;