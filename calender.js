// Create an array of event objects representing 6 days of wedding preparation and 1 wedding day
const events = [
    {
      title: "Day 1: Guest List Preparation",
      date: new Date("2024-09-21"),
      location: "Online Meeting",
      attendees: new Set(["Alice", "Bob"]),
    },
    {
      title: "Day 2: Venue Selection",
      date: new Date("2024-09-22"),
      location: "Nairobi",
      attendees: new Set(["Alice", "Bob", "Charlie"]),
    },
    {
      title: "Day 3: Catering & Menu Planning",
      date: new Date("2024-09-23"),
      location: "Restaurant in Nairobi",
      attendees: new Set(["Alice", "Charlie", "Dave"]),
    },
    {
      title: "Day 4: Decorations & Theme Planning",
      date: new Date("2024-09-24"),
      location: "Nairobi",
      attendees: new Set(["Alice", "Bob", "Grace"]),
    },
    {
      title: "Day 5: Entertainment & Music Selection",
      date: new Date("2024-09-25"),
      location: "Nairobi",
      attendees: new Set(["Alice", "Frank", "Henry"]),
    },
    {
      title: "Day 6: Final Checklist & Rehearsal",
      date: new Date("2024-09-26"),
      location: "Online Meeting",
      attendees: new Set(["Alice", "Bob", "Charlie"]),
    },
    {
      title: "Day 7: Wedding Day",
      date: new Date("2024-09-27"),
      location: "Nairobi",
      attendees: new Set(["Alice", "Bob", "Charlie", "Dave", "Grace", "Frank", "Henry"]),
    },
  ];
  
  // Displaying all events
  console.log("Wedding Preparation Schedule:");
  events.forEach(event => {
    const { title, date, location } = event;
    if (event.title.includes("Wedding Day")) {
      console.log(`💍 Wedding Day! Title: ${title}, Date: ${date.toDateString()}, Location: ${location}`);
    } else {
      console.log(`Title: ${title}, Date: ${date.toDateString()}, Location: ${location}`);
    }
  });
  
  // Function to add an attendee to an event
  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(e => e.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
    } else {
      console.log(`Event with title "${eventTitle}" not found.`);
    }
  }
  
  // Adding a new attendee to the wedding day
  addAttendee("Day 7: Wedding Day", "Ivy");
  
  // Use .reduce() to find the event with the most attendees
  const eventWithMostAttendees = events.reduce((max, event) => {
    return event.attendees.size > max.attendees.size ? event : max;
  }, events[0]);
  
  console.log("Event with the most attendees:", eventWithMostAttendees.title);
  
  // Convert the events array to JSON with custom formatted date
  events.toJSON = function () {
    return this.map(event => ({
      title: event.title,
      location: event.location,
      formattedDate: event.date.toLocaleDateString("en-US"),
      attendees: Array.from(event.attendees),
    }));
  };
  
  const eventsJSON = JSON.stringify(events, null, 2);
  console.log(eventsJSON);
  
  // Display properties and values of the first event
  const firstEvent = events[0];
  console.log(Object.keys(firstEvent));
  console.log(Object.values(firstEvent));
  console.log(Object.entries(firstEvent));
  