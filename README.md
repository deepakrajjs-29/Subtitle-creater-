# 🎬 Smart Video Transcript Summarizer

An intelligent web application that automatically transcribes video and audio files, generates interactive transcripts with clickable timestamps, and extracts key points using AI-powered speech recognition.

---

## 📌 Project Overview

Smart Video Transcript Summarizer is a powerful frontend tool that leverages the **AssemblyAI API** to convert your video or audio content into searchable, timestamped transcripts. Whether you're a student reviewing lectures, a content creator analyzing videos, or a professional transcribing meetings, this tool makes it effortless.

---

## ✨ Features

- 🎥 **Upload Video or Audio Files** - Supports multiple formats (MP4, MP3, WAV, etc.)
- 🎙️ **AI-Powered Transcription** - Uses AssemblyAI's advanced speech-to-text engine
- ⏱️ **Clickable Timestamps** - Jump to any part of the video by clicking timestamp links
- 📝 **Interactive Transcript** - Read along as you watch/listen
- 💡 **Key Points Extraction** - Automatically identifies and lists the 5 most important sentences
- 📥 **Download Transcript** - Export your transcript as a `.txt` file for offline use
- 🎨 **Clean, Modern UI** - Simple and intuitive interface
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

---

## 🛠️ Technology Stack

| Technology        | Purpose                           |
|-------------------|-----------------------------------|
| **HTML5**         | Structure and semantic markup     |
| **CSS3**          | Styling and responsive layout     |
| **JavaScript**    | Frontend logic and API integration|
| **AssemblyAI API**| Speech-to-text transcription      |
| **Blob API**      | File handling and downloads       |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An AssemblyAI API key ([Get one free here](https://www.assemblyai.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepakrajjs-29/Subtitle-creater-.git
   cd Subtitle-creater-
   ```

2. **Get your AssemblyAI API Key**
   - Sign up at [AssemblyAI](https://www.assemblyai.com/)
   - Navigate to your dashboard to find your API key

3. **Configure API Key**
   - Open `index.html` in a text editor
   - Replace the placeholder API key on line 67:
     ```javascript
     const ASSEMBLY_API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual key
     ```

4. **Launch the Application**
   - Simply open `index.html` in your web browser
   - No build process or server required!

---

## 📖 How to Use

1. **Upload a File**
   - Click "Choose File" and select your video or audio file
   - Supported formats: MP4, MP3, WAV, M4A, and more

2. **Start Transcription**
   - Click "🎬 Upload & Transcribe" button
   - Wait while the AI processes your file (typically 1-3 minutes)

3. **Interact with Results**
   - **Watch & Read**: The video player and transcript appear side-by-side
   - **Click Timestamps**: Jump to specific moments by clicking `[MM:SS]` timestamps
   - **Review Key Points**: Check the automatically extracted summary points
   - **Download**: Save the complete transcript as a text file

---

## 🎯 Use Cases

- 📚 **Students**: Transcribe lecture videos for easy note-taking and review
- 🎬 **Content Creators**: Generate subtitles and captions for videos
- 💼 **Professionals**: Transcribe meetings, interviews, and presentations
- 🌐 **Accessibility**: Make video content accessible to hearing-impaired users
- 📝 **Researchers**: Extract quotes and key information from interviews

---

## 📂 Project Structure

```
Subtitle-creater-/
│
├── index.html          # Main application (HTML + CSS + JavaScript)
└── README.md           # Project documentation
```

**Single-File Architecture**: The entire application is contained in one HTML file with inline CSS and JavaScript for maximum portability and simplicity.

---

## 🔧 Configuration

### API Key Setup
The application requires an AssemblyAI API key. Update line 67 in `index.html`:

```javascript
const ASSEMBLY_API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
```

⚠️ **Security Note**: Never commit your actual API key to version control. For production use, consider implementing a backend proxy to keep your API key secure and prevent unauthorized usage.

### Customization Options

You can easily customize:
- **Styling**: Modify the `<style>` section for colors, fonts, and layout
- **Transcription Options**: Add parameters to the API call (e.g., `auto_highlights`, `speaker_labels`)
- **Key Points Algorithm**: Adjust the sentence extraction logic in the `startTranscription()` function

---

## 💡 Future Enhancements

- [ ] **Multi-language Support** - Transcribe videos in multiple languages
- [ ] **Speaker Diarization** - Identify and label different speakers
- [ ] **Subtitle Export** - Generate SRT/VTT files for video editors
- [ ] **Search Functionality** - Search within transcripts
- [ ] **Cloud Storage Integration** - Save transcripts to Google Drive/Dropbox
- [ ] **Real-time Transcription** - Live transcription during video recording
- [ ] **AI Summarization** - Use GPT for smarter summarization
- [ ] **Authentication System** - User accounts to save transcript history
- [ ] **Batch Processing** - Upload and process multiple files at once

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: "Transcription failed" error
- **Solution**: Check that your API key is valid and has sufficient credits

**Issue**: Video doesn't play after upload
- **Solution**: Ensure your browser supports the video format. Try converting to MP4.

**Issue**: Transcription takes too long
- **Solution**: This is normal for longer videos. Wait time is roughly 1/3 of video duration.

**Issue**: Timestamps not working
- **Solution**: Ensure JavaScript is enabled in your browser

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Ideas
- Add support for more file formats
- Improve the UI/UX design
- Implement additional AI features
- Add error handling and validation
- Create unit tests
- Optimize performance

---

## 📜 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👨‍💻 Author

**Deepak Raj JS**
- GitHub: [@deepakrajjs-29](https://github.com/deepakrajjs-29)
- Repository: [Subtitle-creater-](https://github.com/deepakrajjs-29/Subtitle-creater-)

---

## 🙏 Acknowledgments

- **AssemblyAI** for providing the powerful speech-to-text API
- The open-source community for inspiration and support
- All contributors who help improve this project

---

## 📬 Support

If you find this project helpful, please consider:
- ⭐ Starring this repository
- 🐛 Reporting bugs via [GitHub Issues](https://github.com/deepakrajjs-29/Subtitle-creater-/issues)
- 💡 Suggesting new features
- 🔄 Sharing with others who might benefit

---

<div align="center">

**Made with ❤️ for making video content more accessible**

[Report Bug](https://github.com/deepakrajjs-29/Subtitle-creater-/issues) · [Request Feature](https://github.com/deepakrajjs-29/Subtitle-creater-/issues)

</div>
