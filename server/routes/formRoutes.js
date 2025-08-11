// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const StrongestSubject = require('../models/StrongestSubject');
const Passion = require('../models/Passion');
const Hobbies = require('../models/Hobbies');
const InterestSubject = require('../models/InterestSubject');
const Electives = require('../models/Electives');
const Discipline = require('../models/Discipline');
const Skills = require('../models/Skills');

router.post('/get-suggestions', async (req, res) => {
  const { strongest=[], interested=[], passion=[], hobby=[], elective='', discipline='', skills=[] } = req.body;
  //console.log('Backend received:', req.body);

  try {
    let suggestions = [];

    const strongestData = await StrongestSubject.find({ subject: { $in: strongest } });
    const interestData = await InterestSubject.find({ subject: { $in: interested } });
    const passionData = await Passion.find({ passion: { $in: passion } });
    const hobbyData = await Hobbies.find({ hobby: { $in: hobby } });
    const electiveData =elective ? await Electives.findOne({ elective: elective }) : null;
    const disciplineData =discipline ? await Discipline.findOne({ discipline: discipline }) : null;
    const skillsData =await Skills.find({ skill: {$in: skills } });


    // Aggregate all suggestions
    strongestData.forEach(item => suggestions.push(...item.suggestions));
    interestData.forEach(item => suggestions.push(...item.suggestions));
    passionData.forEach(item => suggestions.push(...item.suggestions));
    hobbyData.forEach(item => suggestions.push(...item.suggestions));
    if (electiveData && electiveData.suggestions) {
      suggestions.push(...electiveData.suggestions);
    }
    if (disciplineData && disciplineData.suggestions) {
      suggestions.push(...disciplineData.suggestions);
    }
    skillsData.forEach(item => suggestions.push(...item.suggestions));

    // Remove duplicates
    const uniqueSuggestions = [...new Set(suggestions.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));
    //const uniqueSuggestions = [...new Set(suggestions)];

    res.status(200).json({ suggestions: uniqueSuggestions });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching suggestions' });
  }
});

module.exports = router;