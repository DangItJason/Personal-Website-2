/**
 * Jason's Trait Data
 * This file contains all trait information organized by category
 * Edit this file to update traits without modifying HTML
 */

// Main trait data object - organized by categories
const traitData = {
    cognitiveTraits: {
        title: "Cognitive Traits",
        traits: [
            { name: "Critical Thinking", rating: "7/10", score: 70 },
            { name: "Technology Literacy", rating: "8/10", score: 80 },
            { name: "Problem-solving", rating: "8/10", score: 80 },
            { name: "Learning", rating: "4/10", score: 40 },
            { name: "Memory/retention", rating: "3/10", score: 30, note: "Can only recall information that's cemented" },
            { name: "Attention to detail", rating: "3/10", score: 30 },
            { name: "Planning", rating: "9/10", score: 90 },
            { name: "Creativity", rating: "8/10", score: 80 },
            { name: "Analytical Ability", rating: "9/10", score: 90 },
            { name: "Information Processing Speed", rating: "2.5/10", score: 25 },
            { name: "Logical Reasoning", rating: "6.5/10", score: 65 },
            { name: "Reflectiveness", rating: "9/10", score: 90 },
            { name: "Self-awareness", rating: "8/10", score: 80 },
            { name: "Strategic Thinking", rating: "8/10", score: 90, note: "Great at planning steps ahead, big picture ONLY with available information." }

        ]
    },
    emotionalTraits: {
        title: "Emotional Traits",
        traits: [
            { name: "Emotional Intelligence (Outward)", rating: "6/10", score: 60, note: "Good at understanding others, often does not act on it to make them feel better." },
            { name: "Emotional Resilience", rating: "8/10", score: 80, note: "< 24 hours to recover from stress. Jason is able to sleep it off." },
            { name: "Stress Tolerance", rating: "6/10", score: 60, note: "Can handle stress for an average amount of time before he reaches for vices." },
            { name: "Emotional Regulation", rating: "7/10", score: 70 },
            { name: "Gratitude", rating: "4/10", score: 40 }
        ]
    },
    interpersonalTraits: {
        title: "Interpersonal Traits",
        traits: [
            { name: "Compassionate", rating: "", score: 100 },
            { name: "Friendly", rating: "", score: 100 },
            { name: "Likeable", rating: "", score: 100 },
            { name: "Caring", rating: "", score: 100 },
            { name: "Leadership", rating: "7.5/10", score: 75, note: "Can inspire others to be better in their own way" },
            { name: "Small talk", rating: "6/10", score: 60 },
            { name: "Verbal Communication", rating: "5/10", score: 50 },
            { name: "Written Communication", rating: "7/10", score: 70 },
            { name: "Conflict Resolution", rating: "8/10", score: 80 },
            { name: "Negotiation", rating: "6.5/10", score: 65 },
            { name: "Active Listening", rating: "3/10", score: 30, note: "Dropoff in listening quality when disinterested, doesn't respect the person speaking or after 3 minutes." },
            { name: "Teamwork", rating: "5/10", score: 50 },
            { name: "Persuasiveness", rating: "8/10", score: 80 },
            { name: "Mentoring", rating: "4/10", score: 40 },
            { name: "Boundary Setting", rating: "5/10", score: 50, note: "Greatly improved since 2024" },
            { name: "Vulnerability", rating: "6/10", score: 60, note: "Only shows deep vulnerability when it's safe to do so, open to others in general" }
        ]
    },
    selfRegulationTraits: {
        title: "Self-Regulation Traits",
        traits: [
            { name: "Grit/Perseverance", rating: "7.5/10", score: 75, note: "High tolerance for pain and discomfort, can work through it." },
            { name: "Agency when locked in", rating: "10/10", score: 100 },
            { name: "Agency when not locked in", rating: "2/10", score: 20 },
            { name: "Patience", rating: "5/10", score: 50 },
            { name: "Impulse Control", rating: "3/10", score: 30, note: "Significant variation in impulse control, depends on engagement + impulse types." },
            { name: "Adaptability", rating: "9/10", score: 90 }
        ]
    },
    personalityDimensions: {
        title: "Personality Dimensions",
        traits: [
            { name: "Extraversion", rating: "5/10", score: 50, note: "Really it just depends on the who, when, and how" },
            { name: "Agreeableness", rating: "4/10", score: 40, note: "Opinionated on interested topics, indifferent in general" },
            { name: "Discipline", rating: "7/10", score: 70 },
            { name: "Goal-setting", rating: "8/10", score: 80 },
            { name: "Openness to Experience", rating: "", score: null, note: "Umbrella trait" },
            { name: "Optimism", rating: "10/10", score: 100 },
            { name: "Independence", rating: "10/10", score: 100 },
            { name: "Risk Tolerance", rating: "10/10", score: 100 },
            { name: "Assertiveness", rating: "5/10", score: 50, note: "Very conditional, depends on topic and audience" }
        ]
    },
    physicalAttributes: {
        title: "Physical Attributes",
        traits: [
            { name: "Cardio", rating: "3/10", score: 30 },
            { name: "Lifts", rating: "8/10", score: 80, note: "High performance in the gym per weight input" },
            { name: "Looks", rating: "7/10", score: null },
            { name: "Asthma", rating: "", score: null },
            { name: "Eczema", rating: "", score: null },
            { name: "Sleep Quality", rating: "8/10", score: 80 },
            { name: "Energy Levels", rating: "7/10", score: 70 },
            { name: "Nutrition Habits", rating: "8/10", score: 80 },
            { name: "Flexibility/Mobility", rating: "5/10", score: 50 }
        ]
    },
    workStyle: {
        title: "Work Style",
        traits: [
            { name: "Works in sprints", rating: "", score: null, note: "7-8 days on, 2 days off" },
            { name: "Difficult time getting into \"locked-in\" zone", rating: "", score: null },
            { name: "When in \"locked-in\" zone, extremely high output", rating: "", score: null },
            { name: "Hard time saying No to social events, drinking", rating: "", score: null },
            { name: "Self-sabotage", rating: "", score: null, note: "Very high" },
            { name: "Inconsistently dependable", rating: "", score: null },
            { name: "Poor at multi-tasking", rating: "", score: null },
            { name: "Poor at context-switching", rating: "", score: null }
        ]
    }
};

// Select traits for radar chart visualization
const radarChartTraits = [
    { name: "Technology Literacy", score: 8 },
    { name: "Planning", score: 9 },
    { name: "Adaptability", score: 9 },
    { name: "Problem-solving", score: 8 },
    { name: "Creativity", score: 8 },
    { name: "Grit/Perseverance", score: 8.5 },
    { name: "Emotional Resilience", score: 8 },
    { name: "Optimism", score: 10 },
    { name: "Independence", score: 10 },
    { name: "Reflectiveness", score: 9 }
]; 