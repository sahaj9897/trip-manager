import { generateTripPlan } from "../ai/agents/planner.js";
import { tripGraph } from "../ai/graphs/trip.graph.js";
import { llm } from "../config/gemini.js";

const generateTrip = async (req, res) => {
    try {
        if(!req.body.prompt){
            return res.status(500).json({message:"body data is missing"});
        }
        console.log(req.body.prompt);
        const result = await tripGraph.invoke({
            input: req.body.prompt,
        })
        
       
        return res.status(200).json({
            presentation:result.presentation
        });
    } catch (error) {
        console.log("error while generating trip ", error);
        return res.status(500).json({ message: "server error" });
    }
}

export { generateTrip };