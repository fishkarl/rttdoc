# Agora RTT Demo Project Documentation

## Project Overview

Agora RTT (Real-Time Translation) Demo is a real-time translation demonstration application based on Agora SDK, supporting speech-to-text and real-time text translation functions. The project is built using React + TypeScript, with Redux for state management and Ant Design as the UI component library.

## Directory Structure

```
Agora-RTT-Demo/
├── .cert/                 // Certificate directory
├── .git/                  // Git version control
├── web/                   // Frontend application directory
│   ├── public/            // Public resources
│   ├── src/               // Source code
│   │   ├── assets/        // Static resources
│   │   ├── common/        // Common utilities and functions
│   │   ├── components/    // UI components
│   │   ├── i18n/          // Internationalization configuration
│   │   ├── manager/       // Business logic managers
│   │   ├── pages/         // Page components
│   │   ├── protobuf/      // Protobuf message definitions
│   │   ├── router/        // Router configuration
│   │   ├── store/         // Redux state management
│   │   ├── styles/        // Style files
│   │   ├── types/         // TypeScript type definitions
│   │   ├── App.tsx        // Main application component
│   │   └── main.tsx       // Entry file
│   ├── package.json       // Dependency management
│   └── vite.config.ts     // Vite configuration
└── .gitignore             // Git ignore configuration
```

## Main File Functions

### Entry Files

- `web/src/main.tsx`: Application entry point, configuring Redux, Ant Design theme, and i18n internationalization
- `web/src/App.tsx`: Main application component, containing the router container

### Router Structure

- `web/src/router/index.tsx`: Defines application routes, including home page, login page, and 404 page

### State Management

- `web/src/store/index.ts`: Redux store configuration, using Redux Toolkit
- `web/src/store/reducers/global.ts`: Global state handling, containing user information, subtitle data, language settings, and other states

### Business Logic Managers

- `web/src/manager/`: Contains multiple business logic management modules
  - `rtc/`: Agora real-time communication management
  - `rtm/`: Real-time messaging management
  - `stt/`: Speech recognition and conversion module
  - `parser/`: Data parsing module

### Main Components

- `web/src/components/`: Contains multiple functional components
  - `header/`: Header component
  - `footer/`: Footer control bar component
  - `caption/`: Subtitle display component
  - `dialog/`: Dialog component
  - `user-list/`: User list component
  - `menu/`: Menu component
  - `stream-player/`: Media stream player component

### Page Components

- `web/src/pages/home/`: Home page
- `web/src/pages/login/`: Login page
- `web/src/pages/404/`: 404 error page

## Frontend Data Flow

### Main Data Flow

1. **User Login Process**:
   - User enters information on the login page
   - Data is submitted to the store through Redux actions
   - Data is stored in Redux's global.userInfo
   - Simultaneously saved to local storage through setUserInfoToLocal

2. **Real-time Audio and Video Communication**:
   - The `manager/rtc` module handles interaction with the Agora RTC SDK
   - Audio and video states are updated to the store through Redux actions
   - Components retrieve states from Redux and render accordingly

3. **Speech-to-Text and Translation Process**:
   - Voice input is processed by the `manager/stt` module
   - Speech recognition results are updated to the store through Redux actions (such as pushSubtitles)
   - The subtitle component reads sttSubtitles data from the store and displays it

4. **User Interaction and UI State Management**:
   - User interactions trigger Redux actions
   - Actions update states in the store (such as menuList, memberListShow, etc.)
   - Components respond to state changes and re-render

### Core Redux State

```typescript
// Global state structure
export interface InitialState {
  // STT related data
  sttData: ISttData
  
  // User state
  userInfo: IUserInfo
  options: IOptions
  localVideoMute: boolean
  localAudioMute: boolean
  captionLanguages: string[]
  languageSelect: ILanguageSelect
  recordLanguageSelect: { translate1List?: string[], translate2List?: string[] }
  sttSubtitles: ITextItem[]
  
  // Remote user state
  currentSpeaker: number
  remoteUserList: Map<number, IUserInfo>
  
  // UI state
  languageSettingShow: boolean
  memberListShow: boolean
  dialogRecordShow: boolean
  captionShow: boolean
  aiShow: boolean
  tipSTTEnable: boolean
  menuList: MenuType[]
  page: { width: number, height: number }
  isUpdating: boolean
  messageList: IMessage[]
}
```

## Main Dependencies

- React: UI library
- Redux/Redux Toolkit: State management
- Ant Design: UI component library
- Agora SDK: 
  - agora-rtc-sdk-ng: Real-time audio and video communication
  - agora-rtm: Real-time messaging
- i18next: Internationalization support
- Protobuf: Data serialization
- Vite: Build tool

## Development and Build Commands

- `yarn dev`: Start development environment
- `yarn build`: Build for production environment
- `yarn lint`: Code checking
- `yarn prettier`: Code formatting 