const ASSEMBLY_API_KEY = '4089c5a2c2884440b1e649570c4931a2'; // <-- Replace this!

let transcriptText = '';

function downloadTranscript() {
  const blob = new Blob([transcriptText], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'transcript.txt';
  a.click();
}

async function startTranscription() {
  const file = document.getElementById('fileInput').files[0];
  if (!file) return alert('Please select a video/audio file.');

  const video = document.getElementById('videoPlayer');
  video.src = URL.createObjectURL(file);

  // Step 1: Upload file to AssemblyAI
  const uploadRes = await fetch("https://api.assemblyai.com/v2/upload", {
    method: "POST",
    headers: { authorization: ASSEMBLY_API_KEY },
    body: file
  });
  const uploadData = await uploadRes.json();
  const uploadUrl = uploadData.upload_url;

  // Step 2: Request transcription
  const transcriptRes = await fetch("https://api.assemblyai.com/v2/transcript", {
    method: "POST",
    headers: {
      authorization: ASSEMBLY_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ audio_url: uploadUrl, punctuate: true })
  });
  const transcriptData = await transcriptRes.json();
  const transcriptId = transcriptData.id;

  // Step 3: Poll for status
  let completed = false;
  let finalData;
  document.getElementById("transcriptDisplay").innerHTML = "<p>⏳ Transcribing...</p>";
  while (!completed) {
    await new Promise(res => setTimeout(res, 4000));
    const poll = await fetch(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
      headers: { authorization: ASSEMBLY_API_KEY }
    });
    finalData = await poll.json();
    if (finalData.status === "completed") {
      completed = true;
    } else if (finalData.status === "error") {
      alert("Transcription failed: " + finalData.error);
      return;
    }
  }

  // Step 4: Display results
  transcriptText = finalData.text;
  const words = finalData.words || [];

  const transcriptDiv = document.getElementById("transcriptDisplay");
  transcriptDiv.innerHTML = '';
  words.forEach(word => {
    const span = document.createElement('span');
    const timeSec = Math.floor(word.start / 1000);
    const mm = String(Math.floor(timeSec / 60)).padStart(2, '0');
    const ss = String(timeSec % 60).padStart(2, '0');
    span.innerHTML = `<span class="timestamp" onclick="seekTo(${timeSec})">[${mm}:${ss}]</span> ${word.text} `;
    transcriptDiv.appendChild(span);
  });

  // Step 5: Key point extraction (longest sentences)
  const sentences = transcriptText.split(/(?<=[.?!])\s+/);
  const longest = sentences.sort((a, b) => b.length - a.length).slice(0, 5);
  const keyList = document.getElementById("keypointsList");
  keyList.innerHTML = '';
  longest.forEach(line => {
    const li = document.createElement('li');
    li.textContent = line;
    keyList.appendChild(li);
  });
}

function seekTo(seconds) {
  const video = document.getElementById('videoPlayer');
  video.currentTime = seconds;
  video.play();
}
