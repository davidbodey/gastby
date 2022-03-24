import * as React from "react"
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";

if (typeof window !== "undefined") {
    const UIkit = require("uikit/dist/js/uikit.min");
    const icons = require("uikit/dist/js/uikit-icons.min");
    UIkit.use(icons);
}

const Images =  () => {
    const [images, setImages] = useState([process.env.GATSBY_BASE + '/DSC04344.jpg']);
    let pages = [];

    const getImages = async (cursor= 0) => {
        try {
            const key = process.env.GATSBY_BEARER;
            const source = process.env.GATSBY_IMGIX_SOURCE;
            const limit = 100;
            let page_cursor = `?page[cursor]=${cursor}&page[limit]=${limit}`;

            const url = 'https://api.imgix.com/api/v1/assets/' + source + page_cursor;
            const header = {'Authorization': key};
            const result = await fetch(url, {headers:header}).then(async (response) => {
                await response.json().then(async (page) => {
                    pages.push(page);
                    cursor += limit; // recursively request the next pages of 100
                    if (page?.meta?.cursor?.hasMore) await getImages(cursor);
                })
            })
        } catch (e) {
            console.log(e);
        }
    }

    useEffect( () => {
         getImages().then(() => {
             const images = [];
             const base_url = process.env.GATSBY_BASE;

             try {
                 for (const page of pages) {
                     for (const item of page.data) {
                         const id = item.id.replace(/.*\//, '');

                         // temp fix for imgix not purging.
                         if (id != 'DSC01673.jpg' && id != 'DSC01503.jpg') images.push(base_url + id); // store url for each image
                     }
                 }
                 setImages(images);
             }
           catch (e) {
                 console.log(e);
           }
         });
    }, []);

    // imgix real time alterations
    const alterations = `?w=100&h=100&fit=crop&crop=stretch&auto=format&q=60`;
    return (
        <div style={{width: '90vw'}} className="uk-container">
            {/* Using UIKit requires data- prefix for React */}
            <div data-uk-lightbox>
                {images.map(url => <a href={url} key={uuidv4()} className={'uk-animation-fade'}><img src={url+alterations} key={uuidv4()} /></a>)}
            </div>
        </div>
    )
}

export default Images;