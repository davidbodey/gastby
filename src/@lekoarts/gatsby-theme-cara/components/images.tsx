import * as React from "react"
import {useEffect, useState} from "react"
import {v4 as uuidv4} from "uuid";
import FsLightbox from 'fslightbox-react';

if (typeof window !== "undefined") {
    const UIkit = require("uikit/dist/js/uikit.min");
    const icons = require("uikit/dist/js/uikit-icons.min");
    UIkit.use(icons);
}

const Images = () => {
    const [images, setImages] = useState([{thumbnail:process.env.GATSBY_BASE + '/DSC04344.jpg', full:process.env.GATSBY_BASE + '/DSC04344.jpg'}]);
    let pages = [];

    const getImagesS3 = async () => {
        try {
            var AWS = require('aws-sdk');
            AWS.config.update({accessKeyId: process.env.GATSBY_S3_ID, secretAccessKey: process.env.GATSBY_S3_KEY, region: 'us-east-1'});
            var s3 = new AWS.S3();

            var params = {
                Bucket: process.env.GATSBY_S3_BUCKET,
                Delimiter: '/',
                Prefix: 'images/'
            }

            let images = [];
            await s3.listObjects(params, function (err, data) {
                if (err) throw err;

                const getThumbnailFromKey = (key, width= 300, height = 300) => {
                    const request = {
                        bucket: "severalphotos",
                        key, // (i.e., photos/img.jpg)
                        edits: {
                            normalize: true,
                            webp: true, // if android
                            jpeg: true, // fallback
                            sharpen: true,
                            resize: {
                                width: width,
                                height: height,
                                fit: "cover"
                            }
                        }
                    }
                    const str = JSON.stringify(request);
                    const base64 = btoa(str);
                    return `${process.env.GATSBY_SHARP}${base64}`;
                }

                const getFullFromKey = (key) => {
                    const request = {
                        bucket: "severalphotos",
                        key, // (i.e., photos/img.jpg)
                        edits: {
                            normalize: true,
                            webp: true, // if android
                            jpeg: true, // fallback
                            resize: {
                                fit: "cover"
                            }
                        }
                    }
                    const str = JSON.stringify(request);
                    const base64 = btoa(str);
                    return `${process.env.GATSBY_SHARP}${base64}`;
                }

                // Store thumbnail and full urls using base64 to images array
                for (let obj of data?.Contents) {
                    if (obj.Key) images.push({thumbnail:getThumbnailFromKey(obj?.Key), full:getFullFromKey(obj?.Key)});
                }
                setImages(images);
                setToggler(!toggler);

            });
        } catch (e) {
            console.log(e);
        }
    }

    useEffect( () => {
          getImagesS3(); // Populates images array used to generate portfolio
    }, []);

    // Used for fs-lightbox
    const [toggler, setToggler] = useState(false);
    return (
        <div className={'uk-container'} style={{width: '90vw'}} >
            <span><a className={''} onClick={() => setToggler(!toggler)}>Portfolio</a></span>
            <FsLightbox toggler={toggler} type="image" sources={images.map(obj=>obj.full)} thumbs={images.map(obj=>obj.thumbnail)} />
        </div>
    )
}

export default Images;