import { Camera } from '@ionic-native/camera';

export interface CameraOptions {
    /** Picture quality in range 0-100. Default is 50 */
    quality?: number;
    /**
     * Choose the format of the return value.
     * Defined in Camera.DestinationType. Default is FILE_URI.
     *      DATA_URL : 0,   Return image as base64-encoded string,
     *      FILE_URI : 1,   Return image file URI,
     *      NATIVE_URI : 2  Return image native URI
     *          (e.g., assets-library:// on iOS or content:// on Android)
     */
    destinationType?: number;
    /**
     * Set the source of the picture.
     * Defined in Camera.PictureSourceType. Default is CAMERA.
     *      PHOTOLIBRARY : 0,
     *      CAMERA : 1,
     *      SAVEDPHOTOALBUM : 2
     */
    sourceType?: number;
    /** Allow simple editing of image before selection. */
    allowEdit?: boolean;
    /**
     * Choose the returned image file's encoding.
     * Defined in Camera.EncodingType. Default is JPEG
     *      JPEG : 0    Return JPEG encoded image
     *      PNG : 1     Return PNG encoded image
     */
    encodingType?: number;
    /**
     * Width in pixels to scale image. Must be used with targetHeight.
     * Aspect ratio remains constant.
    */
    targetWidth?: number;
    /**
     * Height in pixels to scale image. Must be used with targetWidth.
     * Aspect ratio remains constant.
     */
    targetHeight?: number;
    /**
     * Set the type of media to select from. Only works when PictureSourceType
     * is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in Camera.MediaType
     *      PICTURE: 0      allow selection of still pictures only. DEFAULT.
     *          Will return format specified via DestinationType
     *      VIDEO: 1        allow selection of video only, WILL ALWAYS RETURN FILE_URI
     *      ALLMEDIA : 2    allow selection from all media types
     */
    mediaType?: number;
    /** Rotate the image to correct for the orientation of the device during capture. */
    correctOrientation?: boolean;
    /** Save the image to the photo album on the device after capture. */
    saveToPhotoAlbum?: boolean;
    /**
     * Choose the camera to use (front- or back-facing).
     * Defined in Camera.Direction. Default is BACK.
     *      BACK: 0
     *      FRONT: 1
     */
    cameraDirection?: number;
    /** iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions. */
    popoverOptions?: CameraPopoverOptions;
}
/**
 * iOS-only parameters that specify the anchor element location and arrow direction
 * of the popover when selecting images from an iPad's library or album.
 */
export interface CameraPopoverOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection
     * Matches iOS UIPopoverArrowDirection constants.
     *      ARROW_UP : 1,
     *      ARROW_DOWN : 2,
     *      ARROW_LEFT : 4,
     *      ARROW_RIGHT : 8,
     *      ARROW_ANY : 15
     */
    arrowDir: number;
}


export class CameraMock extends Camera {

    constructor() {
        super();
    }

    DestinationType: {
        DATA_URL: number;
        FILE_URI: number;
        NATIVE_URI: number;
    };
    /**
     * Convenience constant
     */
    EncodingType: {
        JPEG: number;
        PNG: number;
    };
    /**
     * Convenience constant
     */
    MediaType: {
        PICTURE: number;
        VIDEO: number;
        ALLMEDIA: number;
    };
    /**
     * Convenience constant
     */
    PictureSourceType: {
        PHOTOLIBRARY: number;
        CAMERA: number;
        SAVEDPHOTOALBUM: number;
    };
    /**
     * Convenience constant
     */
    PopoverArrowDirection: {
        ARROW_UP: number;
        ARROW_DOWN: number;
        ARROW_LEFT: number;
        ARROW_RIGHT: number;
        ARROW_ANY: number;
    };
    /**
     * Convenience constant
     */
    Direction: {
        BACK: number;
        FRONT: number;
    };
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    getPicture(options?: CameraOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve("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");
        });
    }
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    cleanup(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}