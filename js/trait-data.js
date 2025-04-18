/**
 * Jason's Trait Data
 * This file contains all trait information organized by category
 * Edit this file to update traits without modifying HTML
 */

// Main trait data object - organized by categories
const traitData = {
    cognitiveTraits: {
        title: "🧠 Cognitive & Psychological Traits",
        traits: [
            { name: "Critical Thinking", rating: "8/10", score: 80, note: "Jason applies strong logic and often dissects ideas from first principles. He questions assumptions and seeks truth over popularity." },
            { name: "Technology Literacy", rating: "8/10", score: 80, note: "Jason is confident and quick to pick up new digital tools. He intuitively connects systems and understands how tech can drive leverage." },
            { name: "Problem-solving", rating: "8.5/10", score: 85, note: "Jason is inventive and calm in chaos. He thrives under pressure and often reframes problems in creative or contrarian ways." },
            { name: "Learning Agility", rating: "6.5/10", score: 65, note: "Jason absorbs information best through action, conversation, and emotional resonance. Abstract or passive learning formats are less effective for him." },
            { name: "Memory/retention", rating: "4/10", score: 40, note: "Jason has a selective memory—he retains information that is emotionally charged or purpose-driven but forgets arbitrary details easily." },
            { name: "Attention to detail", rating: "4.5/10", score: 45, note: "Jason focuses more on frameworks and meaning than minutiae. When emotionally or situationally activated, his detail orientation improves." },
            { name: "Planning", rating: "9/10", score: 90, note: "Jason thrives in structured thinking. He is a natural at breaking large goals into executable steps and forecasting potential outcomes." },
            { name: "Visionary Thinking", rating: "8.5/10", score: 85, note: "Jason frequently thinks in futures. He intuitively identifies patterns and long-term possibilities, often imagining systems before they exist." },
            { name: "Creativity", rating: "8.5/10", score: 85, note: "Jason regularly generates original ideas and reimagines the familiar. His creativity spans strategy, communication, and systems design." },
            { name: "Reflectiveness", rating: "9/10", score: 90, note: "Jason consistently reflects on his behavior, thoughts, and patterns." },
            { name: "Inward Reflection", rating: "9/10", score: 90, note: "Jason frequently replays past conversations or events, often analyzing his own performance or social positioning." },
            { name: "Self-Awareness", rating: "9.5/10", score: 95, note: "Jason consistently reflects on his behavior, thoughts, and patterns." },
            { name: "Adaptability", rating: "9/10", score: 90, note: "Jason responds quickly to change and often views disruption as an opportunity for reinvention or pivoting strategy." },
            { name: "Emotional Intelligence", rating: "8/10", score: 80, note: "Jason reads people well, understands emotional subtext, and adapts his tone to context. He is deeply attuned, sometimes overly so." },
            { name: "Stress Management", rating: "6/10", score: 60, note: "Jason handles stress well externally but often suppresses emotional signals until burnout or disconnection sets in." },
            { name: "Emotional Resilience", rating: "8/10", score: 80, note: "Jason bounces back from emotional challenges and maintains equilibrium in challenging situations." },
            { name: "Patience", rating: "4.5/10", score: 45, note: "Jason is moderately patient in low-stakes situations but becomes restless when faced with inefficiency, uncertainty, or emotional friction." },
            { name: "Grit/Perseverance", rating: "8.5/10", score: 85, note: "Jason consistently demonstrates tenacity when emotionally locked into a goal. He is capable of pushing through extended discomfort when meaning is present." },
            { name: "Self-Trust", rating: "5.5/10", score: 55, note: "Jason occasionally questions his instincts and choices, especially when emotionally off-center. He can loop in indecision." },
            { name: "Meaning Orientation", rating: "9.5/10", score: 95, note: "Jason's internal compass is purpose. When disconnected from meaning, he drifts. When aligned, he thrives." }
        ]
    },
    interpersonalTraits: {
        title: "👥 Interpersonal Traits",
        traits: [
            { name: "Leadership", rating: "7.5/10", score: 75, note: "Jason is a strategic and thoughtful leader, though he hasn't consistently exercised this muscle recently. He leads best when a cause or purpose fuels him." },
            { name: "Small talk", rating: "6/10", score: 60, note: "Jason can navigate light social interactions with ease, but finds them draining or purposeless unless they lead to something deeper or more meaningful." },
            { name: "Communication Competence", rating: "", score: null, note: "Umbrella category for verbal and written communication" },
            { name: "Verbal Communication", rating: "5.5/10", score: 55, note: "Jason communicates clearly but can second-guess his phrasing or impact. He sometimes over-corrects for how he's being perceived." },
            { name: "Written Communication", rating: "7.5/10", score: 75, note: "Jason writes with clarity, nuance, and emotional intelligence. His written communication often reveals a thoughtful, internal world." },
            { name: "Conflict Resolution", rating: "8/10", score: 80, note: "Jason de-escalates naturally and uses empathy plus logic. While sometimes avoidant of early tension, he resolves conflict with maturity when engaged." },
            { name: "Negotiation", rating: "6.5/10", score: 65, note: "Jason is fair and self-aware in negotiations. While capable, he occasionally over-considers the emotional or social consequences of pressing too hard." },
            { name: "Active Listening", rating: "3/10", score: 30 },
            { name: "Teamwork", rating: "5/10", score: 50 },
            { name: "Persuasiveness", rating: "8/10", score: 80 },
            { name: "Mentoring", rating: "4/10", score: 40 }
        ]
    },
    selfRegulationTraits: {
        title: "🎯 Self-Regulation Traits",
        traits: [
            { name: "Agency when locked in", rating: "10/10", score: 100, note: "Jason is unstoppable when focused. In this mode, he is productive, resourceful, and virtually immune to distractions." },
            { name: "Agency when not locked in", rating: "2.5/10", score: 25, note: "Jason struggles with inertia when unclear or emotionally misaligned with a task. He becomes avoidant, distracted, or fatigued." },
            { name: "Self-Regulation Variability", rating: "", score: null, note: "Varies based on engagement and emotional alignment." },
            { name: "Impulse Control", rating: "5/10", score: 50, note: "Jason can be pulled toward instant gratification—particularly with social events, indulgences, or distractions." },
            { name: "Independence", rating: "10/10", score: 100 },
            { name: "FOMO Sensitivity", rating: "Moderate", score: 60, note: "Jason is susceptible to FOMO, especially in social or experiential contexts. He seeks novelty and significance in new moments." },
            { name: "Delayed Execution", rating: "", score: null, note: "Jason sometimes over-processes choices, leading to inaction or delayed momentum. This is often tied to uncertainty or emotional static." }
        ]
    },
    physicalAttributes: {
        title: "🧍‍♂️ Physical / Lifestyle Traits",
        traits: [
            { name: "Cardio", rating: "Below Average", score: null, note: "Jason likely deprioritizes cardio-focused workouts, though he could improve with structure and competitive framing." },
            { name: "Lifts / Strength", rating: "Above Average", score: null, note: "Jason has good physical strength and shows discipline with resistance training." },
            { name: "Looks / Presentation", rating: "Above Average", score: null, note: "Jason presents himself with intentionality and self-respect. He is aware of aesthetics and its effect on perception." },
            { name: "Asthma", rating: "", score: null, note: "Health factor - may be stress-responsive or environmental" },
            { name: "Eczema", rating: "", score: null, note: "Health factor - may be stress-responsive or environmental" },
            { name: "Sleep Quality", rating: "8/10", score: 80 },
            { name: "Energy Levels", rating: "7/10", score: 70 },
            { name: "Nutrition Habits", rating: "8/10", score: 80 },
            { name: "Flexibility/Mobility", rating: "5/10", score: 50 }
        ]
    },
    workStyle: {
        title: "🔁 Behavioral Patterns & Identity Drivers",
        traits: [
            { name: "Work Rhythms", rating: "", score: null, note: "Jason works in concentrated sprints—7–8 days of high focus, followed by 1–2 days of reset or disengagement." },
            { name: "Locked-In Flow Entry", rating: "", score: null, note: "Jason needs clarity, alignment, and sometimes pressure to enter a flow state. Once in it, his output is elite." },
            { name: "Social Boundary Management", rating: "", score: null, note: "Jason struggles to say no to social invitations or drinking. He values connection but may compromise his priorities." },
            { name: "Self-Sabotage", rating: "High", score: null, note: "Jason's default tendency toward self-sabotage stems from perfectionism, a fear of failure, or unconscious loyalty to limitation." },
            { name: "Dependability", rating: "Inconsistent", score: null, note: "Jason is highly dependable when emotionally aligned or externally accountable. He is less consistent when self-led but emotionally uncentered." },
            { name: "Performer Identity", rating: "", score: null, note: "Jason often wants to be impressive—socially, intellectually, or physically. He values being seen as capable or interesting." }
        ]
    }
};

// Select traits for radar chart visualization
const radarChartTraits = [
    { name: "Technology Literacy", score: 8 },
    { name: "Planning", score: 9 },
    { name: "Adaptability", score: 9 },
    { name: "Problem-solving", score: 8.5 },
    { name: "Creativity", score: 8.5 },
    { name: "Grit/Perseverance", score: 8.5 },
    { name: "Emotional Resilience", score: 8 },
    { name: "Visionary Thinking", score: 8.5 },
    { name: "Self-Awareness", score: 9.5 },
    { name: "Meaning Orientation", score: 9.5 }
]; 