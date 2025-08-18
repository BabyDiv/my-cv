export default function AboutContent() {
  return (
    <section className="about flex justify-around items-center">
    <div>
      <h1 className="sr-only">About me</h1>
      <p className="about__text text-[var(--color-font-primary)] font-[300]">
        I’m a frontend developer with a passion for building <span className="font-[400] text-[#00A9FF]">clean, responsive, and user-friendly web interfaces. </span>
        I believe that frontend development is not just about making things look beautiful—it’s about crafting seamless, accessible, and intuitive user experiences
      </p>
      <p className="about__text text-[var(--color-font-primary)] font-[300]">
        I have 1,5 years of experience working as a frontend developer at <span className="font-[400] text-[#00A9FF]">Perspectiva-M</span> company, 
        and I also worked on freelance projects, for example 4 month of working at educational platform <span className="font-[400] text-[#00A9FF]">QuestMeUp,</span> where I contributed to building the user interface
      </p>
      <p className="about__text text-[var(--color-font-primary)] font-[300]">
        In my projects I use SCSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript, Git / GitHub, Webpack, Figma (for UI design & layout integration)
      </p>
    </div>
  </section>
  )
}