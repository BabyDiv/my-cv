import { useRef } from 'react';

export default function ProjectsContent() {

  const listRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    listRef.current?.scrollBy({
      left: -300, behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    listRef.current?.scrollBy({
      left: 300, behavior: 'smooth'
    })
  }

  return (
    <section className="projects justify-around items-center">
      <h1 className="sr-only">Projects</h1>

      <div className="flex projects__buttons justify-between items-center px-4 absolute inset-x-0 top-[50%] right-[0%] left-[0%] -translate-y-1/2 z-10">
        <button onClick={scrollLeft} className="bg-transparent p-2 rounded-full border-none shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" fill="none" className="border-[1px] cursor-pointer border-[#FFFFFF] rounded-[32px]">
            <g clip-path="url(#a)"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.13" d="m29.997 17-8.355 8.358L30 33.714"/>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M51 0H0v51h51z"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button onClick={scrollRight} className="bg-transparent p-2 rounded-full border-none shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" fill="none" className="border-[1px] cursor-pointer border-[#FFFFFF] rounded-[32px]">
            <g clip-path="url(#a)"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.13" d="m21.003 17 8.355 8.358L21 33.714"/>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h51v51H0z"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <ul className="projects__list flex flex-row text-[var(--color-font-primary)] pl-[0] pr-[16px] list-none scrollbar-hide overflow-x-auto snap-x snap-mandatory gap-[20px]" ref={listRef}>
        <li className="bg-[#97BAF9] p-[33px] rounded-[32px] min-w-[80%] snap-start">
          <article className="projects__item">
            <h2 className="projects__title font-[400] text-center">
              QuestMeUp
            </h2>
            <p className="projects__text font-[300]">
              My responsibilities in this project included creating a responsive and user-friendly interface, 
              integrating front-end logic using JS, implementing it into PHP, ensuring seamless communication with the back-end API. 
            </p>
            <div className="w-full h-[1px] bg-[var(--color-font-primary)]"></div>

            <div className="flex flex-row justify-between items-center flex-wrap">
              <div className="my-[18px] flex flex-row gap-[4px] items-center flex-wrap">
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">Figma</span>
                </div>
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">JS</span>
                </div>
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">PHP</span>
                </div>
              </div>
              <a href="https://www.questmeup.com/" className="pt-[2px]" rel="noopener noreferrer" target="_blank">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.752 11.4675L7.32795 20.2222M24.752 11.4675L13.5325 7.75204M24.752 11.4675L21.0366 22.687" stroke="white" strokeWidth="2.7857" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>
        </li>

        <li className="bg-[#EBA97D] p-[33px] rounded-[32px] min-w-[80%] snap-start">
          <article className="projects__item">
            <h2 className="projects__title font-[400] text-center">
            CGM Export
            </h2>
            <p className="projects__text font-[300]">
            In this project, I used a Figma template for design and implemented the frontend with React and Next.js. 
            Styling was handled using CSS Modules. The site is responsive, optimized for performance, and follows modern web development practices.
            </p>
            <div className="w-full h-[1px] bg-[var(--color-font-primary)]"></div>

            <div className="flex flex-row justify-between items-center flex-wrap">
              <div className="my-[18px] flex flex-row gap-[4px] flex-wrap">
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">Figma</span>
                </div>
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">React</span>
                </div>
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">Next.js</span>
                </div>
              </div>
              <a href="https://cgmexport.kz/" className="pt-[2px]" rel="noopener noreferrer" target="_blank">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.752 11.4675L7.32795 20.2222M24.752 11.4675L13.5325 7.75204M24.752 11.4675L21.0366 22.687" stroke="white" strokeWidth="2.7857" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

            </div>
          </article>
        </li>

        <li className="bg-[#7A90EF] p-[33px] rounded-[32px] min-w-[80%] snap-start">
          <article className="projects__item">
            <h2 className="projects__title font-[400] text-center">
              MCQ
            </h2>
            <p className="projects__text font-[300]">
            I was responsible for optimizing the website’s performance and accessibility across various devices to enhance the overall user experience and search engine visibility.
            Additionally, I implemented performance optimization techniques.
            </p>
            <div className="w-full h-[1px] bg-[var(--color-font-primary)]"></div>

            <div className="flex flex-row justify-between items-center flex-wrap">
              <div className="my-[18px] flex flex-row gap-[4px] flex-wrap">
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">CEO</span>
                </div>
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">JS</span>
                </div>
                <div
                  className="rounded-[32px] py-[6px] px-[22px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <span className="projects__tools text-[var(--color-font-primary)]">PHP</span>
                </div>
              </div>
              <a href="https://mcq.kz/" className="pt-[2px]" rel="noopener noreferrer" target="_blank">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.752 11.4675L7.32795 20.2222M24.752 11.4675L13.5325 7.75204M24.752 11.4675L21.0366 22.687" stroke="white" strokeWidth="2.7857" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </article>
        </li>
      </ul>
    </section>
  )
}