
export const snowData = {
  "lastUpdated": "2024-10-29T08:00:00Z",
  "plowingStatus": {
    "anchorage": { 
      "status": "Completed", 
      "details": "All primary and secondary routes have been cleared. Crews are on standby for new snowfall." 
    },
    "fairbanks": { 
      "status": "In Progress", 
      "details": "Crews are currently working on residential streets in the North Pole area. Main arteries are clear. Expected completion by 8 PM tonight." 
    },
    "juneau": { 
      "status": "Delayed", 
      "details": "Heavy, wet snowfall overnight has delayed operations. Priority is on emergency routes and major roads. Expect significant delays on side streets." 
    },
    "wasilla": {
        "status": "In Progress",
        "details": "Plowing is 75% complete for major roads. Residential areas will be addressed starting tomorrow morning."
    }
  },
  "schoolClosures": [
    { 
      "district": "Anchorage School District", 
      "status": "Open",
      "notes": "Buses may run a few minutes behind schedule due to slick spots."
    },
    { 
      "district": "Fairbanks North Star Borough School District", 
      "status": "Closed",
      "notes": "All schools and district offices are closed today due to hazardous road conditions."
    },
    { 
      "district": "Juneau School District", 
      "status": "2-hour delay",
      "notes": "All schools will start 2 hours later than their normal time. Morning pre-K is canceled."
    },
    {
        "district": "Mat-Su Borough School District",
        "status": "Remote Learning Day",
        "notes": "Due to conditions in Palmer and Wasilla, all students will shift to remote learning."
    }
  ],
  "roadClosures": [
    { 
      "road": "Seward Highway, Mile 75-90 (Turnagain Pass)", 
      "status": "Closed", 
      "reason": "Avalanche control work in progress. Estimated reopening at 12:00 PM.",
      "detour": "No detour available."
    },
    { 
      "road": "Dalton Highway", 
      "status": "Open - Chains Required", 
      "reason": "Icy conditions and blowing snow. Chains are required for all vehicles over 10,000 lbs GVW.",
      "detour": "Not applicable."
    },
    {
        "road": "Hatcher Pass Road",
        "status": "Closed for the season",
        "reason": "Seasonal winter closure.",
        "detour": "Not applicable."
    }
  ]
};
