import { SelectedPage, ServiceType } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Service from "./Service";

const classes: Array<ServiceType> = [
    {
        name: "Timber preservative testing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1;
    },
    {
        name: "Timber restoration",
        image: image2;
    },
    {
        name: "Wood coatings",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3;
    },
    {
        name: "Trucking the logs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
    },
    {
        name: "Flooring and Paneling",
        image: image5,
    },
    {
        name: "Milling rough sawn boards",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
    return (
        <section id="services" className="w-full bg-primary-100 py-40">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
                <motion.div
                 className="mx-auto w-5/6"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                >
                <div className="md:w-3/5">
                    <HText>OUR SERVICES</HText>
                    <p className="py-5">
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                    enim mattis odio in risus nunc.
                    </p>
                </div>
            </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ServiceType, index) => (
                    <Service
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                    ))}
                </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default Services;
