import { motion } from "framer-motion";
import { OurStoryType, SelectedPage } from "../../shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    BookOpenIcon,
} from "@heroicons/react/24/solid"
import HText from "../../shared/HText";

const ourstory: Array<OurStoryType> = [
    {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Modern Workshops",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti iusto quia! Nam, unde facere!"
    },
    {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Huge Variety of Services",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, unde facere! Laboriosam corrupti iusto quia!"
    },
    {
    icon: <BookOpenIcon className="h-6 w-6" />,
    title: "Professional Technical Advice",
    description: "Lorem ipsum dolor sit amet consen. Nam, unde facere consectetur adipisicing elit. Laboriosam corrupti iusto quia!"
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurStory = ({ setSelectedPage }: Props) => {
  return (<section id="ourstory" className="mx-auto min-h-full w-5/6 py-20">
     <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
    // switch on and off the navbar red color while scrolling
    onViewportEnter={() => setSelectedPage(SelectedPage.OurStory)}
    >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5"> 
           <HText>EXPECT EXCELLENCE</HText>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorem! Error tenetur eaque facilis culpa. Explicabo iusto dignissimos vero id?
           </p>
        </div>
        {/* OUR STORY */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
        {ourstory.map((ourstory: OurStoryType) => (
            <OurStory 
            key={ourstory.title}
            icon={ourstory.icon}
            title={ourstory.title}
            description={ourstory.description}
            setSelectedPage={setSelectedPage}
            />
        ))}
        </div>
    </motion.div>
    </section>
  )
}

export default OurStory