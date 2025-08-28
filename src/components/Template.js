//Store our story and its title

export const storyTemplates = {
  Mystery: {
    title: "The Hidden Key",
    structure: [
      {        content:
          "In a quiet town, a strange event at the old library sparks curiosity."
      },
      {
        content:
          "Detective Anaya discovers a hidden key that could unlock dangerous secrets."
      },
      {        content:
          "As suspects multiply, trust is broken, and tension rises in the town."
      },
      {      
        content:
          "Finally, the truth is revealed, and the mystery changes the town forever."
      }
    ]
  },SciFi: {
                title: "Nexus of Time",
                structure: [
                    {
                        content: "Scientists at the International Space Institute detect anomalous energy readings from a distant galaxy."
                    },
                    {
                        content: "A crew of specialists is sent through a newly developed wormhole to investigate the source."
                    },
                    {
                        content: "They discover an advanced civilization with technology that challenges understanding of physics and time."
                    },
                    {
                        content: "A faction within the alien civilization wants to use the technology to reshape the universe, threatening existence."
                    },
                    {
                        content: "The crew allies with peaceful aliens to prevent catastrophe, gaining new perspectives on humanity's place in the cosmos."
                    }
                ]
            },
  Fantasy: {
                title: "The Quest for the Crystal of Light",
                structure: [
                    {
                        content: "In the mystical land of Eldoria, a young apprentice discovers an ancient prophecy about the Crystal of Light that can save the kingdom from eternal darkness."
                    },
                    {
                        content: "The wise wizard Merlyn appears and reveals that the protagonist is the chosen one who must embark on a quest to find the crystal."
                    },
                    {
                        content: "The hero sets out with a loyal companion, encountering magical creatures and overcoming obstacles in the Enchanted Forest."
                    },
                    {
                        content: "After solving the riddle of the Ancient Guardians, the hero faces the Dark Sorcerer in a battle of magic and wits."
                    },
                    {
                        content: "The Crystal of Light is restored, bringing peace to Eldoria. The hero returns home transformed by the journey."
                    }
                ]
            },
  Romance: {
    title: "Unexpected Love in Paris",
    structure: [
      {
        content:
          "Two strangers from different worlds accidentally meet at a quaint Parisian café during a rainstorm."
      },
      {
        content:
          "They discover shared interests and values during a day spent exploring Paris together."
      },
      {
        
        content:
          "External circumstances and personal insecurities threaten to keep them apart."
      },
      {
       
        content:
          "Both characters realize that their connection is worth fighting for despite the obstacles."
      },
      {
        
        content:
          "They overcome the challenges and declare their love, promising to build a future together."
      }
    ]
  }, Horror: {
                title: "Whispers in the Dark",
                structure: [
                    {
                        content: "A family moves into an isolated Victorian house with a mysterious history, unaware of its dark secrets."
                    },
                    {
                        content: "Unexplained events begin happening - objects moving, whispers in empty rooms, and nightmares that feel real."
                    },
                    {
                        content: "The protagonist discovers the house's history through old journals and newspaper clippings about missing persons."
                    },
                    {
                        content: "The malevolent spirit is revealed, and the family must perform a ritual to free the trapped souls."
                    },
                    {
                        content: "The house is cleansed, but not without cost, leaving the survivors forever changed by their experience."
                    }
                ]
            },

  Comedy: {
    title: "The Great Cooking Disaster",
    structure: [
      {
        
        content: "Raj accidentally signs up for a citywide cooking competition."
      },
      {
       
        content: "He has never cooked before, and chaos unfolds in the kitchen."
      },
      {
       
        content:
          "Pots boil over, ingredients fly, and the judges are left in shock."
      },
      {
       
        content:
          "Everyone bursts into laughter, and Raj becomes the most loved contestant of the show."
      }
    ]
  }
};

export const genreBackgrounds = {
  Mystery: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794')",
  Horror: "url('https://wallpapers.com/images/hd/a-spooky-haunted-mansion-surrounded-by-glowing-jack-o-lanterns-on-a-misty-halloween-night-ivegnndw7q72hylv.jpg')",
  Fantasy: "url('https://cdn.pixabay.com/photo/2023/08/21/18/39/ai-generated-8204875_640.jpg')",
  Romance: "url('https://wallpapers.com/images/hd/paris-background-7zjejw3kv6x9buav.jpg')",
  Comedy: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
  SciFi:"url('https://images7.alphacoders.com/134/thumbbig-1346971.webp')"
};

export default {storyTemplates,genreBackgrounds};