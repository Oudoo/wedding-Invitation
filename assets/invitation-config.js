// Wedding Invitation Local Configuration File
// You can customize all wedding details here without editing complex scripts.

window.invitationConfig = {
  // --- Core Invitation Details ---
  initials: "A & H",                  // Initials on the opening envelope
  headline: "Ahmed & Hagar",            // Names of the couple
  headline_subtitle: "Are getting married!", // Subtitle on the envelope
  message: "We are so excited to celebrate our special day with you. Tap below to see the details.", // Main opening message
  
  event_date: "2026-07-09T19:00:00",  // Ceremony Date/Time (YYYY-MM-DDTHH:MM:SS)
  event_end_date: "2026-07-09T23:59:00", // Event end Date/Time
  ceremony_time: "19:00",             // Ceremony Time
  reception_time: "20:30",            // Reception Time
  
  // --- Styling and Aesthetics ---
  style_name: "palm-zoom",            // The theme background style (matches palm-zoom-theme video)
  font_family: "Cinzel",              // Primary font family
  text_color: "#5a5248",              // Main body text color
  envelope_text_color: "#5a5248",     // Text color on the envelope
  block_text_color: "#1a1a1a",        // Text color in content sections
  
  headline_font_size: 42,             // Size of headline text (couple names)
  envelope_font_size: 24,             // Size of text on the envelope
  date_font_size: 16,                 // Size of the date text
  date_position: "above",             // Position of the date ("above" or "below" headline)
 
  // --- Background Media ---
  music_url: null,                    // URL to background music (e.g., "./assets/background-music.mp3" or null to disable)
  custom_video_url: "",               // Custom background video URL (if empty, uses the default palm video)
 
  // --- Sections to Display ---
  // You can rearrange or remove sections by editing this array.
  // Supported blocks: "countdown", "venue", "timeline", "dress-code", "gift-list", "faq"
  blocks: ["countdown", "venue", "timeline", "dress-code", "gift-list", "faq"],
 
  // --- Guest RSVP Settings ---
  default_max_guests: 5,              // Default maximum guests allowed per submission
  rsvp_config: {
    showGuestCount: true,             // Let guests select how many people are coming
    showDietaryOptions: true,          // Let guests select dietary preferences
    showMessage: true,                // Let guests leave a message for the couple
    showOtherDietary: true,           // Let guests write custom dietary requirements
    dietaryOptions: [
      { id: "gluten-free", enabled: true },
      { id: "lactose-free", enabled: true },
      { id: "vegetarian", enabled: true },
      { id: "vegan", enabled: true },
      { id: "nut-allergy", enabled: true },
      { id: "seafood-allergy", enabled: true }
    ],
    customQuestions: []
  },
 
  // --- Detailed Content for Each Section ---
  block_content: {
    // 1. Countdown Section
    countdown: {
      targetDate: "2026-07-09T19:00:00",
      message: "Days until we say I DO",
      backgroundColor: "#f5f0e6",
      showEmbroidery: true
    },
 
    // 2. Venue Section
    venue: {
      name: "Air Force House",
      address: "Salah Salem, Nasr City, Cairo",
      imageUrl: "" // Image url or leave empty for default video frame
    },
 
    // 3. Timeline / Schedule Section
    timelineDays: [
      {
        label: "Wedding Schedule",
        items: [
          { time: "19:00", title: "Ceremony", description: "Our wedding ceremony at the hall." },
          { time: "20:30", title: "Grand Celebration & Dinner", description: "Dinner celebration, grand cake cutting, and music." },
          { time: "22:00", title: "Party & Dancing", description: "Dances, photos, and closing celebrations." }
        ]
      }
    ],
 
    // 4. Dress Code Section
    dressCode: {
      code: "Formal / Elegant",
      description: "We would love for our guests to dress to impress! Elegant evening gowns and formal suits are preferred.",
      // A palette of color options to show on the invitation
      colors: ["#5a5248", "#c8b195", "#ebdccb", "#a08c75", "#3a342e"]
    },
 
    // 5. Gift List Section
    giftList: {
      title: "Gift Registry",
      description: "Your presence at our wedding is the greatest gift of all! If you wish to honor us with a gift, a contribution towards our honeymoon would be warmly appreciated.",
      bankAccounts: [
        {
          bankName: "National Bank of Egypt",
          iban: "EG1234567890123456789012345",
          owner: "Ahmed & Hagar Wedding Fund"
        }
      ]
    },
 
    // 6. Frequently Asked Questions (FAQ) Section
    faq: [
      {
        question: "Is there parking at the venue?",
        answer: "Yes, complimentary private parking is available for all guests inside the Air Force House parking lot."
      },
      {
        question: "Can I bring a plus one?",
        answer: "We have specified the number of reserved seats on your digital envelope. Please contact us directly if you have any questions."
      },
      {
        question: "By when should I RSVP?",
        answer: "Please kindly RSVP by June 30, 2026, using the RSVP form below."
      }
    ]
  }
};
