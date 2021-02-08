import { writable } from 'svelte/store';
export const global = {
    phone: '305.999.5595',
    address: '400 South Point Dr<br>Miami Beach, FL 33139',
    email: 'help@gohere.tech',
};
export const home = {
    title: 'goHere® | Mixed Reality Consultants | Augment Your Reality™',
    metaDesc:
        'Fueled by creativity. Driven by excellence. We are a creative technology agency specializing in Mixed Reality and Augmented Reality.',
    h1: 'Create',
    h1Sub: 'Solutions',
    sections: [
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Success.',
            p:
                '<b>Fueled by creativity. Driven by excellence.</b><br> We love creating unique, authentic, and memorable digital experiences that bring growth and prosperity.',
            sub: 'inciting inspiration',

            button: '',
            buttonHref: '/what',
            invert: true,
            color1: 'red',
            color2: 'purple',
        },

        {
            title: '',
            p:
                '<b>Technology designed for you.</b>  Our solutions are built to drive your business into the future. ',
            button: '',
            sub: '',
            buttonHref: '',
            clear: true,
            left: true,
        },
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Performance.',
            p:
                '<b>Data-driven. Business simplified.</b><br> We help you solve problems, grow, and streamline your business.',
            sub: 'masterminds',
            button: '',
            buttonHref: '/who',
            invert: true,

            color1: 'red',
            color2: 'purple',
        },
        {
            title: '',
            p: '',
            sub: 'Start Your Journey',
            button: "Let's Get Started",
            buttonHref: '/get-started',
            clear: true,
            color1: '#2BD9FF',
            color2: '#BF37A9',
        },
    ],
};
export const who = {
    title: 'About goHere® | Experts in Mixed Reality',
    metaDesc:
        'Team of innovative consultants and creators focused on Mixed Reality and Augmented Reality solutions for the Industry 4.0 era.',
    h1: 'Creative',
    h1Sub: 'Envisioneers',
    section: [
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Service.',
            p:
                '<b>Powerful Experiences. By Design.</b> <br> We’re a team of innovative consultants and creators with a passion for excellence, an eye for opportunity, and a love of service. Sharing our talents with others to make a positive impact is what drives us.',
            sub: 'nerd alert',
            button: 'Envision With Us!',
            buttonHref: 'cta',
            invert: true,
            color1: 'red',
            color2: 'purple',
        },
    ],

    cta: {
        head: "Let's Create Together",
        button: "Let's Go!",
    },
};
export const what = {
    title: 'goHere® | Mixed Reality | Augmented Reality',
    metaDesc:
        ' Lead the Industry 4.0 revolution with cutting edge technology. Looking to launch your company into the world of Mixed Reality? goHere®.',
    h1: 'Powerful',
    h1Sub: 'Outcomes',
    section: [
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Results',
            p:
                '<b>Technology that has you covered.</b><br> Build. Grow. Optimize. Impress. Solutions to drive business. We design and build custom technology solutions that bring structure, growth, and peace of mind.',
            sub: 'masterminds',
            button: '',
            buttonHref: '',
            invert: true,
        },
    ],
    cta: {
        head: 'Get The Most Out Of Your Business',
        button: 'Get Started',
    },
};
export const work = {
    title: 'goHere® Partners and UI/UX Portfolio',
    metaDesc:
        'We select partners we resonate with, bringing passion and inspiration to any project. View our user experience and customer experience examples here.',
    h1: 'The',
    h1Sub: 'Vault',
    section: [
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Partnership',
            p:
                'Whether you’re a startup, nonprofit, or a household brand, goHere has solutions for you. We select clients we <b>resonate</b> with, bringing <b>passion and inspiration</b> to any project.',
            sub: 'powerful',
            button: 'Become a Partner',
            buttonHref: 'cta',
            invert: true,
            color1: 'red',
            color2: 'purple',
        },
    ],
    cta: {
        head: 'Our Clients Love Us. <br>So Will You!',
        button: "Let's Go!",
    },
};
export const contact = {
    title: 'goHere® for Strategic Partnerships',
    metaDesc:
        'Discover the power of Mixed Reality applications for your enterprise. Prepare for the fourth industrial revolution. +1 (305) 999 5595',
    h1: 'Call',
    h1Sub: 'Today',
    section: [
        {
            title: 'We Want To<br>Hear From You!',
            p:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> and discover the power of creative solutions for <b>your next project</b>.',
            sub: 'lets go!',
            button: 'phone',
            buttonHref: 'tel:309.999.5595',
            invert: true,
        },
    ],
};
export const insights = {
    title: 'goHere® | Incredible Technology Insights',
    metaDesc:
        'goHere® to learn something new about Mixed Reality, Augmented Reality, and Ad Tech with our Insights.',
    h1: 'Incredible',
    h1Sub: 'Insights',
    section: [
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for the Latest',
            p: 'Reach out today and find out what goHere can do for you.',
            sub: 'Learn Something',
            button: "Let's Go",
            buttonHref: 'cta',
            invert: true,
            color1: 'red',
            color2: 'purple',
        },
    ],
    cta: {
        head: 'The best for the brightest.',
        button: 'REACH OUT',
    },
};

export const cta = {
    title: "Let's Create<br>Something Beautiful",
    p:
        'Reach out today and find out what <span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> can do for you!',
    sub: 'be creative',
    button: "Let's Go",
    buttonHref: 'cta',
    color1: '#2BD9FF',
    color2: '#BF37A9',
};

export const tags = [
    'mixed reality',
    'hololens 2',
    'brand equity',
    'virtual reality',
    'augmented reality',
    'web development',
    'ui/ux',
    'customer experience',
    'management consulting',
    'industry 4.0',
    'public relations',
    'ad tech',
    'extended reality',
    '3d assets',
    'system auditing',
    'hyperautomation',
    'creative solutions',
    'internet of things',
    'machine learning',
    'edge computing',
    'mobile first design',
    'technology solutions',
    'projection mapping',
];
