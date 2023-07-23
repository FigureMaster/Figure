import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { motion } from "framer-motion";

const Main = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header></Header>
            <Sidebar></Sidebar>
        </motion.div>
    );
};

export default Main;