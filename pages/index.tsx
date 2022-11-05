import Qualification from '../components/Qualification';
import About from '../components/About';
import Banner from '../components/Banner';
import WorkExperience from '../components/WorkExperience';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import { Combined } from '../types/all';
import Works from '../components/Works';
import Intro from '../components/Intro';
import Head from 'next/head';
import Progress from '../components/Progress';
import Skills from '../components/Skills';
import { v4 as uuid } from 'uuid';
import Footer from '../components/Footer';
import { useState } from 'react';
export default function Home(props: Combined) {
  const [introCompleted, setIntroCompleted] = useState(false);
  return (
    <>
      <Head>
        <title>Rajat Mondal | Front-End Developer</title>
        <meta property='og:title' content='Rajat Mondal Portfolio' />
        <meta
          property='og:image'
          content='https://i.ibb.co/1sBdvfm/me-avatar.png'
        />
        <meta
          property='og:description'
          content='Hi I am Rajat, a 19 year old Web Developer, living in Kolkata, India. I am pursuing Electronics and Communication Engineering, also I am working for some amazing folks at CodeBuddy. I love JavaScript because I can relate JavaScript to life as its unpredictable. Also, I know how to google things'
        />
        <meta
          name='description'
          content='Welcome to my portfolio.I am Rajat Mondal, a 20 year old Front-end developer based out of Kolkata.I mostly work on React.js and Next.js but also know Svelte, Solid.js and Angular'
        ></meta>
        <link rel='shortcut icon' href='/letter-r.png' type='image/x-icon' />
      </Head>
      {!introCompleted ? <Intro setIntroCompleted={setIntroCompleted} /> : null}
      <NavBar />
      <Progress />
      <main className='main'>
        <div id='home' />
        <Banner bannerData={props.bannerData} />
        <main className='bg_color'>
          <div id='about' />
          <About aboutData={props.aboutData} />
        </main>
        <div id='skills' />
        <Skills skills={props.skills} />
        <main className='bg_color'>
          <div id='projects' />
          <Works projects={props.projects} />
        </main>
        <WorkExperience workExperienceData={props.workExperienceData} />
        <main className='bg_color'>
          <Qualification qualificationData={props.qualificationData} />
        </main>
        <Testimonials testimonialData={props.testimonialData} />
        <main className='bg_color'>
          <div id='contact' />
          <Contact contactDetails={props.contactDetails} />
        </main>
        <Footer socialLinks={props.socialLinks} />
      </main>
    </>
  );
}

export function getStaticProps(): { props: Combined } {
  const tabVariant = ['danger', 'warning', 'success', 'primary'];

  return {
    props: {
      qualificationData: [
        {
          name: 'B.Tech (ECE)',
          place: 'B.P Poddar Institute of Management and Technology',
          board: 'M.A.K.A.U.T',
          grade: '9.57',
          gradeUnit: 'YGPA',
          timeline: '2019-2023',
        },
        {
          name: 'Higher Secondary',
          place: 'Dum Dum Baidyanath Institution for Boys',
          board: 'W.B.C.H.S.E',
          grade: '92.6',
          gradeUnit: 'Percentage',
          timeline: '2017-2019',
        },
        {
          name: 'Secondary',
          place: 'Dum Dum K.K Hindu Academy',
          board: 'W.B.B.S.E',
          grade: '89',
          gradeUnit: 'Percentage',
          timeline: '2016-2017',
        },
      ],
      aboutData: {
        title: "Hello, I'm <Rajat />",
        description:
          'Hi I am Rajat, a 20 years old Web Developer, living in Kolkata, India. I am pursuing Electronics and Communication Engineering, also I am working for some amazing folks at CodeBuddy.<br/>I love JavaScript because I can relate JavaScript to life as its unpredictable.<br/>Also, <b>I know how to google things</b>',
        lottieData: {
          src: 'https://assets1.lottiefiles.com/packages/lf20_HpFqiS.json',
          speed: '1',
          background: 'transparent',
          loop: true,
          autoplay: true,
        },
      },
      bannerData: {
        pageIntro: 'BONJOUR!',
        me: "I'm Rajat Mondal",
        typing: [
          'An Artist!',
          'A Student.',
          'A Geek.',
          'A Programer.',
          'An Enthusiast!',
          'A Web-Developer!',
          'An Angular Developer.',
          'An Illustrator!',
          'A React Developer.',
          'A Full Stack Developer',
        ],
        imageOverlayText: 'When We Talk We Move',
      },
      workExperienceData: [
        {
          name: 'CodeBuddy Pvt. lTd.',
          timeLine: 'February 2022 - Present',
          title: 'Software Developer',
          works: 'Building Web Applications with React JS',
        },
        {
          name: 'Metafic',
          timeLine: 'December 2021 - January 2021',
          title: 'Software Engineer',
          works: 'Building Web Applications with React JS',
        },
        {
          name: 'AGPayTech India Pvt. lTd.',
          timeLine: 'August 2021 - December 2021',
          title: 'Junior Angular Developer',
          works:
            'Building Payment Solutions using Angular and Designing the Landing Page in HTML CSS',
        },
        {
          name: 'Upjao AgroTech',
          timeLine: 'June 2021 - Aug 2021',
          title: 'FullStack Developer Intern',
          works: 'Building an Admin Panel with Angular and Firebase',
        },
        {
          name: 'Engineer Diaries',
          timeLine: 'May 2021 - June 2021',
          title: 'Angular Developer Intern',
          works:
            'Designing and Building Official website of Engineer Diaries with Angular 11',
        },
      ],
      testimonialData: [
        {
          name: 'Suraj Mondal',
          position: 'Senior Software Engineer at LearningMate',
          testimonial:
            'I had the pleasure of mentoring Rajat since 6 months. From the first day, he impressed me with his passion for coding, web development and designing and he has my highest recommendation as a Angular & Node.js developer along with designing skills.',
          imageURL: '/suraj.jpg',
        },
        {
          name: 'Satrajeet Banerjee',
          position: 'Programmer Analyst Trainee at Cognizant',
          testimonial:
            "Being Rajat's college senior I know him from the early days of his college life. He is very enthusiastic and always craving to learn new things. However, I found out he is mostly interested in Full-stack Development and continuously learning and applying his skills through internships in reputed organisations.",
          imageURL: '/satrajeet.jpg',
        },
        {
          name: 'Abhisek Bag',
          position: 'Software Engineer at Tata Consultancy Services',
          testimonial:
            "I've been knowing Rajat since he was in 9th standard. He has really evolved himself by learning and adapting a lot of skills (as niche as Python programming). I would like to recommend this hardworking guy.",
          imageURL: '/abhisek.jpg',
        },
        {
          name: 'PRIYANKA ARORA',
          position: 'Automation Trainer',
          testimonial:
            "Rajat worked with Engineer Diaries between the month of May'2021 to June' 2021. He was assigned the responsibility to make the UI of the site built on Angular better and make it responsive. He delivered much more than expected. He is extremely dedicated, sincere, and creative. It was a pleasure working with Rajat.",
          imageURL: '/priyanka.jpg',
        },
      ],
      contactDetails: {
        location: 'Kolkata, West Bengal',
        country: 'India',
        email: 'rm2932002@gmail.com',
        mobile: '+916289703125',
        lottieSrc:
          'https://assets9.lottiefiles.com/packages/lf20_9wjm14ni.json',
      },
      socialLinks: {
        linkedIn: 'https://www.linkedin.com/in/rajat-mondal-a7abb8199/',
        github: 'https://github.com/hyvip-ai',
        hackerrank: 'https://www.hackerrank.com/rm2932002',
        npm: 'https://www.npmjs.com/~hyvip-ai',
      },
      projects: [
        {
          id: uuid(),
          name: 'React Chat Application',
          techStack: [
            {
              tag: 'React',
              classname: 'danger',
            },
            {
              tag: 'FireBase',
              classname: 'warning',
            },
          ],
          about:
            'A simple real time chat application where you can create room or talk directly with a person',
          tags: ['FullStack', 'React', 'Various'],
          url: 'https://react-chat-by-rajat.netlify.app/',
          img: '/about01.png',
          github: 'https://github.com/hyvip-ai/react-chat',
        },
        {
          id: uuid(),
          name: 'Shopify Clone',
          techStack: [
            {
              tag: 'Angular',
              classname: 'success',
            },
            {
              tag: 'Nodejs',
              classname: 'primary',
            },
          ],
          about:
            'Just a website like shopify where the user can create their own store',
          tags: ['FullStack', 'Angular', 'Nodejs', 'Various'],
          img: '/about02.png',
          github: 'https://github.com/hyvip-ai/Shopify-clone',
          url: '',
        },
        {
          id: uuid(),
          name: 'RealTime Collaboration',
          techStack: [
            {
              tag: 'React',
              classname: 'danger',
            },
            {
              tag: 'Socket.io',
              classname: 'warning',
            },
            {
              tag: 'Node',
              classname: 'success',
            },
          ],
          about:
            'A simple socket.io project for group video call , chat , white board collaboration and user list.',
          tags: ['FullStack', 'React', 'Nodejs', 'Various'],
          img: '/about03.png',
          github: 'https://github.com/hyvip-ai/socket',
          url: '',
        },
        {
          id: uuid(),
          name: 'Exam Website',
          techStack: [
            {
              tag: 'React',
              classname: 'primary',
            },
          ],
          about:
            'An exam taking website where user can create their custom exams and play trivia.',
          tags: ['React', 'Various'],
          url: 'https://react-exam-app.netlify.app/',
          img: '/about04.png',
          github: 'https://github.com/hyvip-ai/exam_taking',
        },
        {
          id: uuid(),
          name: 'Role Base Authentication System',
          techStack: [
            {
              tag: 'Angular',
              classname: 'danger',
            },
            {
              tag: 'Nodejs',
              classname: 'warning',
            },
          ],
          about:
            'Just a website to replicate Role Base Authentication system using Angular Auth Guard',
          tags: ['Angular', 'Nodejs', 'Various'],
          img: '/about01.png',
          github: 'https://github.com/hyvip-ai/angular_role_guard_front',
          url: '',
        },
        {
          id: uuid(),
          name: 'Sorting Algorithm Visualizer',
          techStack: [
            {
              tag: 'Svelte',
              classname: 'success',
            },
          ],
          about: 'This is a bubble sort algorithm visualizer made with Svelte.',
          tags: ['Svelte', 'Various'],
          url: 'https://sorting-visualizer-by-rajat.netlify.app/',
          img: '/about02.png',
          github: 'https://github.com/hyvip-ai/sorting_algorithm_visualizer',
        },
        {
          id: uuid(),
          name: 'Task Manager',
          techStack: [
            {
              tag: 'Angular',
              classname: 'primary',
            },
          ],
          about: 'A simple task manager application to keep track of my tasks',
          tags: ['Angular'],
          img: '/about04.png',
          github: 'https://github.com/hyvip-ai/angular_task_manager',
          url: 'https://angular-task-manager-by-rajat.netlify.app/',
        },
        {
          id: uuid(),
          name: 'GitHub Stats',
          techStack: [
            {
              tag: 'Svelte',
              classname: 'danger',
            },
          ],
          about:
            'This is a simple website to show your github data and help you to find the repo and redirect you to it.',
          tags: ['Svelte'],
          img: '/about01.png',
          github: 'https://github.com/hyvip-ai/github_stats',
          url: 'https://github-stats-by-rajat.netlify.app/',
        },
        {
          id: uuid(),
          name: 'Simon Says',
          techStack: [
            {
              tag: 'Svelte',
              classname: 'warning',
            },
          ],
          about:
            'This is a simple simon-says game made with svelte you can play it with your friends.',
          tags: ['Svelte', 'Game'],
          img: '/about02.png',
          github: 'https://github.com/hyvip-ai/simon_says_svelte',
          url: 'https://simon-says-by-rajat.netlify.app/',
        },
        {
          id: uuid(),
          name: 'Card Matching',
          techStack: [
            {
              tag: 'Svelte',
              classname: 'success',
            },
          ],
          about: 'A simple card matching game made in svelte',
          tags: ['Game'],
          img: '/about03.png',
          github: 'https://github.com/hyvip-ai/card-matching-game',
          url: 'https://card-matching-game-svelte.netlify.app/',
        },
        {
          id: uuid(),
          name: 'Hangman Game',
          techStack: [
            {
              tag: 'Svelte',
              classname: 'primary',
            },
          ],
          about: 'A hangman game made in svelte',
          tags: ['Game'],
          img: '/about04.png',
          url: 'https://svelte-hangman.netlify.app/',
          github: 'https://github.com/hyvip-ai/hangman_svelte',
        },
        {
          id: uuid(),
          tags: ['Drawing'],
          url: 'https://rajatmondalportfolio.netlify.app/assets/d2.webp',
        },

        {
          id: uuid(),
          tags: ['Drawing'],
          url: 'https://rajatmondalportfolio.netlify.app/assets/d4.webp',
        },
        {
          id: uuid(),
          tags: ['Drawing'],
          url: 'https://rajatmondalportfolio.netlify.app/assets/d5.webp',
        },
        {
          id: uuid(),
          tags: ['Drawing'],
          url: 'https://rajatmondalportfolio.netlify.app/assets/d6.webp',
        },

        {
          id: uuid(),
          tags: ['Drawing'],
          url: 'https://rajatmondalportfolio.netlify.app/assets/d8.webp',
        },
      ],
      skills: [
        {
          image: '/html.png',
          name: 'HTML5',
          bgColor: '#FFF4F2',
        },
        {
          image: '/css.png',
          name: 'CSS',
          bgColor: '#DDE8EE',
        },
        {
          image: '/javascript.png',
          name: 'JavaScript',
          bgColor: '#FDF7D1',
        },
        {
          image: '/typescript.png',
          name: 'TypeScript',
          bgColor: '#DDE8EE',
        },
        {
          name: 'React',
          image: '/react.png',
          bgColor: '#ECFCFF',
        },
        {
          name: 'Redux',
          image: '/redux.png',
          bgColor: '#EFE8FA',
        },
        {
          name: 'Node Js',
          image: '/node.png',
          bgColor: '#E7FDF3',
        },
        {
          name: 'SASS',
          image: '/sass.png',
          bgColor: '#F3DDE4',
        },
        {
          name: 'GIT',
          image: '/git.png',
          bgColor: '#FCECE7',
        },

        {
          name: 'Figma',
          image: '/figma.png',
          bgColor: '#FCECE7',
        },
        {
          name: 'Svelte',
          image: '/svelte.svg',
          bgColor: '#fce3e0',
        },
        {
          name: 'Solid Js',
          image: '/solid.svg',
          bgColor: '#4f88c625',
        },
        {
          name: 'Angular',
          image: '/angular.svg',
          bgColor: '#ffe3ea',
        },
        {
          name: 'Next Js',
          image: '/next.svg',
          bgColor: '#d4d4d4',
        },
        {
          bgColor: '#ccf8ff',
          name: 'Tailwind CSS',
          image: '/tailwind.png',
        },
      ],
    },
  };
}
