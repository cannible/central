export default {
  editor: {
    label: {
      en: 'Camera Capture'
    },
    icon: 'camera'
  },
  properties: {
    buttonText: {
      label: {
        en: 'Capture Button Text'
      },
      type: 'Text',
      defaultValue: 'Capture',
      bindable: true,
      section: 'settings',
    },
    retakeButtonText: {
      label: {
        en: 'Retake Button Text'
      },
      type: 'Text',
      defaultValue: 'Retake',
      bindable: true,
      section: 'settings',
    },
    buttonColor: {
      label: {
        en: 'Button Color'
      },
      type: 'Color',
      defaultValue: '#007bff',
      bindable: true,
      section: 'style',
    },
    buttonTextColor: {
      label: {
        en: 'Button Text Color'
      },
      type: 'Color',
      defaultValue: '#ffffff',
      bindable: true,
      section: 'style',
    },
    buttonPadding: {
      label: {
        en: 'Button Padding'
      },
      type: 'Length',
      defaultValue: '12px 24px',
      bindable: true,
      section: 'style',
    },
    buttonStyle: {
      label: {
        en: 'Button Style'
      },
      type: 'TextSelect',
      defaultValue: 'default',
      bindable: true,
      section: 'style',
      options: {
        options: [
          { value: 'default', label: 'Default' },
          { value: 'rounded', label: 'Rounded' },
          { value: 'square', label: 'Square' }
        ]
      },
    }
  },
  triggerEvents: [
    {
      name: 'capture',
      label: { en: 'On Image Capture' },
      event: { value: '' },
      description: { en: 'Triggered when an image is captured' }
    },
    {
      name: 'cameraReady',
      label: { en: 'On Camera Ready' },
      event: { value: '' },
      description: { en: 'Triggered when the camera is initialized and ready' }
    },
    {
      name: 'error',
      label: { en: 'On Error' },
      event: { value: '' },
      description: { en: 'Triggered when an error occurs' }
    }
  ],
  actions: [
    {
      name: 'captureImage',
      label: { en: 'Capture Image' },
      action: 'captureImage'
    },
    {
      name: 'retake',
      label: { en: 'Retake Photo' },
      action: 'retake'
    },
    {
      name: 'switchCamera',
      label: { en: 'Switch Camera' },
      action: 'switchCamera'
    }
  ]
};