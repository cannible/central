---
name: camera-capture
description: A component that enables high-resolution photo capture using device cameras with Base64 conversion and real-time preview
keywords: [camera, capture, photo, image, base64, webcam, mobile camera]
---

### Camera Capture Component

Properties:
- `buttonText`: `string` - Text displayed on the capture button. Default: `'Capture'`
- `retakeButtonText`: `string` - Text displayed on the retake button. Default: `'Retake'`
- `buttonColor`: `string` - Background color of the buttons. Default: `'#007bff'`
- `buttonTextColor`: `string` - Text color of the buttons. Default: `'#ffffff'`
- `buttonPadding`: `string` - Padding around button text. Default: `'12px 24px'`
- `buttonStyle`: `'default' | 'rounded' | 'square'` - Visual style of buttons. Default: `'default'`

Events:
- `capture`: Emitted when an image is captured. Payload: `{ value: base64String }`
- `cameraReady`: Emitted when camera is initialized. Payload: `{ value: true }`
- `error`: Emitted on errors. Payload: `{ value: errorMessage }`

Actions:
- `captureImage`: Triggers image capture
- `retake`: Resets to camera preview mode
- `switchCamera`: Toggles between front and back cameras (if available)

Variables:
- `capturedImage`: `string` - Base64 string of the captured image

Special features:
- Automatically detects and handles multiple cameras
- Captures at maximum available resolution
- Real-time camera preview
- Error handling for camera permissions
- Responsive design that maintains aspect ratio
- Support for both mobile and desktop browsers
- Automatic camera stream cleanup on component unmount

Note: Camera access requires HTTPS in production environments and appropriate browser permissions.