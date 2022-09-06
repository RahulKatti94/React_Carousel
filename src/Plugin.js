import $ from 'jquery';
import { Video } from 'react'

export default function Plugin() {

    function Button() {
        return <button id="btn">Say Hello</button>;
    }

    $('#btn').click(function () {
        alert('Hello!');
    });

    return (
        <div>
            {/* <button onClick={Button}>Click me </button> */}
            {/* 1st video */}


            <video poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/627629acb749a91299e34b58/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="5%" height="5%" data-product="https://olliecraft.com/products/mini-hummer" data-title="Mini Toy Cars - Mini Hummer | Mini Ferrari | Mini Beetle" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/627629acb749a91299e34b58/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/mini-toy-cars-mini-hummer-|-mini-ferrari-|-mini-beetle" data-vid="1705" data-did="18581" data-productid="19844" data-productlink="https://olliecraft.com/products/mini-hummer" data-gumletassetid="undefined" data-totalviews="42" type="video/mp4">
                <iframe src="https://video.gumlet.io/621770ca1c8b821b05d7035a/627629acb749a91299e34b58/main.mp4"> </iframe>
            </video>

            {/* second video */}
            <vide poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543e744dfb3f5b4f4b430/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="100%" height="100%" data-product="https://olliecraft.com/products/wooden-christmas-toys" data-title="Wooden Christmas Toys" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543e744dfb3f5b4f4b430/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/wooden-christmas-toys" data-vid="1252" data-did="18581" data-productid="16776" data-productlink="https://olliecraft.com/products/wooden-christmas-toys" data-gumletassetid="undefined" data-totalviews="68">
                <iframe src='https://video.gumlet.io/621770ca1c8b821b05d7035a/624543e744dfb3f5b4f4b430/main.mp4'></iframe>  <br />
            </vide>

            {/* 3rd video */}
            <vide poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="100%" height="100%" data-product="https://olliecraft.com/products/mini-bmw-sedan" data-title="Mini BMW Convertible" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/mini-bmw-convertible" data-vid="1251" data-did="18581" data-productid="16777" data-productlink="https://olliecraft.com/products/mini-bmw-sedan" data-gumletassetid="undefined" data-totalviews="59" type="video/mp4">
                <iframe src='https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/main.mp4'></iframe>
            </vide>
            {/* <vide poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="100%" height="100%" data-product="https://olliecraft.com/products/mini-bmw-sedan" data-title="Mini BMW Convertible" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/mini-bmw-convertible" data-vid="1251" data-did="18581" data-productid="16777" data-productlink="https://olliecraft.com/products/mini-bmw-sedan" data-gumletassetid="undefined" data-totalviews="59" type="video/mp4">
        <iframe src='https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/main.mp4'></iframe>
         </vide>
         <vide poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="100%" height="100%" data-product="https://olliecraft.com/products/mini-bmw-sedan" data-title="Mini BMW Convertible" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/mini-bmw-convertible" data-vid="1251" data-did="18581" data-productid="16777" data-productlink="https://olliecraft.com/products/mini-bmw-sedan" data-gumletassetid="undefined" data-totalviews="59" type="video/mp4">
        <iframe src='https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/main.mp4'></iframe>
         </vide>
         <vide poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="100%" height="100%" data-product="https://olliecraft.com/products/mini-bmw-sedan" data-title="Mini BMW Convertible" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/mini-bmw-convertible" data-vid="1251" data-did="18581" data-productid="16777" data-productlink="https://olliecraft.com/products/mini-bmw-sedan" data-gumletassetid="undefined" data-totalviews="59" type="video/mp4">
        <iframe src='https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/main.mp4'></iframe>
         </vide>
         <vide poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="100%" height="100%" data-product="https://olliecraft.com/products/mini-bmw-sedan" data-title="Mini BMW Convertible" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/mini-bmw-convertible" data-vid="1251" data-did="18581" data-productid="16777" data-productlink="https://olliecraft.com/products/mini-bmw-sedan" data-gumletassetid="undefined" data-totalviews="59" type="video/mp4">
        <iframe src='https://video.gumlet.io/621770ca1c8b821b05d7035a/624543c244dfb3f5b4f4b25b/main.mp4'></iframe> 
         </vide> */}
            <br />
            {/* 4th video */}
            <video poster="https://video.gumlet.io/621770ca1c8b821b05d7035a/6245439144dfb3f5b4f4b002/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="100%" height="100%" data-product="https://olliecraft.com/products/little-rabbit" data-title="Little Rabbit" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/6245439144dfb3f5b4f4b002/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/little-rabbit" data-vid="1250" data-did="18581" data-productid="16778" data-productlink="https://olliecraft.com/products/little-rabbit" data-gumletassetid="undefined" data-totalviews="72" type="video/mp4">
                <iframe src="https://video.gumlet.io/621770ca1c8b821b05d7035a/6245439144dfb3f5b4f4b002/main.mp4" > </iframe>
            </video>
            <video  poster = "https://video.gumlet.io/621770ca1c8b821b05d7035a/6245439144dfb3f5b4f4b002/thumbnail-1-0.png" ontimeupdate="updateSSVProgressBar(this);" onloadeddata="updateSSVDurations(this);" playsinline="" preload="metadata" data-setup="{}" muted="" width="5%" height="5%" data-product="https://olliecraft.com/products/wooden-christmas-toys" data-title="Wooden Christmas Toys" data-cover="https://video.gumlet.io/621770ca1c8b821b05d7035a/624543e744dfb3f5b4f4b430/thumbnail-1-0.png" data-link="https://api.goswirl.live/index.php/swirls/wooden-christmas-toys" data-vid="1252" data-did="18581" data-productid="16776" data-productlink="https://olliecraft.com/products/wooden-christmas-toys" data-gumletassetid="undefined" data-totalviews="68">
            <iframe
        id="ytplayer"
        className=""
        type="text/html"
        width="100%"
        height="150"
        src="https://video.gumlet.io/621770ca1c8b821b05d7035a/627629acb749a91299e34b58/main.mp4"
        frameBorder="0"
      ></iframe></video>


        </div>
    )
}
