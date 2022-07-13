import React, {useState} from "react";
import { Box } from "@mui/system";

import Excercises from "../components/Excercises";
import SearchExcercises from "../components/SearchExcercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    return ( 
        <Box>
            <HeroBanner />
            <SearchExcercises 
            setExcersises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}/>
            <Excercises
            etExcersises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}/>
        </Box>
     );
}
 
export default Home;