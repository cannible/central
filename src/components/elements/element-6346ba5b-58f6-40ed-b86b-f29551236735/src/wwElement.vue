<template>
<div class="camera-capture">
<!-- Camera Preview -->
<video
v-show="!imageCaptured && !error"
ref="videoElement"
class="camera-preview"
:class="{ 'camera-preview--loading': !cameraReady }"
autoplay
playsinline
></video>

<!-- Captured Image Preview -->
<img
v-if="imageCaptured"
:src="capturedImageData"
class="captured-image"
alt="Captured photo"
/>

<!-- Error Message -->
<div v-if="error" class="error-message">
{{ error }}
</div>

<!-- Controls -->
<div class="controls" v-if="!error">
<button
v-if="!imageCaptured"
@click="captureImage"
class="capture-button"
:class="buttonClasses"
:style="buttonStyles"
:disabled="!cameraReady"
>
{{ content?.buttonText || 'Capture' }}
</button>
<button
v-else
@click="retake"
class="retake-button"
:class="buttonClasses"
:style="buttonStyles"
>
{{ content?.retakeButtonText || 'Retake' }}
</button>
</div>

<!-- Camera Switch Button (if multiple cameras available) -->
<button
v-if="hasMultipleCameras && !error && !imageCaptured"
@click="switchCamera"
class="switch-camera"
>
Switch Camera
</button>
</div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default {
props: {
content: { type: Object, required: true },
uid: { type: String, required: true }
},
emits: ['trigger-event'],
setup(props, { emit }) {
const videoElement = ref(null);
const stream = ref(null);
const error = ref(null);
const cameraReady = ref(false);
const imageCaptured = ref(false);
const hasMultipleCameras = ref(false);
const currentFacingMode = ref('environment');

// Internal variable to store the captured image
const { value: capturedImageData, setValue: setCapturedImageData } = wwLib.wwVariable.useComponentVariable({
uid: props.uid,
name: 'capturedImage',
defaultValue: '',
type: 'string'
});

const buttonClasses = computed(() => ({
'custom-button': true,
[props.content?.buttonStyle || '']: true
}));

const buttonStyles = computed(() => ({
backgroundColor: props.content?.buttonColor || '#007bff',
color: props.content?.buttonTextColor || '#ffffff',
padding: props.content?.buttonPadding || '12px 24px'
}));

// Initialize camera
const initializeCamera = async () => {
try {
// Check for multiple cameras
const devices = await navigator.mediaDevices.enumerateDevices();
const videoDevices = devices.filter(device => device.kind === 'videoinput');
hasMultipleCameras.value = videoDevices.length > 1;

// Get camera stream
const constraints = {
video: {
facingMode: currentFacingMode.value,
width: { ideal: 4096 },
height: { ideal: 2160 }
}
};

stream.value = await navigator.mediaDevices.getUserMedia(constraints);

if (videoElement.value) {
videoElement.value.srcObject = stream.value;
cameraReady.value = true;
}

emit('trigger-event', {
name: 'cameraReady',
event: { value: true }
});
} catch (err) {
error.value = 'Camera access denied or not available';
emit('trigger-event', {
name: 'error',
event: { value: err.message }
});
}
};

// Switch between front and back cameras
const switchCamera = async () => {
if (stream.value) {
stream.value.getTracks().forEach(track => track.stop());
}
currentFacingMode.value = currentFacingMode.value === 'environment' ? 'user' : 'environment';
await initializeCamera();
};

// Capture image
const captureImage = () => {
if (!cameraReady.value) return;

const canvas = document.createElement('canvas');
const video = videoElement.value;
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

const context = canvas.getContext('2d');
context.drawImage(video, 0, 0, canvas.width, canvas.height);

const base64Image = canvas.toDataURL('image/jpeg', 1.0);
setCapturedImageData(base64Image);
imageCaptured.value = true;

emit('trigger-event', {
name: 'capture',
event: { value: base64Image }
});
};

// Retake photo
const retake = () => {
imageCaptured.value = false;
setCapturedImageData('');
};

onMounted(() => {
initializeCamera();
});

onBeforeUnmount(() => {
if (stream.value) {
stream.value.getTracks().forEach(track => track.stop());
}
});

return {
videoElement,
error,
cameraReady,
imageCaptured,
capturedImageData,
hasMultipleCameras,
buttonClasses,
buttonStyles,
captureImage,
retake,
switchCamera
};
}
};
</script>

<style lang="scss" scoped>
.camera-capture {
position: relative;
width: 100%;
height: 100%;
min-height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #000000;
overflow: hidden;
border-radius: 16px;
border: 1px solid #BCC5C8;
}

.camera-preview {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 16px;

&--loading {
opacity: 0.5;
}
}

.captured-image {
width: 100%;
height: 100%;
object-fit: contain;
border-radius: 16px;
}

.controls {
position: relative;
margin-top: 4px;
width: 100%;
font-size: 16px;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 1px;
font: var(--450e3dc7-d5b2-46b0-b1c7-19987a43139a, 300 16px / 1.2em var(--ww-default-font-family, sans-serif));
left: 0;
right: 0;
display: flex;
justify-content: center;
gap: 10px;
z-index: 1;
}

.capture-button,
.retake-button {
border: none;
border-radius: 100px;
cursor: pointer;
font-size: 16px;
transition: all 0.3s ease;
background-color: var(--644a3d1c-46b9-4631-ae8e-a39426737ca9, #006AFF);
color: rgb(255, 255, 255);
padding: 8px 12px;
width: 100%;
text-align: center;
font-family: 'Sohne';
font-weight: bold;
margin: 0;
letter-spacing: 2px;

&:disabled {
opacity: 0.5;
cursor: not-allowed;
}

&:hover:not(:disabled) {
opacity: 0.9;
}
}

.switch-camera {
position: absolute;
top: 20px;
right: 20px;
padding: 8px 16px;
border: none;
border-radius: 4px;
background: rgba(255, 255, 255, 0.2);
color: white;
cursor: pointer;
z-index: 300;

&:hover {
background: rgba(255, 255, 255, 0.3);
}
}

.error-message {
color: #ff4444;
text-align: center;
padding: 20px;
background: rgba(0, 0, 0, 0.7);
border-radius: 8px;
margin: 20px;
}
</style>