const Analytics = require('analytics-node');

// Retrieve write key from environment variable with fallback placeholder
const writeKey = process.env.SEGMENT_WRITE_KEY || 'XXXXXX';
const analytics = new Analytics(writeKey);

// 1. Identify Event: Associate user traits
analytics.identify({
  userId: 'asgardian_001',
  traits: {
    name: 'Thor Odinson',
    email: 'thor@asgard.realm',
    hero_alias: 'God of Thunder',
    realm_of_origin: 'Asgard',
    weapon_of_choice: 'Mjolnir',
    worthy: true
  }
});

// 2. Track Event: Record a user action
analytics.track({
  userId: 'asgardian_001',
  event: 'Bifrost Transport Executed',
  properties: {
    origin_realm: 'Asgard',
    destination_realm: 'Midgard (Earth)',
    travel_time_seconds: 1.2,
    lightning_intensity_gw: 1.21,
    heimdall_notified: true,
    environment: 'GitHub Codespaces',
    language: 'Node.js'
  }
});

console.log("Events sent to Segment successfully!");
