'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const isContactsPage = pathname === '/contacts';
  const router = useRouter();
  const routes = ['/', '/about', '/projects', '/contacts'];
  const currentIndex = routes.indexOf(pathname);
  const nextIndex = (currentIndex + 1) % routes.length;
  const nextRoute = routes[nextIndex];

  return (
    <footer className="w-full">
      <div className="flex w-full justify-between items-end">
        {isAboutPage ? (
          <svg
            width="123"
            height="123"
            viewBox="0 0 123 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_174_177)">
              <path
                d="M9.69104 71.281C11.809 58.5629 20.7132 50.9305 33.8555 50.9305C49.0765 48.1632 69.4642 54.3226 77.0962 48.3885C84.7263 42.4523 82.1825 30.5821 81.3342 22.104C80.4862 13.6259 85.5744 10.6578 85.5744 10.6578C85.5744 10.6578 85.5744 0.907654 89.8145 0.0596261C94.0525 -0.788401 94.9003 7.68971 94.9003 7.68971C94.9003 7.68971 101.685 9.38576 104.227 12.7779C106.771 16.1681 113.555 17.0158 113.555 22.104C113.555 27.1922 102.531 25.0286 102.531 33.5502C102.531 44.9964 104.227 77.639 87.2702 88.6612L79.6382 123H68.6181L68.1941 92.4776H36.8214L35.5494 123H22.8333C22.8333 123 17.7451 93.3253 16.0491 83.997C15.7428 82.3178 15.5235 80.2741 15.472 78.0424C13.2568 80.4437 8.28663 79.7055 9.69104 71.281Z"
                fill="#00A9FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_174_177">
                <rect width="123" height="123" fill="white" transform="matrix(-1 0 0 1 123 0)" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <div className="w-[123px]" />
        )}

        { isContactsPage ? (
          <nav aria-label="Footer navigation" className="flex flex-row gap-[52px] text-[var(--color-font-primary)]">
            <div>
              <h2 id="footer-nav-title-1" className="text-[var(--color-font-primary)] footer__title font-[400]">Contact me</h2>
              <ul className="flex flex-col gap-4 list-none p-0 pl-[0]">
                <li><Link href="/about" className="text-[var(--color-font-primary)] footer__link no-underline font-[400]">My email <br />inna.statsenko.work <br /><span className="break-all">@gmail.com</span></Link></li>
                <li><Link href="/projects" className="text-[var(--color-font-primary)] footer__link no-underline font-[400]">My phone <br /><span className="break-all">+7(705)3409135</span></Link></li>
              </ul>
            </div>

            <div>
              <h2 id="footer-nav-title-2" className="text-[var(--color-font-primary)] footer__title font-[400]">Social media</h2>
              <ul className="flex flex-col gap-[4px] list-none p-0 pl-[0]">
                <li className="flex items-center gap-[2px]">
                  <Link href="/about" className="text-[var(--color-font-primary)] footer__link no-underline font-[400]">instagram</Link>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.39 4.89262L3.13942 8.64934M10.39 4.89262L8.89262 9.61003M10.39 4.89262L5.67257 3.39526" stroke="white" strokeWidth="1.16657" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </li>
                <li className="flex items-center gap-[2px]">
                  <Link href="/projects" className="text-[var(--color-font-primary)] footer__link no-underline font-[400]">telegram</Link>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.39 4.89262L3.13942 8.64934M10.39 4.89262L8.89262 9.61003M10.39 4.89262L5.67257 3.39526" stroke="white" strokeWidth="1.16657" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </li>
                <li className="flex items-center gap-[2px]">
                  <Link href="/contact" className="text-[var(--color-font-primary)] footer__link no-underline font-[400]">vkontakte</Link>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.39 4.89262L3.13942 8.64934M10.39 4.89262L8.89262 9.61003M10.39 4.89262L5.67257 3.39526" stroke="white" strokeWidth="1.16657" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </li>
              </ul>
            </div>

          </nav>        
        ) : (
          <div className="w-[123px]" />
        )
        }

        {/* <Link href="/">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="51" height="51" rx="25.5" fill="white" />
            <path
              d="M35.0354 25.2848L15.5356 25.282M35.0354 25.2848L26.6795 16.9265M35.0354 25.2848L26.6772 33.6407"
              stroke="#DCD8EC"
              strokeWidth="2.13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link> */}

        <button onClick={() => router.push(nextRoute)} aria-label="Next page" className="border-none cursor-pointer bg-transparent">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="51" height="51" rx="25.5" fill="white" />
            <path
              d="M35.0354 25.2848L15.5356 25.282M35.0354 25.2848L26.6795 16.9265M35.0354 25.2848L26.6772 33.6407"
              stroke="#DCD8EC"
              strokeWidth="2.13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
