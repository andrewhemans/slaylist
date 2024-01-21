const data = {
  descriptiveWords: [
    {
      word: "modern",
      description: "Characteristic of the present or recent times.",
    },
    {
      word: "energetic",
      description: "Showing or involving great activity or vitality.",
    },
    { word: "vibrant", description: "Full of energy and life." },
    {
      word: "elegant",
      description: "Graceful and stylish in appearance or manner.",
    },
    {
      word: "sophisticated",
      description: "Having a refined knowledge of the ways of the world.",
    },
    {
      word: "rustic",
      description:
        "Having a simplicity and charm that is considered typical of the countryside.",
    },
    {
      word: "minimalist",
      description: "Employing minimal designs, elements, or themes.",
    },
    {
      word: "vintage",
      description: "Denoting something from the past of high quality.",
    },
    {
      word: "sleek",
      description: "Smooth and glossy; having a streamlined, efficient design.",
    },
    {
      word: "quirky",
      description: "Characterized by peculiar or unexpected traits.",
    },
    {
      word: "innovative",
      description: "Featuring new methods; advanced and original.",
    },
    {
      word: "nostalgic",
      description: "Longing for or reminiscent of the past.",
    },
    {
      word: "eclectic",
      description:
        "Deriving ideas, style, or taste from a broad and diverse range of sources.",
    },
    {
      word: "luxurious",
      description:
        "Extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense.",
    },
    {
      word: "dynamic",
      description: "Characterized by constant change, activity, or progress.",
    },
    { word: "serene", description: "Calm, peaceful, and untroubled." },
    {
      word: "whimsical",
      description:
        "Playfully quaint or fanciful, especially in an appealing and amusing way.",
    },
    { word: "robust", description: "Strong and healthy; vigorous." },
    {
      word: "gritty",
      description: "Showing courage and resolve; strong-willed or determined.",
    },
    { word: "ambient", description: "Creating a relaxing atmosphere." },
    { word: "opulent", description: "Ostentatiously luxurious and wealthy." },
    {
      word: "cosmopolitan",
      description:
        "Familiar with and at ease in many different countries and cultures.",
    },
    { word: "baroque", description: "Highly ornate and extravagant in style." },
    { word: "zen", description: "Relaxed and peaceful." },
    {
      word: "bohemian",
      description: "Socially unconventional in an artistic way.",
    },
    { word: "chic", description: "Elegantly and stylishly fashionable." },
    {
      word: "retro",
      description: "Imitative of a style or fashion from the recent past.",
    },
    {
      word: "bold",
      description:
        "Showing an ability to take risks; confident and courageous.",
    },
    {
      word: "exotic",
      description:
        "Originating in or characteristic of a distant foreign country.",
    },
    { word: "intense", description: "Of extreme force, degree, or strength." },
    {
      word: "timeless",
      description: "Not affected by the passage of time or changes in fashion.",
    },
    { word: "airy", description: "Spacious, well-lit, and well-ventilated." },
    {
      word: "surreal",
      description: "Having the qualities of surrealism; bizarre.",
    },
    { word: "cozy", description: "Comfortable and warm." },
    { word: "edgy", description: "Tense, nervous, or irritable." },
    { word: "tranquil", description: "Free from disturbance; calm." },
    {
      word: "ornate",
      description:
        "Made in an intricate shape or decorated with complex patterns.",
    },
    {
      word: "rugged",
      description: "Having or requiring toughness and determination.",
    },
    {
      word: "pastoral",
      description: "Relating to the keeping or grazing of sheep or cattle.",
    },
    {
      word: "avant-garde",
      description: "Favoring or introducing experimental or unusual ideas.",
    },
    {
      word: "industrial",
      description: "Relating to or characterized by industry.",
    },
    { word: "trendy", description: "Very fashionable or up to date." },
    {
      word: "luminous",
      description: "Full of or shedding light; bright or shining.",
    },
    { word: "plush", description: "Richly luxurious and expensive." },
    {
      word: "mystical",
      description:
        "Having a spiritual meaning or reality that is neither apparent",
    },
  ],

  emotions: [
    { feeling: "chill", description: "Calm and relaxed." },
    { feeling: "erratic", description: "Unpredictable, inconsistent." },
    { feeling: "bummed", description: "Disappointed, downhearted." },
    { feeling: "psyched", description: "Excited, enthusiastic." },
    { feeling: "joyful", description: "Full of happiness." },
    { feeling: "anxious", description: "Worried, nervous." },
    { feeling: "melancholic", description: "Sad, gloomy." },
    { feeling: "energetic", description: "Active, lively." },
    { feeling: "serene", description: "Calm, peaceful." },
    { feeling: "confused", description: "Perplexed, unclear." },
    { feeling: "optimistic", description: "Hopeful, positive." },
    { feeling: "pessimistic", description: "Seeing the worst, negative." },
    { feeling: "angry", description: "Irritated, furious." },
    { feeling: "content", description: "Satisfied, pleased." },
    { feeling: "stressed", description: "Feeling strain or pressure." },
    { feeling: "relieved", description: "Free from anxiety." },
    { feeling: "overwhelmed", description: "Overpowered emotionally." },
    { feeling: "excited", description: "Very enthusiastic, eager." },
    { feeling: "sad", description: "Unhappy, sorrowful." },
    { feeling: "happy", description: "Feeling pleasure, joy." },
    { feeling: "bored", description: "Uninterested, weary." },
    { feeling: "lonely", description: "Feeling alone, isolated." },
    { feeling: "nervous", description: "Anxious, apprehensive." },
    { feeling: "hopeful", description: "Optimistic, expecting the best." },
    { feeling: "apathetic", description: "Indifferent, unresponsive." },
    { feeling: "inspired", description: "Stimulated to do something." },
    { feeling: "guilty", description: "Feeling responsible for a fault." },
    { feeling: "jealous", description: "Envious, resentful." },
    { feeling: "disgusted", description: "Revulsion, strong dislike." },
    { feeling: "fearful", description: "Scared, frightened." },
    { feeling: "grateful", description: "Thankful, showing appreciation." },
    { feeling: "proud", description: "Feeling self-respect or pleasure." },
    { feeling: "insecure", description: "Lacking confidence, unsure." },
    { feeling: "humiliated", description: "Ashamed, embarrassed." },
    { feeling: "determined", description: "Resolute, firmly decided." },
    { feeling: "amused", description: "Entertained, finding humor." },
    { feeling: "curious", description: "Eager to know or learn." },
    { feeling: "confident", description: "Self-assured, certain." },
    { feeling: "shocked", description: "Surprised, startled." },
    { feeling: "loved", description: "Feeling deep affection." },
    { feeling: "passionate", description: "Having strong emotions." },
    { feeling: "betrayed", description: "Deceived, let down." },
    { feeling: "hopeless", description: "Feeling despair, no expectation." },
    { feeling: "refreshed", description: "Revived, rejuvenated." },
    { feeling: "skeptical", description: "Doubtful, questioning." },
    { feeling: "embarrassed", description: "Feeling shame, awkward." },
    { feeling: "enraged", description: "Very angry, furious." },
    { feeling: "contented", description: "Satisfied, at ease." },
    { feeling: "nostalgic", description: "Longing for the past." },
    {
      feeling: "mischievous",
      description: "Playfully naughty or troublesome.",
    },
    { feeling: "devastated", description: "Overwhelmed with shock or grief." },
    { feeling: "euphoric", description: "Intensely happy or confident." },
    { feeling: "compassionate", description: "Feeling sympathy and concern." },
    {
      feeling: "indignant",
      description: "Feeling anger at perceived injustice.",
    },
  ],
  slangTerms: [
    {
      term: "cringe",
      description: "Causing feelings of embarrassment or awkwardness.",
    },
    { term: "sus", description: "Short for 'suspicious' or 'suspect'." },
    {
      term: "based",
      description: "Showing confidence in oneself, being straightforward.",
    },
    { term: "lit", description: "Exciting, amazing, or fun." },
    {
      term: "ghosting",
      description: "Cutting off all communication without explanation.",
    },
    { term: "salty", description: "Being upset, angry, or bitter." },
    { term: "extra", description: "Over the top, excessive." },
    {
      term: "shade",
      description: "Subtle disrespect or disdain toward someone.",
    },
    {
      term: "lowkey",
      description: "To a small extent, discreetly, or secretly.",
    },
    {
      term: "highkey",
      description: "To a large extent, openly, or obviously.",
    },
    { term: "flex", description: "To show off." },
    { term: "no cap", description: "No lie, or for real." },
    {
      term: "thirsty",
      description: "Desperately wanting attention or approval.",
    },
    {
      term: "clap back",
      description: "A quick, witty, or sharp response or comeback.",
    },
    { term: "savage", description: "Brutally honest, lacking a filter." },
    { term: "fire", description: "Very cool or trendy." },
    {
      term: "yeet",
      description:
        "An expression of excitement or approval, or to throw something.",
    },
    { term: "woke", description: "Being aware of social injustices." },
    { term: "stan", description: "An overzealous or obsessive fan." },
    {
      term: "ship",
      description:
        "Supporting a romantic relationship between characters or people.",
    },
    { term: "snatched", description: "Looking good or fashionable." },
    {
      term: "finesse",
      description: "To skillfully achieve something or to steal.",
    },
    { term: "boujee", description: "Luxurious or high-class." },
    {
      term: "vibe",
      description: "A feeling or atmosphere someone or something conveys.",
    },
    {
      term: "sksksk",
      description: "An expression of laughter, awkwardness, or excitement.",
    },
    {
      term: "simp",
      description:
        "Someone who is overly attentive or submissive to someone they're attracted to.",
    },
    {
      term: "bet",
      description: "An expression of agreement or understanding.",
    },
    {
      term: "receipts",
      description:
        "Proof or evidence of something, often in a conversation or argument.",
    },
    {
      term: "big yikes",
      description: "An expression of significant shock or embarrassment.",
    },
    {
      term: "glow up",
      description:
        "A transformation or improvement in appearance and/or character.",
    },
    {
      term: "cancel",
      description:
        "To stop supporting or boycotting someone, often a public figure.",
    },
    {
      term: "slay",
      description:
        "To do something really well, especially in fashion and performance.",
    },
    {
      term: "spill the tea",
      description: "To share gossip or the real truth about something.",
    },
    { term: "ratchet", description: "Crude, loud, or obnoxious." },
    { term: "squad", description: "A group of friends." },
    { term: "on fleek", description: "Perfectly styled or groomed." },
    {
      term: "turnt",
      description: "Excited or hyped up, especially at a party.",
    },
    { term: "gucci", description: "Good, cool, or going well." },
    { term: "mood", description: "A relatable sentiment or situation." },
    { term: "goat", description: "Greatest of All Time." },
    {
      term: "lituation",
      description: "A situation that's very fun or exciting.",
    },
    { term: "finna", description: "Going to or intending to." },
    { term: "cap", description: "To lie or exaggerate." },
    { term: "sus", description: "Suspicious or untrustworthy." },
    {
      term: "periodt",
      description:
        "A way to end a statement with emphasis, indicating no further discussion.",
    },
    { term: "drip", description: "A cool, sexy, or trendy sense of style." },
    {
      term: "snack",
      description: "Someone who looks exceptionally attractive.",
    },
    { term: "beat", description: "To apply makeup flawlessly." },
    { term: "shook", description: "Shocked or surprised." },
    {
      term: "hypebeast",
      description: "Someone who follows trends in fashion obsessively.",
    },
    {
      term: "throw shade",
      description: "To subtly express contempt or disdain for someone.",
    },
    { term: "dead", description: "Overwhelmed by amusement or laughter." },
    {
      term: "full send",
      description:
        "To do something with full commitment and without hesitation.",
    },
    {
      term: "bussy",
      description: "",
    },
    {
      term: "gock",
      description: "",
    },
    {
      term: "frotting",
      description: "",
    },
    {
      term: "delulu",
      description: "delusional",
    },
    {
      term: "silly-goose",
      description: "",
    },
    {
      term: "designer-pussy",
      description: "",
    },
    {
      term: "bussy",
      description: "",
    },
  ],
  suffixes: [
    { suffix: "-wave", examples: ["New-wave", "Synthwave", "Darkwave"] },
    { suffix: "-core", examples: ["Metalcore", "Hardcore", "Emocore"] },
    { suffix: "-pop", examples: ["Synthpop", "Electropop", "Chamber pop"] },
    { suffix: "-rock", examples: ["Art-rock", "Punk rock", "Folk rock"] },
    { suffix: "-step", examples: ["Dubstep", "Brostep", "Chillstep"] },
    { suffix: "-beat", examples: ["Beat", "Merseybeat", "Big beat"] },
    {
      suffix: "-tronica",
      examples: ["Electronica", "Ambientronica", "Folktronica"],
    },
    { suffix: "-bop", examples: ["Bebop", "Hard bop", "Post-bop"] },
    { suffix: "-hop", examples: ["Hip-hop", "Trip-hop", "Jazz-hop"] },
    {
      suffix: "-metal",
      examples: ["Black metal", "Death metal", "Glam metal"],
    },
    {
      suffix: "-fusion",
      examples: ["Jazz-fusion", "Afro-Cuban Fusion", "Progressive Rock Fusion"],
    },
    { suffix: "-punk", examples: ["Cyberpunk", "Steampunk", "Cowpunk"] },
    {
      suffix: "-grass",
      examples: ["Bluegrass", "Newgrass", "Progressive Bluegrass"],
    },
    {
      suffix: "-house",
      examples: ["Deep House", "Tech House", "Progressive House"],
    },
    {
      suffix: "-blues",
      examples: ["Rhythm and Blues", "Soul Blues", "Country Blues"],
    },
    { suffix: "-folk", examples: ["Folk", "Anti-folk", "Neofolk"] },
    {
      suffix: "-soul",
      examples: ["Neo-soul", "Blue-eyed Soul", "Northern Soul"],
    },
    { suffix: "-funk", examples: ["G-Funk", "P-Funk", "Afrofunk"] },
    { suffix: "-gaze", examples: ["Shoegaze", "Dreamgaze", "Nugaze"] },
    { suffix: "-disco", examples: ["Nu-disco", "Space Disco", "Italo Disco"] },
  ],
};

export default data;
