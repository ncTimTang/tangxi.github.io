

// This is based on https://robustnerf.github.io/, : http://thenewcode.com/364/Interactive-Before-and-After-Video-Comparison-in-HTML5-Canvas
// With additional modifications based on: https://jsfiddle.net/7sk5k4gp/13/


var scans = ['strawberry cake','blueberry cake','mango cake'];


scan_selection_template = `
<li class="tablinks is-active" onclick="toggleView(event)" scan="scanid">
              <a>
                <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                <span>scanid</span>
              </a>
            </li>
`;

scan_content_template = `
        <!--/ Scan 24 -->
        <div class="tabcontent" style="display: block;" scan="scanid">
          <!-- source views. -->
          <h4 class="title is-4">Edited Colormaps</h2>
          <div class="columns is-centered has-text-centered">
            <div class="column">
              <img src="static/images/source_views/scanid/out_000_back.png" />
            </div>
            <div class="column">
              <img src="static/images/source_views/scanid/out_000_front.png" />
            </div>
            <div class="column">
              <img src="static/images/source_views/scanid/out_000_front_left.png" />
            </div>
          </div>
          <div class="columns is-centered has-text-centered">
            <div class="column">
              <img src="static/images/source_views/scanid/out_000_front_right.png" />
            </div>
            <div class="column">
              <img src="static/images/source_views/scanid/out_000_left.png" />
            </div>
            <div class="column">
              <img src="static/images/source_views/scanid/out_000_right.png" />
            </div>
          </div>
          <!-- source views. -->
          <!--/ Renderings -->
          <h4 class="title is-4">Model renderings</h2>
          <table>
            <tbody>
              <tr>
                <td align="left" valign="top" width="50%">
                  <video class="video" preload="auto" id="scanid" loop="" playsinline="" autoplay="" muted=""
                    src="static/videos/scanid.mp4" onplay="resizeAndPlay(this)" style="height: 0px;"></video>

                  <canvas class="videoMerge" id="scanidMerge"></canvas>
                </td>
              </tr>
            </tbody>
          </table>
          <!--/ Renderings -->
          <!-- 3D model. -->
          <div class="columns is-centered has-text-centered">
            <div class="column is-full_width">
              <h2 class="title is-4">Texturized 3D model</h2>
              <model-viewer alt="Scan scanid Mesh"
                exposure=".35 " shadow-intensity="1" shadow-softness="1"
                orientation = "orientation-string"
                src="https://raw.githubusercontent.com/ZicongJiang/GEM3D/main/static/scanid.glb"
                style="width: 100%; height: 600px; background-color: #404040"
                poster="https://github.com/ZicongJiang/GEM3D/tree/main/static/images/teaser.png" auto-rotate camera-controls
                ar-status="not-presenting"></model-viewer>
            </div>
          </div>
          <!--/ 3D model. -->
        </div>
        <!--/ Scan 24 -->
`;



function loadScanSelection() {
  var ul = document.getElementById("scan_selection");
  var ul_html = "";
  for (let i = 0; i < scans.length; i++) {
    var scan = scans[i];
    element_html = scan_selection_template.replaceAll("scanid", scan);
    if (i != 0) {
      element_html = element_html.replaceAll("is-active", "");
    }
    ul_html += element_html;
  }
  ul.innerHTML = ul_html;
}
function loadScanContent() {
  var div = document.getElementById("scan_content");
  var div_html = "";
  for (let i = 0; i < scans.length; i++) {
    var scan = scans[i];
    element_html = scan_content_template.replaceAll("scanid", scan);
    element_html = element_html.replaceAll("orientation-string", transforms[scan]);
    if (i != 0) {
      element_html = element_html.replaceAll("style=\"display: block;\"", "style=\"display: none;\"");
    }
    div_html += element_html;
  }
  div.innerHTML = div_html;
}
$(document).ready(function () {
  loadScanSelection();
  loadScanContent();
});


var transforms = {
  'strawberry cake': "0 0 230deg",
  'blueberry cake': "0 0 230deg",
  'mango cake': "0 0 230deg",
  // 69: "0deg 210deg 290deg",
};


function transformModels() {
  modelViewerTransform.orientation = `${roll.value}deg ${pitch.value}deg ${yaw.value}deg`;
  modelViewerTransform.updateFraming();

}



function toggleView(evt) {
  var elem = evt.currentTarget;
  var scan = elem.attributes["scan"].value;

  // Get all elements with class="tabcontent" and hide them
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    var display = tabcontent[i].attributes["scan"].value == scan ? "block" : "none";
    tabcontent[i].style.display = display;
  }

  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  elem.className += " is-active";
}

function playVids(videoId) {
  var videoMerge = document.getElementById(videoId + "Merge");
  var vid = document.getElementById(videoId);

  var position = 0.5;
  var positionY = 0.5;
  var vidWidth = vid.videoWidth / 2;
  var vidHeight = vid.videoHeight;

  var mergeContext = videoMerge.getContext("2d");


  if (vid.readyState > 3) {
    vid.play();

    function trackLocation(e) {
      // Normalize to [0, 1]
      bcr = videoMerge.getBoundingClientRect();
      position = ((e.pageX - bcr.x) / bcr.width);
      positionY = ((e.pageY - (bcr.top + window.scrollY)) / bcr.height);
    }
    function trackLocationTouch(e) {
      // Normalize to [0, 1]
      bcr = videoMerge.getBoundingClientRect();
      position = ((e.touches[0].pageX - bcr.x) / bcr.width);
      positionY = ((e.touches[0].pageY - (bcr.top + window.scrollY)) / bcr.height);
    }

    videoMerge.addEventListener("mousemove", trackLocation, false);
    videoMerge.addEventListener("touchstart", trackLocationTouch, false);
    videoMerge.addEventListener("touchmove", trackLocationTouch, false);


    function drawLoop() {
      mergeContext.drawImage(vid, 0, 0, vidWidth, vidHeight, 0, 0, vidWidth, vidHeight);
      var colStart = (vidWidth * position).clamp(0.0, vidWidth);
      var colWidth = (vidWidth - (vidWidth * position)).clamp(0.0, vidWidth);
      mergeContext.drawImage(vid, colStart + vidWidth, 0, colWidth, vidHeight, colStart, 0, colWidth, vidHeight);
      requestAnimationFrame(drawLoop);


      var arrowLength = 0.09 * vidHeight;
      var arrowheadWidth = 0.025 * vidHeight;
      var arrowheadLength = 0.04 * vidHeight;
      var arrowPosY = positionY * vidHeight;
      var arrowWidth = 0.007 * vidHeight;
      var currX = vidWidth * position;
      drawOverlay(mergeContext, vidWidth, vidHeight, position, positionY, arrowLength, arrowheadWidth, arrowheadLength, arrowPosY, arrowWidth, currX);
    }
    requestAnimationFrame(drawLoop);
  }
}

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};


function resizeAndPlay(element) {
  var cv = document.getElementById(element.id + "Merge");
  cv.width = element.videoWidth / 2;
  cv.height = element.videoHeight;

  element.play();
  element.style.height = "0px";  // Hide video without stopping it

  playVids(element.id);
}






function playVidsDual(videoId, videoId2) {
  var videoMerge = document.getElementById(videoId + "Merge");
  var vid = document.getElementById(videoId);

  var videoMerge2 = document.getElementById(videoId2 + "Merge");
  var vid2 = document.getElementById(videoId2);

  var position = 0.5;
  var vidWidth = vid.videoWidth / 2;
  var vidHeight = vid.videoHeight;

  var mergeContext = videoMerge.getContext("2d");
  var mergeContext2 = videoMerge2.getContext("2d");


  if ((vid.readyState > 3) && (vid2.readyState > 3)) {
    vid.play();
    vid2.play();

    function trackLocation(e) {
      // Normalize to [0, 1]
      bcr = videoMerge.getBoundingClientRect();
      position = ((e.pageX - bcr.x) / bcr.width);
      positionY = ((e.pageY - (bcr.top + window.scrollY)) / bcr.height);

      if (position > 1) {
        position = position - 1;
      }
      // console.log("pos1: " + position)
    }
    function trackLocationTouch(e) {
      // Normalize to [0, 1]
      bcr = videoMerge.getBoundingClientRect();
      position = ((e.touches[0].pageX - bcr.x) / bcr.width);
      positionY = ((e.touches[0].pageY - (bcr.top + window.scrollY)) / bcr.height);

      if (position > 1) {
        position = position - 1;
      }
    }

    videoMerge.addEventListener("mousemove", trackLocation, false);
    videoMerge.addEventListener("touchstart", trackLocationTouch, false);
    videoMerge.addEventListener("touchmove", trackLocationTouch, false);

    videoMerge2.addEventListener("mousemove", trackLocation, false);
    videoMerge2.addEventListener("touchstart", trackLocationTouch, false);
    videoMerge2.addEventListener("touchmove", trackLocationTouch, false);


    function drawLoop() {
      mergeContext.drawImage(vid, 0, 0, vidWidth, vidHeight, 0, 0, vidWidth, vidHeight);
      mergeContext2.drawImage(vid2, 0, 0, vidWidth, vidHeight, 0, 0, vidWidth, vidHeight);
      var colStart = (vidWidth * position).clamp(0.0, vidWidth);
      var colWidth = (vidWidth - (vidWidth * position)).clamp(0.0, vidWidth);
      mergeContext.drawImage(vid, colStart + vidWidth, 0, colWidth, vidHeight, colStart, 0, colWidth, vidHeight);
      mergeContext2.drawImage(vid2, colStart + vidWidth, 0, colWidth, vidHeight, colStart, 0, colWidth, vidHeight);
      requestAnimationFrame(drawLoop);

      drawOverlay(mergeContext, vidWidth, vidHeight, position, positionY);
      drawOverlay(mergeContext2, vidWidth, vidHeight, position, positionY);

    }
    requestAnimationFrame(drawLoop);
  }
}

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};


function resizeAndPlayDual(element, id2) {
  var cv = document.getElementById(element.id + "Merge");
  cv.width = element.videoWidth / 2;
  cv.height = element.videoHeight;

  console.log("video height:" + element.videoHeight);
  console.log("video width:" + element.videoWidth);

  element.play();
  element.style.height = "0px";  // Hide video without stopping it

  element2 = document.getElementById(id2);
  var cv2 = document.getElementById(element2.id + "Merge");
  cv2.width = element2.videoWidth / 2;
  cv2.height = element2.videoHeight;

  console.log("video height:" + element2.videoHeight);
  console.log("video width:" + element2.videoWidth);

  element2.play();
  element2.style.height = "0px";  // Hide video without stopping it

  playVidsDual(element.id, element2.id);
}


function resizeAndPlayDualWhenReady(element, id2) {
  var element2 = document.getElementById(id2);
  var cnt = 0;
  setTimeout(function playIfReady() {
    if ((element2.readyState != 4) || (element.readyState != 4)) {
      console.log("second video is not ready yet, cnt=" + cnt);
      cnt++;
      // Bail out if it retries for more than 10 seconds.
      if (cnt < 1000) {
        setTimeout(playIfReady, 10);
      }
    }
    resizeAndPlayDual(element, id2);
  }, 10);
}



function drawOverlay(mergeContext, vidWidth, vidHeight, position, positionY, arrowLength, arrowheadWidth, arrowheadLength, arrowPosY, arrowWidth, currX) {
  // Draw circle
  mergeContext.arc(currX, arrowPosY, arrowLength * 0.7, 0, Math.PI * 2, false);
  mergeContext.fillStyle = "#FFD79340";
  mergeContext.fill();
  //mergeContext.strokeStyle = "#444444";
  //mergeContext.stroke()

  // Draw border
  mergeContext.beginPath();
  mergeContext.moveTo(vidWidth * position, 0);
  mergeContext.lineTo(vidWidth * position, vidHeight);
  mergeContext.closePath();
  mergeContext.strokeStyle = "#444444";
  mergeContext.lineWidth = 5;
  mergeContext.stroke();

  // Draw arrow
  mergeContext.beginPath();
  mergeContext.moveTo(currX, arrowPosY - arrowWidth / 2);

  // Move right until meeting arrow head
  mergeContext.lineTo(currX + arrowLength / 2 - arrowheadLength / 2, arrowPosY - arrowWidth / 2);

  // Draw right arrow head
  mergeContext.lineTo(currX + arrowLength / 2 - arrowheadLength / 2, arrowPosY - arrowheadWidth / 2);
  mergeContext.lineTo(currX + arrowLength / 2, arrowPosY);
  mergeContext.lineTo(currX + arrowLength / 2 - arrowheadLength / 2, arrowPosY + arrowheadWidth / 2);
  mergeContext.lineTo(currX + arrowLength / 2 - arrowheadLength / 2, arrowPosY + arrowWidth / 2);

  // Go back to the left until meeting left arrow head
  mergeContext.lineTo(currX - arrowLength / 2 + arrowheadLength / 2, arrowPosY + arrowWidth / 2);

  // Draw left arrow head
  mergeContext.lineTo(currX - arrowLength / 2 + arrowheadLength / 2, arrowPosY + arrowheadWidth / 2);
  mergeContext.lineTo(currX - arrowLength / 2, arrowPosY);
  mergeContext.lineTo(currX - arrowLength / 2 + arrowheadLength / 2, arrowPosY - arrowheadWidth / 2);
  mergeContext.lineTo(currX - arrowLength / 2 + arrowheadLength / 2, arrowPosY);

  mergeContext.lineTo(currX - arrowLength / 2 + arrowheadLength / 2, arrowPosY - arrowWidth / 2);
  mergeContext.lineTo(currX, arrowPosY - arrowWidth / 2);

  mergeContext.closePath();

  mergeContext.fillStyle = "#444444";
  mergeContext.fill();
}

new juxtapose.JXSlider('#juxtapose-embed',
  [
    {
      src: './static/images/input_1.png',
      label: 'Input image'
    },
    {
      src: './static/images/ours_1.png',
      label: 'Ours'
    }
  ],
  {
    animate: true,
    showLabels: true,
    showCredits: false,
    makeResponsive: true,
    startingPosition: "50%"
  }
);


function tab_gallery_click(idx) {
  const leftImage1 = `./static/images/input_${idx}.png`;
  const rightImage1 = `./static/images/ours_${idx}.png`;
  const leftImage2 = `./static/images/input_${idx}.png`;
  const rightImage2 = `./static/images/dds_${idx}.png`;

  document.getElementById("juxtapose-embed-1").innerHTML = "";
  document.getElementById("juxtapose-embed-2").innerHTML = "";

  new juxtapose.JXSlider('#juxtapose-embed-1',
    [
      { src: leftImage1, label: 'Input' },
      { src: rightImage1, label: 'Ours' }
    ],
    {
      animate: true,
      showLabels: true,
      showCredits: false,
      makeResponsive: true,
      startingPosition: "50%"
    });

  new juxtapose.JXSlider('#juxtapose-embed-2',
    [
      { src: leftImage2, label: 'Input' },
      { src: rightImage2, label: 'DDS' }
    ],
    {
      animate: true,
      showLabels: true,
      showCredits: false,
      makeResponsive: true,
      startingPosition: "50%"
    });
    const comparisonTexts = {
      '1': "A drawing of a gray <strong style='color:#bc0505;'>cat</strong> → A drawing of a gray <strong style='color:#bc0505;'>fox</strong>",
      '2': "A cup of <strong style='color:#bc0505';>coffee</strong> → A cup of <strong style='color:#bc0505';>matcha</strong>",
      '3': "A <strong style='color:#bc0505;'>blue</strong> butterfly → A <strong style='color:#bc0505;'>red</strong> butterfly",
      '4': "A <strong style='color:#bc0505;'>stack of stones</strong> → A <strong style='color:#bc0505;'>Buddha statue</strong>",
      '5': "A <strong style='color:#bc0505;'>white feather</strong> chicken → A <strong style='color:#bc0505;'>brown</strong> chicken",
      '6': "A <strong style='color:#bc0505;'>white</strong> stone lion → A <strong style='color:#bc0505;'>red</strong> stone lion",
    };
    

    const text = comparisonTexts[idx] || `Comparison ${idx}`;
    const textElem = document.getElementById("juxtapose-embed-text");
    textElem.innerHTML = text;

    textElem.style.fontSize = "1.5rem";
    textElem.style.fontWeight = "bold";
    textElem.style.fontFamily = "'Noto Sans', sans-serif";
}