interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Store App Project',
    description: ` REACT.JS with StoreApp is an e-commerce application where users can 
    view various products and comment on these products. The project offers to provide a summarized 
    e-commerce experience including product management and user feedback. `,
    imgSrc: '/static/images/storeapp.jpg',
    href: 'https://github.com/osmantemel/storeapp-project-frontend',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Library App Project',
    description: `ASP.NET MVC .This project includes a library management system. Users can view, add, update and delete books. Admin users have the authority to manage books. `,
    imgSrc: '/static/images/library.webp',
    href: 'https://github.com/osmantemel/library-App',
  },
  {
    title: 'Android App Malicious Anlysis',
    description: `Mobil UYgulamalarda zafiyet analizi hakkında yapay zeka destekli web uygulaması | Artificial intelligence supported web application about vulnerability analysis in Mobile Applications`,
    imgSrc: '/static/images/malicious.webp',
    href: 'https://github.com/osmantemel/Android-App-Malicious-anlysis',
  },
  {
    title: ' Artificial İntelligence',
    description: `Basic Exercises on Machine Learning and Deep Learning | Makine Öğrenimi ve Derin Öğrenme İle ilgili Temel Alıştırmalar `,
    imgSrc: '/static/images/ai.jpeg',
    href: 'https://github.com/osmantemel/Artificial-intelligence',
  },
  {
    title: 'Pose App AI',
    description: `This project involves real-time pose estimation using TensorFlow.js 
    and the Teachable Machine Pose model. Using the webcam, this application allows the user's 
    body movements to be recorded daily, reflecting the display of predictions in the order of poses, as 
    well as controlling a moving box with the arrow keys.`,
    imgSrc: '/static/images/yapay-zeka.jpg',
    href: 'https://github.com/osmantemel/Pose-App-AI',
  },
  {
    title: 'Horse Race',
    description: `This C# project includes a simple gaming game developed via Windows Forms. Players can watch an exciting race by launching their favorite attacks and races.`,
    imgSrc: '/static/images/horse.webp',
    href: 'https://github.com/osmantemel/Horse-Race/tree/main/deneme/deneme',
  },
  {
    title: 'FOR MORE...',
    description: ``,
    imgSrc: '/static/images/github.webp',
    href: 'https://github.com/osmantemel',
  },
]

export default projectsData
