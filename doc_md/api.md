### Initialization and Authentication

```
Request Token API

Function: Obtain tokens for RTC and RTM connections
Parameters: {
  "appId": "******",         // Application id
  "channelName": "*****",    // Channel name
  "expire": 7200,            // Token expiration time (seconds)
  "src": "web",              //Source platform
  "types": [1, 2],           // Token type, generate the token of RTC, types=[1] Generate the token of RTC/RTM, types=[1, 2]
  "uid": "******"            //User ID
}
Returns: {token:"Authorization token"}

```

#### Agent Related Interfaces

```
Join API
Function: Forward language settings to translation agent
Parameters: {
  "name": "**",                                 // Task name for identification
  "languages": ["en-US"],                       // Array of language codes for transcription
  "maxIdleTime": 30,                            // Maximum idle time in seconds before auto-termination
  "rtcConfig": {                                // RTC configuration settings
    "channelName": "22",                        // Name of the RTC channel to join
    "subBotUid": "*",                           // UID for the bot that subscribes to audio
    "pubBotUid": "****",                        // UID for the bot that publishes captions
    "subscribeAudioUids": ["******"],           // Specific UIDs to subscribe to
    "subBotToken": "*****",                     // Token for the subscribing bot (optional)
    "pubBotToken": "*****"                      // Token for the publishing bot (optional)
  },
  "translateConfig": {                          // Configuration for translation service
    "languages": [
      {
        "source": "en-US",                      // Source language code
        "target": ["zh-CN"]                     // Array of target language codes
      }
    ]
  }
}
Returns: {
  agent_id:"*******",
  create_ts:1744968395,
  status:"RUNNING",
}


Update API
Function: Update language configuration
Parameters: {
  "languages": [                                 // Update the transcription languages
      "<YourTranscribeLanguages>"
  ],
  "uidLanguagesConfig": [                        // Update language settings for specific users
     {
        "uid": "<YouSpecifyUid>",              // User ID to update settings for
        "languages": ["<YourTranscribeLanguages>"] // New languages for this user
     }
  ],
  "rtcConfig": {                                  // Update RTC configuration
      "subscribeAudioUids": ["123"]              // New list of UIDs to subscribe to
  },
  "translateConfig": {                            // Update translation settings
  "enable": true,                            // Enable/disable translation
  "languages": [                             // Update translation language pairs
      {
          "source": "<SourceLanguage>",      // Source language code
          "target": ["<TargetLanguage>"]     // Target language codes
      }
  ]
}
}
Returns: {
  agent_id:"*******",
  create_ts:1744968395,
  status:"RUNNING",
}



Leave API
Function: Let worker leave channel and stop transcription and translation
Parameters: None
````
