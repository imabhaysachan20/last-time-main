import { FaHome, FaMobile, FaServicestack } from "react-icons/fa";

export const reviews = [
  {
    profile:"/profile1.jpg",
    quote: "Working with Vijyapana on our product shoot was an excellent experience. They captured the essence of our torches perfectly, highlighting every detail with stunning precision. The photos were crisp, professional, and truly elevated our brand presentation. Their team’s creativity and attention to detail were impressive, and they delivered beyond our expectations. We highly recommend Vijyapana for anyone seeking high-quality product photography.",
    name: "Rachit Gupta",
    title: "Co. Founder BlackMyth"
  },
  {
    profile:"/profile2.jpg",
    quote: "The team at Vijyapana exceeded our expectations with their creative marketing campaigns and stunning print media designs. Their attention to detail and ability to capture our brand's essence made a significant impact on our visibility. We’ve seen tremendous growth in brand awareness thanks to their efforts.",
    name: "Utkarsh Singh",
    title: "Founder Vyom Clothing"
  },
  {
    profile:"/profile3.jpg",
    quote: "Working with Vijyapana to create their website was a rewarding experience. We aimed to build a platform that reflects their brand’s dedication to quality and craftsmanship, and the result speaks for itself. The site is elegant, responsive, and makes it effortless for customers to explore their stunning services. It’s been a pleasure helping Vijyapana enhance their online presence, and we’re proud to have been part of their journey",
    name: "Jannu Hans",
    title: "Marketing Lead at J Furnitures"
  },
  {
    profile:"/profile4.jpg",
    quote: "Delivered exceptional audio mixing services for our latest project. The clarity and precision of the final mix truly brought our production to life. Their team was incredibly professional, attentive to every detail, and delivered on time. If you're looking for top-tier audio work that enhances your project, Vijyapana is the ideal partner. We couldn't be happier with the results.",
    name: "Aayush Vishwakarma",
    title: "Founder The Dream Company"
  }
];

export const testimonials = [
    {quote:"Website Devlopment",name:"",title:""},
    {quote:"ProductShoot",name:"",title:""},
    {quote:"APP DEVleopment",name:"",title:""},
    {quote:"Social Media Creatives",name:"",title:""},
    {quote:"Print Meadia",name:"",title:""},
    {quote:"Voice Over",name:"",title:""},
  ];

  export const navItems = [
    {
      name: "Home",
      link: "/",
      icon:<FaHome className="h-4 w-4 text-neutral-500 dark:text-white"></FaHome>
    },
    {
      name: "Services",
      link: "/#services",
      icon:<FaServicestack className="h-4 w-4 text-neutral-500 dark:text-white"></FaServicestack>
    },
    {
      name: "Contact",
      link: "/#footer",
      icon:<FaMobile className= "h-4 w-4 text-neutral-500 dark:text-white"></FaMobile>
    },
  ]

  
  export const gridItems = [
    {
      id: 1,
      title: "Website Development",
      description: "High-quality",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "App Development",
      description: "Android/IOS",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Product Shoot",
      description: "Video And Photo",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Voice Over",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Social Media Creatives",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/bg5.jpg",
    },
    {
      id: 7,
      title: "Print Media",
      description: "",
      className: "md:col-span-3 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/bg7.jpg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
   
  ];
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/Vijaypanahajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/Vijaypanahajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/Vijaypanahajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Vijaypanahajdin/iphone",
    },
  ];
  
    
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/instagram.svg",
      link:"https://www.instagram.com/vijyapana"
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];