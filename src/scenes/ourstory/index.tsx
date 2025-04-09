import { motion } from "framer-motion";
import { OurStoryType, SelectedPage } from "../../shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    BookOpenIcon,
} from "@heroicons/react/24/solid"
import HText from "../../shared/HText";
import OurStoryPageGraphic from "assets/OurStoryPageGraphic.png";
import ActionButton from "../../shared/ActionButton";
// import OurStory from "./OurStory";

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

const container = {
    hidden: [],
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

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
        <motion.div 
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}
        > 
           <HText>EXPECT EXCELLENCE</HText>
           <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorem! Error tenetur eaque facilis culpa. Explicabo iusto dignissimos vero id?
           </p>
        </motion.div>
        {/* OUR STORY */}
        <motion.div 
        className="mt-5 items-center justify-between gap-8 md:flex" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
        {ourstory.map((ourstory: OurStoryType) => (
            <OurStory 
            key={ourstory.title}
            icon={ourstory.icon}
            title={ourstory.title}
            description={ourstory.description}
            setSelectedPage={setSelectedPage}
            />
        ))}
        </motion.div>
     {/* GRAPHICS AND DESCRIPTION */}
     <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={OurStoryPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    THOUSANDS SATISFIED CLIENTS SINCE{" "}
                    <span className="text-primary-500">2025</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurStory